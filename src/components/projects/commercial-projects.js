import React, { useEffect, useState } from 'react'
import axiosInstance from '../views/utils/axiosInstance';
import { Link, useParams } from 'react-router-dom';
import Header from '../widgets/header';
import Footer from '../widgets/footer';

function CommercialProjects() {
    const [projectName, setprojectName] = useState('');
    const [commercialProjects, setCommercialProjects] = useState([]);
    const [commercialDetails, setCommercialDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchCommercialDetails = async () => {
            try {
                const response = await axiosInstance.get(`/categories/getCategoryDetails/${id}`);
                const filteredCommercialProjectsDetails = response.data.filter(award => award.status === true);
                setCommercialDetails(filteredCommercialProjectsDetails);
            } catch (error) {
                console.error('Failed to fetch CommercialProjectsDetails', error);
            }
        };

        fetchCommercialDetails();
    }, []);
    useEffect(() => {
        const fetchCommercialProjects = async () => {
            try {
                const response = await axiosInstance.get(`/addProjects/getProjectByType/${id}`);
                const filteredCommercialProjects = response.data.filter(award => award.status === true);
                // console.log(filteredCommercialProjects);
                if (filteredCommercialProjects.length > 0) {
                    const projectName = filteredCommercialProjects[0].property_type;
                    // console.log(projectName)
                    setprojectName(capitalizeFirstLetter(projectName));
                }
                setCommercialProjects(filteredCommercialProjects);
                // console.log(response.data)
                return response.data;
            } catch (err) {
                console.error('Unexpected error:', err);
                throw err;
            }
        };
        fetchCommercialProjects();
    }, []);
    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <div>
            <Header />
            <div class="insideBanner">
                <div class="bannerContainer">
                    <div class="container-lg">
                        <div class="search-filter">
                            <div class="filter-form">
                                <form method="POST" id="categoryfilter" encType="multipart/form-data">
                                    <div class="row gx-2 gap-form-row">
                                        <div class="col-md-10">
                                            <div class="inner">
                                                <div class="row g-0">
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

                    <img src="/star-estate-react/assets/images/homebanner/new/banner-office.jpg" class="h-100 object-cover object-position-bottom" alt="Star Estate" />
                </picture>
            </div>
            <div class="w-100">
                <div class="container-lg">
                    <div class="breadcrumbContainer" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item"><Link to='/projects'>Projects</Link></li>
                            <li className="breadcrumb-item active">{projectName}</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="w-100 padding">
                <div className="container-lg">
                    <div className="heading mx-auto">
                        {commercialProjects.length > 0 && (
                            <React.Fragment>
                                <h3 className="mb-3 text-center">
                                    {commercialProjects[0].property_type === 'residential' ? 'Residential' : 'Commercial'}
                                </h3>
                                {commercialDetails.map((projectDetails) => (
                                    <p key={projectDetails.id} className="text-center" dangerouslySetInnerHTML={{ __html: projectDetails.content }}></p>
                                ))}
                            </React.Fragment>
                        )}
                    </div>

                    <div className="row gap-row">
                        {commercialProjects.map((project) => (
                            <div key={project.id} className="col-lg-4 col-sm-6 project_box">
                                <Link to={`/${project.slugURL}`} className="project_box_inner">
                                    <div className="Project_box_img">
                                        <div className="reraBox position-absolute">
                                            <div className="qr_img"><img src={`${axiosInstance.defaults.globalURL}${project.rera_qr}`} alt="QR Code" /></div>
                                            <div className="rera_num">
                                                <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong>{project.rera_no}<br />
                                                    <small className="small text-primary"><i className="fa fa-link"></i> {project.reraWebsite}</small></small>
                                            </div>
                                        </div>
                                        <div className="img-fluid"><img src={`${axiosInstance.defaults.globalURL}${project.project_thumbnail}`} alt={project.name} /></div>
                                    </div>
                                    <div className="project_box_details">
                                        <div className="project_developer_detail">
                                            <Link to={`/${project.slugURL}`} className="project_name">
                                                <h4 className="mb-0 project_name">{project.projectName}</h4>
                                            </Link>
                                            <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>{project.projectPrice}</h6>
                                        </div>
                                        <div className="project_status_detail">
                                            <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>{project.projectAddress}</span>
                                            {/* <span className="project_box_approved"><i className="fa fa-circle-check"></i> {project.approved}</span> */}
                                            <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> {project.project_status}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CommercialProjects