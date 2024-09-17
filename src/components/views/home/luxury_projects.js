import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import axiosInstance from '../utils/axiosInstance';
const ProjectsCarousel = () => {
    useEffect(() => {
        var swiper = new Swiper('.project-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 3,
                },
            }
        });
    }, []);
    const [allProjects, setAllProjects] = useState([]);
    const [errors, setError] = useState('');
    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const response = await axiosInstance.get(`/addProjects/getProject`);
                // console.log(response.data);
                setAllProjects(response.data); // Set the projects array here
            } catch (error) {
                setError('Error fetching project details');
                console.error('Error fetching project details:', error);
            }
        };
        fetchAllProjects();
    }, []);
    return (
        <div>
            <div className="w-100 position-relative overflow-hidden padding bg-lightgray hm-overviewContainer animate-section1">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h3>New Luxury Projects</h3>
                    </div>
                    <div className="swiper project-slider">
                        <div className="swiper-wrapper">
                            {allProjects.length > 0 ? (
                                allProjects.map((project) => (
                                    <div className="swiper-slide project_box" key={project.id}>
                                        <Link to={`/${project.slugURL}`} class="project_box_inner">
                                            <div className="Project_box_img">
                                                <div className="reraBox position-absolute">
                                                    <div className="qr_img">
                                                        <img src={`${axiosInstance.defaults.globalURL}${project.rera_qr}`} alt={project.projectName} />
                                                    </div>
                                                    <div className="rera_num">
                                                        <small className="mb-0">
                                                            <strong className="text-primary">Projects RERA No: </strong>
                                                            {project.rera_no}
                                                            <br />
                                                            {project.reraWebsite && (
                                                                <small className="small text-primary">
                                                                    <i className="fa fa-link"></i> {project.reraWebsite}
                                                                </small>
                                                            )}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="img-fluid">
                                                    <img src={`${axiosInstance.defaults.globalURL}${project.project_thumbnail}`} alt={project.projectName} />
                                                </div>
                                            </div>
                                            <div className="project_box_details">
                                                <div className="project_developer_detail">
                                                    <h4 className="mb-0 project_name">{project.projectName}</h4>
                                                    <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>{project.projectPrice}</h6>
                                                </div>
                                                <div className="project_status_detail">
                                                    <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>{project.projectAddress}</span>
                                                    <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i>{project.project_status}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p>No projects available.</p>
                            )}
                        </div>
                        <div className="swiper-controls h-auto mr-auto">
                            <div className="swiper-button-prev"></div>
                            <div className="readmore w-auto mt-0"><Link to='/projects' className="button reverse">View All</Link></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectsCarousel;
