import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
  return (
    <div className="w-100 position-relative overflow-hidden padding bg-lightgray hm-overviewContainer animate-section1">
    <div className="container-lg">
        <div className="heading mx-auto text-center">
            <h3>New Luxury Projects</h3>
        </div>
        <div className="swiper project-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div className="swiper-wrapper" id="swiper-wrapper-9bb101d471a8c415d" aria-live="polite" style={{transitionDuration: "0ms", transitionDelay: "0ms", transform: "translate3d(-376.667px, 0px, 0px)"}}>
                <div className="swiper-slide project_box swiper-slide-prev" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{width: "376.667px"}}>
                    <a href="#" className="project_box_inner">
                        <div className="Project_box_img">
                            <div className="reraBox position-absolute">
                                <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div className="rera_num">
                                    <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong> UPRERAPRJ446459<br /><small className="small text-primary"><i className="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/projects/max.jpg" alt="Max Estate 128" /></div>
                        </div>
                        <div className="project_box_details">
                            <div className="project_developer_detail">
                                <h4 className="mb-0 project_name">Max Estate 128</h4>
                                <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>7 Cr* onwards</h6>
                            </div>
                            <div className="project_status_detail">
                                <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>Sector 128, Noida</span>
                                <span className="project_box_approved"><i className="fa fa-circle-check"></i> RERA Approved</span>
                                <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide project_box swiper-slide-active" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{width: "376.667px"}}>
                    <a href="#" className="project_box_inner">
                        <div className="Project_box_img">
                            <div className="reraBox position-absolute">
                                <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div className="rera_num">
                                    <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong> UPRERAPRJ442214<br /><small className="small text-primary"><i className="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/projects/cullinan.jpg" alt="M3M The Cullinan" /></div>
                        </div>
                        <div className="project_box_details">
                            <div className="project_developer_detail">
                                <h4 className="mb-0 project_name">M3M The Cullinan</h4>
                                <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>5.75 Cr* onwards</h6>
                            </div>
                            <div className="project_status_detail">
                                <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>Sector 94, Noida</span>
                                <span className="project_box_approved"><i className="fa fa-circle-check"></i> RERA Approved</span>
                                <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide project_box swiper-slide-next" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{width: "376.667px"}}>
                    <a href="#" className="project_box_inner">
                        <div className="Project_box_img">
                            <div className="reraBox position-absolute">
                                <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div className="rera_num">
                                    <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong> UPRERAPRJ704730<br /><small className="small text-primary"><i className="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/projects/woods.jpg" alt="Godrej Woods" /></div>
                        </div>
                        <div className="project_box_details">
                            <div className="project_developer_detail">
                                <h4 className="mb-0 project_name">Godrej Woods</h4>
                                <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>2.50 Cr* onwards</h6>
                            </div>
                            <div className="project_status_detail">
                                <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>Sector 43, Noida</span>
                                <span className="project_box_approved"><i className="fa fa-circle-check"></i> RERA Approved</span>
                                <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide project_box" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{width: "376.667px"}}>
                    <a href="#" className="project_box_inner">
                        <div className="Project_box_img">
                            <div className="reraBox position-absolute">
                                <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div className="rera_num">
                                    <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong> DLRERA2019P0003<br /><small className="small text-primary"><i className="fa fa-link"></i> www.rera.delhi.gov.in</small></small>
                                </div>
                            </div>
                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/projects/prima.jpg" alt="Godrej Prima" /></div>
                        </div>
                        <div className="project_box_details">
                            <div className="project_developer_detail">
                                <h4 className="mb-0 project_name">Godrej Prima</h4>
                                <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>3.52 Cr* onwards</h6>
                            </div>
                            <div className="project_status_detail">
                                <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>Okhla, Delhi</span>
                                <span className="project_box_approved"><i className="fa fa-circle-check"></i> RERA Approved</span>
                                <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide project_box" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{width: "376.667px"}}>
                    <a href="#" className="project_box_inner">
                        <div className="Project_box_img">
                            <div className="reraBox position-absolute">
                                <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div className="rera_num">
                                    <small className="mb-0"><strong className="text-primary">Projects RERA No: </strong> UPRERAPRJ734569<br /><small className="small text-primary"><i className="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/projects/island.jpg" alt="The Islands By Gaurs" /></div>
                        </div>
                        <div className="project_box_details">
                            <div className="project_developer_detail">
                                <h4 className="mb-0 project_name">The Islands By Gaurs</h4>
                                <h6 className="mb-0 project_price"><i className="fa fa-indian-rupee-sign"></i>3.30 Cr* onwards</h6>
                            </div>
                            <div className="project_status_detail">
                                <span className="project_box_location"><i className="fa fa-map-marker-alt"></i>Pari Chowk, Jaypee Greens, Greater Noida</span>
                                <span className="project_box_approved"><i className="fa fa-circle-check"></i> RERA Approved</span>
                                <span className="project_box_status"><i className="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="swiper-controls h-auto mr-auto">
                    <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-865a9d491d9ef921"></div>
                    <div className="readmore w-auto mt-0"><a href="#" className="button reverse">View All</a></div>
                    <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-865a9d491d9ef921"></div>
                </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</div>
  );
};

export default ProjectsCarousel;
