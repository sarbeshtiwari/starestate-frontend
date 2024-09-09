import React, { useEffect, useState } from 'react'
import axiosInstance from '../views/utils/axiosInstance';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import { Link } from 'react-router-dom';

function AllProjects() {

    const [allProjects, setAllProjects] = useState([]);
    const [errors, setError] = useState([]);
    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const response = await axiosInstance.get(`/addProjects/getProject`);
                console.log(response.data)
                setAllProjects(response.data);
            } catch (error) {
                setError('Error fetching quick details');
                console.error('Error fetching quick details:', error);
            }
        };

        fetchAllProjects();
    }, []);

    return (
        <div>
            <Header />
            <div class="insideBanner">
                <div class="bannerContainer">
                    <div class="container-lg">
                        <div class="search-filter">
                            <div class="filter-form">
                                <form method="POST" id="categoryfilter" enctype="multipart/form-data">
                                    <div class="row gx-2 gap-form-row">
                                        <div class="col-md-10">
                                            <div class="inner">
                                                <div class="row no-gutters">
                                                    <div class="col mb-0 form-group">
                                                        <select name="location" id="location" class="form-control bg-white my-0">
                                                            <option value="">Project Location</option>
                                                            <option value="Pune">Pune</option>
                                                            <option value="Ahmedabad">Ahmedabad</option>
                                                            <option value="Bangalore">Bangalore</option>
                                                            <option value="Mumbai">Mumbai</option>
                                                            <option value="Mathura">Mathura</option>
                                                            <option value="Agra">Agra</option>
                                                            <option value="Ghaziabad">Ghaziabad</option>
                                                            <option value="Faridabad">Faridabad</option>
                                                            <option value="Delhi">Delhi</option>
                                                            <option value="Gurugram">Gurugram</option>
                                                            <option value="Noida">Noida</option>
                                                        </select>
                                                    </div>
                                                    <div class="col mb-0 form-group">
                                                        <select class="form-control bg-white my-0">
                                                            <option value="">Budget</option>
                                                            <option value="Below 1 Cr.">Upto 1 Cr.</option>
                                                            <option value="10000000">1 - 3 Cr.</option>
                                                            <option value="30000000">3 - 5 Cr.</option>
                                                            <option value="50000000">Above 5 Cr.</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 readmore w-auto mt-0">
                                            <input type="hidden" name="projectfltr" value="active" />
                                            <button class="button w-100 h-100" type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <picture>
                    <source media="(max-width: 520px)" srcset="images/banner-commercial-m.jpg" />
                    <img src="/star-estate-react/assets/images/homebanner/new/banner-office.jpg" class="h-100 object-cover object-position-bottom" alt="Star Estate" />
                </picture>
            </div>
            <div class="w-100">

                <div class="container-lg">

                    <div class="breadcrumbContainer" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/star-estate-react'>Home</Link></li>
                            <li class="breadcrumb-item active">Projects</li>
                        </ol>
                    </div>
                </div>

            </div>
            <div class="w-100 padding">
                <div class="container-lg">
                    <div class="heading mx-auto">
                        <h3 class="mb-0">Projects</h3>
                    </div>
                    <div class="row gap-row">
                        {allProjects.length > 0 ? (
                            allProjects.map((project) => (
                                <div class="col-lg-4 col-sm-6 project_box" key={project._id}>
                                    <Link to={`/${project.slugURL}`} class="project_box_inner">
                                        <div class="Project_box_img">
                                            <div class="reraBox position-absolute">
                                                <div class="qr_img">
                                                    <img src={`${axiosInstance.defaults.globalURL}${project.rera_qr}`} alt={project.projectName} />
                                                </div>
                                                <div class="rera_num">
                                                    <small class="mb-0">
                                                        <strong class="text-primary">Projects RERA No: </strong>
                                                        {project.rera_no}
                                                        <br />
                                                        {project.reraWebsite && (
                                                            <small class="small text-primary">
                                                                <i class="fa fa-link"></i> {project.reraWebsite}
                                                            </small>
                                                        )}
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="img-fluid">
                                                <img src={`${axiosInstance.defaults.globalURL}${project.project_thumbnail}`} alt={project.projectName} />
                                            </div>
                                        </div>
                                        <div class="project_box_details">
                                            <div class="project_developer_detail">
                                                <h4 class="mb-0 project_name">{project.projectName}</h4>
                                                <h6 class="mb-0 project_price">
                                                    <i class="fa fa-indian-rupee-sign"></i> {project.projectPrice}
                                                </h6>
                                            </div>
                                            <div class="project_status_detail">
                                                <span class="project_box_location">
                                                    <i class="fa fa-map-marker-alt"></i> {project.projectAddress}
                                                </span>
                                                {/* <span class="project_box_status">
                                                    <i class="fa-brands fa-font-awesome"></i> {project.project_status[0]}
                                                </span> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No projects available</p>
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllProjects