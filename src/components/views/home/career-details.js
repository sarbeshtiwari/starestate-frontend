import React, { useEffect, useState } from 'react'
import Header from '../../widgets/header'
import Footer from '../../widgets/footer'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function CareerDetails() {
    const { id } = useParams();

    const [jobDetails, setJobDetails] = useState([]);
    const [errors, setError] = useState([]);
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axiosInstance.get(`/jobs/getJobBySlugURL/${id}`);
                console.log(response.data)
                setJobDetails(response.data);
            } catch (error) {
                setError('Error fetching quick details');
                console.error('Error fetching quick details:', error);
            }
        };

        fetchJobDetails();
    }, [id]);

    return (
        <div>
            <Header />
            <div class="insideBanner">
                <picture>
                    <source media="(max-width: 820px)" srcset="images/banner-emi-calculator-m.jpg" />
                    <img src="images/banner-emi-calculator.jpg" class="h-100 object-cover" alt="Star Estate" />
                </picture>
            </div>
            <div class="w-100">
                <div class="container">
                    {jobDetails ? (
                        <div className="breadcrumbContainer" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item"><Link to='/careers'>Careers</Link></li>
                                <li className="breadcrumb-item active">{jobDetails.position}</li>
                            </ol>
                        </div>
                    ) : null}

                </div>
            </div>
            <div class="w-100 padding">
                <div class="container">
                    {jobDetails ? (
                        <>
                            <div className="heading mx-auto text-center">
                                <h3 className="mb-0">{jobDetails.position || 'Job Title'}</h3>
                            </div>
                            <article className="career-details">
                                <ul
                                    dangerouslySetInnerHTML={{
                                        __html: jobDetails.description || '', // Dynamically set the inner HTML
                                    }}
                                />
                                {/* <h5>Eligibility</h5>
                                <ul
                                    dangerouslySetInnerHTML={{
                                        __html: jobDetails.qualification || '', // Dynamically set the inner HTML
                                    }}
                                /> */}

                            </article>
                        </>
                    ) : (
                        <p>Loading job details...</p>
                    )}
                </div>
            </div>
            <div class="w-100 float-left padding bg-lightgray">
                <div class="container">
                    <div class="row gap-row">
                        <div class="col-lg-4 career-img"><img src="https://ecis.in/star-estate-react/images/careers-th.jpg" class="h-100 object-cover" alt="" /></div>
                        <div class="col-lg-8 anotherForm">
                            <div class="inner bg-gray-gradient-box p-3 h-100">
                                <div class="heading">
                                    <h3>Upload Resume</h3>
                                </div>
                                <form method="post" class="carforms" enctype="multipart/form-data">
                                    <span class="fixstatus text-danger"></span>
                                    <div class="row">
                                        <div class="col-sm-6 form-group">
                                            <input type="text" name="crname" id="crname" class="form-control bg-white" placeholder="Name*" onblur="this.placeholder='Name*'" onfocus="this.placeholder=''" />
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <input type="text" name="cremail" id="cremail" class="form-control bg-white" placeholder="Email*" onblur="this.placeholder='Email*'" onfocus="this.placeholder=''" />
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <input type="text" name="crmobile" id="crmobile" class="form-control bg-white" placeholder="Mobile*" onblur="this.placeholder='Mobile*'" onfocus="this.placeholder=''" />
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <select name="job_type" id="job_type" class="form-control bg-white">
                                                <option value="">Select Job Type</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-12 form-group">
                                            <label for="resume">Upload Resume</label>
                                            <input type="file" name="resume" id="resume" class="form-control bg-white" placeholder="Mobile*" onblur="this.placeholder='Mobile*'" onfocus="this.placeholder=''" />
                                        </div>
                                        <div class="col-sm-4 readmore mt-0">
                                            <input type="hidden" name="carrid" id="ucarid" value="17" />
                                            <input type="hidden" name="car_action" id="car_action" value="active" />
                                            <button type="submit" name="Submit" value="Submit" id="" class="button">Submit</button>
                                        </div>
                                        <div class="col-sm-12">
                                            <p class="mb-0 mt-5"><small>Didn’t find your job role! Email your resume to <a class="text-green text-decoration-underline" href="mailto:hr@starestate.in">hr@starestate.in</a>. We are always in search of talented professionals to join our team.</small></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default CareerDetails