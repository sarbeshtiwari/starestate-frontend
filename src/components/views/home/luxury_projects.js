import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

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
    <div class="w-100 position-relative overflow-hidden padding bg-lightgray hm-overviewContainer animate-section1">
    <div class="container-lg">
        <div class="heading mx-auto text-center">
            <h3>New Luxury Projects</h3>
        </div>
        <div class="swiper project-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div class="swiper-wrapper" id="swiper-wrapper-9bb101d471a8c415d" aria-live="polite" style={{transitionDuration: "0ms", transitionDelay: "0ms", transform: "translate3d(-376.667px, 0px, 0px)"}}>
                <div class="swiper-slide project_box swiper-slide-prev" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{width: "376.667px"}}>
                    <a href="#" class="project_box_inner">
                        <div class="Project_box_img">
                            <div class="reraBox position-absolute">
                                <div class="qr_img"><img src="../assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div class="rera_num">
                                    <small class="mb-0"><strong class="text-primary">Projects RERA No: </strong> UPRERAPRJ446459<br /><small class="small text-primary"><i class="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div class="img-fluid"><img src="../assets/images/projects/max.jpg" alt="Max Estate 128" /></div>
                        </div>
                        <div class="project_box_details">
                            <div class="project_developer_detail">
                                <h4 class="mb-0 project_name">Max Estate 128</h4>
                                <h6 class="mb-0 project_price"><i class="fa fa-indian-rupee-sign"></i>7 Cr* onwards</h6>
                            </div>
                            <div class="project_status_detail">
                                <span class="project_box_location"><i class="fa fa-map-marker-alt"></i>Sector 128, Noida</span>
                                <span class="project_box_approved"><i class="fa fa-circle-check"></i> RERA Approved</span>
                                <span class="project_box_status"><i class="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="swiper-slide project_box swiper-slide-active" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{width: "376.667px"}}>
                    <a href="#" class="project_box_inner">
                        <div class="Project_box_img">
                            <div class="reraBox position-absolute">
                                <div class="qr_img"><img src="../assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div class="rera_num">
                                    <small class="mb-0"><strong class="text-primary">Projects RERA No: </strong> UPRERAPRJ442214<br /><small class="small text-primary"><i class="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div class="img-fluid"><img src="../assets/images/projects/cullinan.jpg" alt="M3M The Cullinan" /></div>
                        </div>
                        <div class="project_box_details">
                            <div class="project_developer_detail">
                                <h4 class="mb-0 project_name">M3M The Cullinan</h4>
                                <h6 class="mb-0 project_price"><i class="fa fa-indian-rupee-sign"></i>5.75 Cr* onwards</h6>
                            </div>
                            <div class="project_status_detail">
                                <span class="project_box_location"><i class="fa fa-map-marker-alt"></i>Sector 94, Noida</span>
                                <span class="project_box_approved"><i class="fa fa-circle-check"></i> RERA Approved</span>
                                <span class="project_box_status"><i class="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="swiper-slide project_box swiper-slide-next" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{width: "376.667px"}}>
                    <a href="#" class="project_box_inner">
                        <div class="Project_box_img">
                            <div class="reraBox position-absolute">
                                <div class="qr_img"><img src="../assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div class="rera_num">
                                    <small class="mb-0"><strong class="text-primary">Projects RERA No: </strong> UPRERAPRJ704730<br /><small class="small text-primary"><i class="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div class="img-fluid"><img src="../assets/images/projects/woods.jpg" alt="Godrej Woods" /></div>
                        </div>
                        <div class="project_box_details">
                            <div class="project_developer_detail">
                                <h4 class="mb-0 project_name">Godrej Woods</h4>
                                <h6 class="mb-0 project_price"><i class="fa fa-indian-rupee-sign"></i>2.50 Cr* onwards</h6>
                            </div>
                            <div class="project_status_detail">
                                <span class="project_box_location"><i class="fa fa-map-marker-alt"></i>Sector 43, Noida</span>
                                <span class="project_box_approved"><i class="fa fa-circle-check"></i> RERA Approved</span>
                                <span class="project_box_status"><i class="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="swiper-slide project_box" role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{width: "376.667px"}}>
                    <a href="#" class="project_box_inner">
                        <div class="Project_box_img">
                            <div class="reraBox position-absolute">
                                <div class="qr_img"><img src="../assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div class="rera_num">
                                    <small class="mb-0"><strong class="text-primary">Projects RERA No: </strong> DLRERA2019P0003<br /><small class="small text-primary"><i class="fa fa-link"></i> www.rera.delhi.gov.in</small></small>
                                </div>
                            </div>
                            <div class="img-fluid"><img src="../assets/images/projects/prima.jpg" alt="Godrej Prima" /></div>
                        </div>
                        <div class="project_box_details">
                            <div class="project_developer_detail">
                                <h4 class="mb-0 project_name">Godrej Prima</h4>
                                <h6 class="mb-0 project_price"><i class="fa fa-indian-rupee-sign"></i>3.52 Cr* onwards</h6>
                            </div>
                            <div class="project_status_detail">
                                <span class="project_box_location"><i class="fa fa-map-marker-alt"></i>Okhla, Delhi</span>
                                <span class="project_box_approved"><i class="fa fa-circle-check"></i> RERA Approved</span>
                                <span class="project_box_status"><i class="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="swiper-slide project_box" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{width: "376.667px"}}>
                    <a href="#" class="project_box_inner">
                        <div class="Project_box_img">
                            <div class="reraBox position-absolute">
                                <div class="qr_img"><img src="../assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                                <div class="rera_num">
                                    <small class="mb-0"><strong class="text-primary">Projects RERA No: </strong> UPRERAPRJ734569<br /><small class="small text-primary"><i class="fa fa-link"></i> www.up-rera.in/projects</small></small>
                                </div>
                            </div>
                            <div class="img-fluid"><img src="../assets/images/projects/island.jpg" alt="The Islands By Gaurs" /></div>
                        </div>
                        <div class="project_box_details">
                            <div class="project_developer_detail">
                                <h4 class="mb-0 project_name">The Islands By Gaurs</h4>
                                <h6 class="mb-0 project_price"><i class="fa fa-indian-rupee-sign"></i>3.30 Cr* onwards</h6>
                            </div>
                            <div class="project_status_detail">
                                <span class="project_box_location"><i class="fa fa-map-marker-alt"></i>Pari Chowk, Jaypee Greens, Greater Noida</span>
                                <span class="project_box_approved"><i class="fa fa-circle-check"></i> RERA Approved</span>
                                <span class="project_box_status"><i class="fa-brands fa-font-awesome"></i> Ongoing</span>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <div class="swiper-controls h-auto mr-auto">
                    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-865a9d491d9ef921"></div>
                    <div class="readmore w-auto mt-0"><a href="#" class="button reverse">View All</a></div>
                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-865a9d491d9ef921"></div>
                </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</div>
  );
};

export default ProjectsCarousel;
