import React, { useEffect, useState } from 'react'
import axiosInstance from '../views/utils/axiosInstance';

function CommercialProjects() {
    const [commercialProjects, setCommercialProjects] = useState([]);

    useEffect(() => {
        const fetchCommercialProjects = async () => {
            try {
                const response = await axiosInstance.get(`/addProjects/getProjectByType/commercial`);
                const filteredCommercialProjects = response.data.filter(award => award.status === true);
                setCommercialProjects(filteredCommercialProjects);
            } catch (error) {
                console.error('Failed to fetch CommercialProjects', error);
            }
        };

        fetchCommercialProjects();
    }, []);
    return (
        <div>
            <div class="insideBanner">
                <div class="bannerContainer">
                    <div class="container-lg">
                        <div class="search-filter">
                            <div class="filter-form">
                                <form method="POST" id="categoryfilter" enctype="multipart/form-data">
                                    <div class="row g-2 gap-form-row">
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
                                                            <option value="Below 1 Cr.">Below 1 Cr.</option>
                                                            <option value="10000000">Above 1 Cr.</option>
                                                            <option value="20000000">Above 2 Cr.</option>
                                                            <option value="30000000">Above 3 Cr.</option>
                                                            <option value="40000000">Above 4 Cr.</option>
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

                    <img src="images/homebanner/new/banner-office.jpg" class="h-100 object-cover object-position-bottom" alt="Star Estate" />
                </picture>
            </div>
            <div class="w-100">
                <div class="container-lg">
                    <div class="breadcrumbContainer" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item active">Commercial</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="w-100 padding">
                <div className="container-lg">
                    <div className="heading mx-auto">
                        <h3 className="mb-0">Commercial</h3>
                    </div>
                    <div className="row gap-row">
                        {commercialProjects.map((project) => (
                            <div key={project.id} className="col-lg-4 col-sm-6 project_box">
                                <a href="#" className="project_box_inner">
                                    <div className="Project_box_img">
                                        <div className="reraBox position-absolute">
                                            <div className="qr_img"><img src={project.qrImage} alt="QR Code" /></div>
                                            <div className="rera_num">
                                                <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong>{project.rera_no}<br />
                                                    <small className="small text-primary"><i className="fa fa-link"></i> {project.reraLink}</small></small>
                                            </div>
                                        </div>
                                        <div className="img-fluid"><img src={`${axiosInstance.defaults.globalURL}${project.project_logo}`} alt={project.name} /></div>
                                    </div>
                                    <div className="project_box_details">
                                        <div className="project_developer_detail">
                                            <h4 className="mb-0 project_name">{project.projectBy}</h4>
                                            <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>{project.projectPrice}</h6>
                                        </div>
                                        <div className="project_status_detail">
                                            <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>{project.locationMap}</span>
                                            <span className="project_box_approved"><i className="fa fa-circle-check"></i> {project.approved}</span>
                                            <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> {project.project_status}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommercialProjects