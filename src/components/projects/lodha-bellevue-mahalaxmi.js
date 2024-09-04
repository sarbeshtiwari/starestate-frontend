import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function LodhaBellevueMahalaxmi() {
    useEffect(() => {
    var amenity = new Swiper(".ameninity-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1900: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        }
    });
    var gal = new Swiper(".photo-slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    }); 
    var swiper3 = new Swiper(".full-project-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}, []);
    return (
        <div>
            <header className="header">
                <div className="main-header">
                    <div className="container-lg d-flex justify-content-between position-relative align-items-center">
                        <div className="logo"><Link to='/'><img src="https://ecis.in/star-estate-react/assets/images/logos/logo-lodha-bellevue.png" alt="Star Estate" /></Link></div>
                        <nav className="navi d-none d-lg-flex">
                            <div className="menu">
                                <ul className="list-inline">
                                    <li><a href="#overview">Overview</a></li>
                                    <li><a href="#amenities">Amenities</a></li>
                                    <li><a href="#floorplan">Plans & Price</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#location">Location</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="menuBtn d-flex d-lg-none">
                            <span id="menuLine1"></span>
                            <span id="menuLine2"></span>
                            <span id="menuLine3"></span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="menuContainer">
                <div className="bigMenuList">
                    <ul className="list-inline">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#floorplan">Plans & Price</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </div>
            </div>
            <div id="projectBanner" className="carousel slide projectBanner" data-pause="false" data-ride="carousel">
                <div className="reraBox d-flex d-lg-none mb-0 px-3 pt-2">
                    <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                    <div className="rera_num">
                        <small className="mb-0"><strong className="text-primary">MahaRERA No: </strong> P51900046567<br /><a href="http://maharera.mahaonline.gov.in" target="_blank" className="small text-primary"><i className="fa fa-link"></i> maharera.mahaonline.gov.in</a></small>
                    </div>
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item h-100 active">
                        <picture>
                            <source media="(max-width: 520px)" srcset="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide1-sm.webp" />
                            <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide1.webp" className="h-100 object-cover" alt="Star Estate" />
                        </picture>
                    </div>
                    <div className="carousel-item h-100">
                        <picture>
                            <source media="(max-width: 520px)" srcset="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide2-sm.webp" />
                            <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide2.webp" className="h-100 object-cover" alt="Star Estate" />
                        </picture>
                    </div>
                    <div className="carousel-item h-100">
                        <picture>
                            <source media="(max-width: 520px)" srcset="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide3-sm.webp" />
                            <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/slide3.webp" className="h-100 object-cover" alt="Star Estate" />
                        </picture>
                    </div>
                </div>
                <div className="container-lg hero-textbox d-none d-lg-block">
                    <div className="inner">
                        <div className="heading">
                            <h1 className="h3 mb-0">Lodha Bellevue</h1>
                            <h6 className="text-green page-location project-location pt-2"><small><i className="fa fa-map-marker-alt text-secondary"></i></small> Mahalaxmi, Mumbai</h6>
                        </div>
                        <ul className="list-inline hero-pointers">
                            <li><strong>Price:</strong> <span>₹4.35 Cr.*</span></li>
                            <li><span>2/3/4 BHK</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="heroFormContainer shadow">
                <div className="reraBox d-none d-lg-flex">
                    <div className="qr_img"><img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/Lodha_Bellevue_qr.png" alt="" /></div>
                    <div className="rera_num">
                        <small className="mb-0"><strong className="text-primary">MahaRERA No: </strong> P51900046567<br /><a href="http://maharera.mahaonline.gov.in" target="_blank" className="small text-primary"><i className="fa fa-link"></i> maharera.mahaonline.gov.in</a></small>
                    </div>
                </div>
                <div className="hero-textbox d-block d-lg-none">
                    <div className="inner">
                        <div className="heading">
                            <h1 className="h3 mb-0">Lodha Bellevue</h1>
                            <h6 className="text-green page-location project-location pt-2"><small><i className="fa fa-map-marker-alt text-secondary"></i></small> Mahalaxmi, Mumbai</h6>
                        </div>
                        <ul className="list-inline hero-pointers">
                            <li><strong>Price:</strong> <span>₹4.35 Cr.*</span></li>
                            <li><span>2/3/4 BHK</span></li>
                        </ul>
                    </div>
                </div>
                <div className="heading mb-0 d-none d-lg-block">
                    <h6>Price on Request</h6>
                </div>
                <form action="">
                    <div className="row g-0">
                        <div className="col-lg-12 col-md-4 col-sm-4 col form-group"><input type="text" className="form-select" placeholder="Name*" /></div>
                        <div className="col-lg-12 col-md-4 col-sm-4 form-group"><input type="text" className="form-select" placeholder="Your email address*" /></div>
                        <div className="col-lg-12 col-md-4 col-sm-4 form-group"><input type="text" className="form-select" placeholder="Your phone number*" /></div>
                        <div className="col-12 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1">I hereby agree for processing my personal data</label>
                            </div>
                        </div>
                    </div>
                    <div className="readmore mt-0 mx-auto ml-lg-0"><button className="button" type="submit">Send Message</button></div>
                </form>
            </div>


            <div id="overview" className="w-100 padding pb-0 projectDetails section-overview">
                <div className="container-lg">
                    <div className="section-details text-sm-center">
                        <div className="heading mx-auto text-center"><h2 className="mb-0">About the Project</h2></div>
                        <p>Brace up to experience a well-orchestrated lifestyle! <strong>Lodha Bellevue in Mahalaxmi, Mumbai</strong>, confers a spectacular living affair. The stunning architectural beauty embarks residents on a journey to enjoy exquisite comfort. The gigantic 5-acre area and above 85% greenery tailor the environment for a majestic lifestyle. Elope in the splendor of nature and witness the magic of positivity and blissfulness. It is one of its one-of-a-kind projects in the posh locality of the city that voices high-end living.</p>
                        <p>Lodha Bellevue in Mahalaxmi offers an elegant lifestyle and welcomes residents to admire the tropical landscape. With an array of conveniences, the township offers spacious and stylish living addresses. This project is a private paradise for affluents who dream of enjoying a fairytale life. The RERA-approved project let the affluents drench in exuberance while living in the centric location of the financial capital of India.</p>
                        <div className="readmore w-100 d-flex justify-content-center">
                            <a href="#formModal" data-toggle="modal" className="button gray">More Info</a>
                            <a href="#formModal" data-toggle="modal" className="button">Schedule Site Visit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 padding section-walkthrough">
                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 walkthroughBox">
                            <div className="inner overlayBox">
                                <div className="heading position-absolute mx-auto mb-0 text-white">
                                    <h2 className="mb-0">Walkthrough</h2>
                                    <div className="readmore mx-auto mt-3"><a href="#formModal" data-toggle="modal" className="button light">View</a></div>
                                </div>
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="amenities" className="w-100 padding position-relative overflow-hidden section-amenities bg-image" style={{backgroundImage: "url(./images/lodha-bellevue/banner-lodha-bellevue1.webp)"}}>
                <div className="container-lg">
                    <div className="heading mx-auto text-sm-center text-white">
                        <h2 className="mb-3">Amenities</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur debitis <br />placeat quasi qui! Quaerat, labore! Dolorum quam nemo adipisci?</p>
                    </div>
                    <div className="swiper ameninity-slider amenitiesContainer">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/kids-zone.svg" className="filter-white" alt="KIDS ZONE" /></div>
                                    <p className="mb-0">Kids Zone</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/badminton.svg" alt="Badminton Court" /></div>
                                    <p className="mb-0">Badminton Court</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/basketball.svg" alt="Basketball Court" /></div>
                                    <p className="mb-0">Basketball Court</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/jogging.png" alt="Jogging Track" /></div>
                                    <p className="mb-0">Jogging Track</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/amphitheatre.png" alt="Mini Amphitheatre" /></div>
                                    <p className="mb-0">Mini Amphitheatre</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/kids-zone.svg" alt="KIDS ZONE" /></div>
                                    <p className="mb-0">Kids Zone</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/badminton.svg" alt="Badminton Court" /></div>
                                    <p className="mb-0">Badminton Court</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/new/basketball.svg" alt="Basketball Court" /></div>
                                    <p className="mb-0">Basketball Court</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/security.png" alt="24x7 Security" /></div>
                                    <p className="mb-0">24x7 Security</p>
                                </div>
                            </div>
                            <div className="swiper-slide amenBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/cctv.png" alt="cctv" /></div>
                                    <p className="mb-0">CCTV Surveillance</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-controls">
                            <div className="swiper-button-prev bg-white"></div>
                            <div className="readmore mt-0"><a href="#formModal" data-toggle="modal" className="button light">View All</a></div>
                            <div className="swiper-button-next bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="floorplan" className="w-100 padding section-floorplan">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h2 className="mb-0">Floor Plans</h2>
                    </div>
                    <div className="fpContainer">
                        <div className="row gap-row justify-content-center">
                            <div className="col-xl-4 col-md-4 col-sm-6 fpBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/generic-floorplan.jpg" alt="" /></div>
                                    <div className="planBase">
                                        <div className="row justify-content-center justify-content-lg-start no-gutters">
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/bed.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Type</small>
                                                    <h6 className="mb-0">2 BHK + Study</h6>
                                                </div>
                                            </div>
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/area.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Area</small>
                                                    <small className="font-weight-bolder d-block">879 Sqft</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="readmore "><a href="#formModal" data-toggle="modal" className="button gray border-green w-100">Price on request</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 fpBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/generic-floorplan.jpg" alt="" /></div>
                                    <div className="planBase">
                                        <div className="row justify-content-center justify-content-lg-start no-gutters">
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/bed.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Type</small>
                                                    <h6 className="mb-0">3 BHK + Study</h6>
                                                </div>
                                            </div>
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/area.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Area</small>
                                                    <small className="font-weight-bolder d-block">1162 - 1206 Sqft</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="readmore "><a href="#formModal" data-toggle="modal" className="button gray border-green w-100">Price on request</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6 fpBox">
                                <div className="inner">
                                    <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/generic-floorplan.jpg" alt="" /></div>
                                    <div className="planBase">
                                        <div className="row justify-content-center justify-content-lg-start no-gutters">
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/bed.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Type</small>
                                                    <h6 className="mb-0">4 BHK + Study</h6>
                                                </div>
                                            </div>
                                            <div className="col-12 fpDetails">
                                                <div className="icon">
                                                    <img src="https://ecis.in/star-estate-react/assets/images/icons/area.png" alt="" />
                                                </div>
                                                <div className="fptypes">
                                                    <small>Area</small>
                                                    <small className="font-weight-bolder d-block">1641 - 1797 Sqft</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="readmore "><a href="#formModal" data-toggle="modal" className="button gray border-green w-100">Price on request</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gallery" className="w-100 padding bg-dark section-gallery">
                <div className="container-lg">
                    <div className="heading mx-auto text-center text-white">
                        <h2 className="mb-0">Gallery</h2>
                    </div>
                    <div className="swiper photo-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/1.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/2.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/3.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/4.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/5.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/6.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/7.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/8.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/9.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                            <div className="swiper-slide gal-slide">
                                <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/gallery/10.webp" alt="" />
                                <div className="caption">Lodha Bellevue</div>
                            </div>
                        </div>
                        <div className="swiper-button-prev fullcontrol"></div>
                        <div className="swiper-button-next fullcontrol"></div>
                    </div>
                </div>
            </div>

            <div id="location" className="w-100 padding section-location">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h2 className="mb-0">Location</h2>
                    </div>
                    <div className="row gap-row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="mapBox bg-gray-gradient-box p-3 h-100">
                                <div className="inner h-100">
                                    <a href="#formModal" data-toggle="modal">
                                        <img src="https://ecis.in/star-estate-react/assets/images/lodha-bellevue/location-map.webp" className="h-100 object-cover" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hm-project-icons">
                                <div className="row g-3 gap-form-row">
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/metro.png" alt="Metro Station" /></div>
                                            <p className="mb-0">Mahalaxmi Railway Station <span className="badge badge-primary">5 min</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/metro.png" alt="Metro Station" /></div>
                                            <p className="mb-0">Upcoming Mahalaxmi Metro<span className="badge badge-primary">5 min</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/highway.png" alt="Highway" /></div>
                                            <p className="mb-0">Mahalaxmi Race Course <span className="badge badge-primary">10 min</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/shopping-cart.png" alt="DMart" /></div>
                                            <p className="mb-0">Palladium & High Street Phoenix <span className="badge badge-primary">10 min</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/highway.png" alt="Metro Station" /></div>
                                            <p className="mb-0">Bandra-Worli Sea Link <span className="badge badge-primary">15 min</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 iconBox locationIconBox">
                                        <div className="bg-gray-gradient-box d-flex align-items-center">
                                            <div className="img-fluid"><img src="https://ecis.in/star-estate-react/assets/images/icons/airport.png" alt="Airport" /></div>
                                            <p className="mb-0">Domestic & International Airport <span className="badge badge-primary">40 min</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addressContainer bg-gray-gradient-box border-green">
                                <div className="row g-0 gap-form-row">
                                    <div className="col-sm-6 iconBox">
                                        <p className="mb-0"><strong className="text-primary">Address: </strong> <span>Mahalaxmi, Mumbai</span></p>
                                    </div>
                                    <div className="col-sm-6 iconBox">
                                        <p className="mb-0"><strong className="text-primary">City: </strong> <span>Mumbai</span></p>
                                    </div>
                                    <div className="col-sm-6 iconBox">
                                        <p className="mb-0"><strong className="text-primary">State: </strong> <span>Maharashtra</span></p>
                                    </div>
                                    <div className="col-sm-6 iconBox">
                                        <p className="mb-0"><strong className="text-primary">Country: </strong> <span>India</span></p>
                                    </div>
                                </div>
                                <div className="readmore"><a href="#formModal" data-toggle="modal" className="button gray"><i className="fa fa-map-marker-alt"></i> View on Map</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-gray-gradient-box padding section-partner mb-1">
                <div className="container-lg">
                    <div className="heading mx-auto text-center">
                        <h2 className="">Get in Touch</h2>
                        <p className="mb-0">If you would like to know more details or something specific, feel free to contact us. <br />Our site representative will give you a call back.</p>
                    </div>
                    <div className="touchFormWrapper">
                        <form action="">
                            <div className="row g-0 ">
                                <div className="col-md-4 col-sm-4 col form-group"><input type="text" className="form-select" placeholder="Name*" /></div>
                                <div className="col-md-4 col-sm-4 form-group">
                                    <div className="row no-gutters">
                                        <div className="col-2"><input type="text" className="form-select bg-light border-right" value="+91" readonly /></div>
                                        <div className="col-10"><input type="tel" className="form-select" placeholder="Mobile*" /></div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 form-group"><input type="email" className="form-select" placeholder="Email*" /></div>
                                <div className="col-12 form-group">
                                    <div className="custom-control custom-checkbox text-center">
                                        <input type="checkbox" className="custom-control-input" checked id="agree" />
                                        <label className="custom-control-label" for="agree">I hereby agree for processing my personal data</label>
                                    </div>
                                </div>
                            </div>
                            <div className="readmore mt-0 mx-auto"><button className="button" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-100 padding bg-lightgray section-partner">
                <div className="container-lg">
                    <div className="partnerBox">
                        <div className="heading text-center mb-0">
                            <h6 className="text-uppercase mb-3">Marketing Partner</h6>
                            <img src="https://ecis.in/star-estate-react/assets/images/logo-starestate.png" className="partner-logo" alt="" />
                        </div>
                        <div className="partner-rera">
                            <p className="mb-0"><b>RERA No.: UPRERAAGT10202</b> <br />https://up-rera.in/Agents</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="formModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-header">
                            <h6 className="modal-title text-secondary">Please fill the given form.</h6>
                        </div>
                        <div className="modal-body">
                            <div className="formContainer text-white">
                                <div className="form">
                                    <form className="form-container" id="contact_form" method="post" onsubmit="return Enquiry();">
                                        <p className="status mb-0 text-warning"></p>
                                        <div className="form-row">
                                            <div className="col-md-12 form-group">
                                                <label for="name">Name<sup className="text-danger">*</sup></label>
                                                <input type="text" className="form-control form-control-white" id="name" name="name" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <label for="email">Email<sup className="text-danger">*</sup></label>
                                                <input type="email" className="form-control form-control-white" name="email" id="email" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <label for="mobile">Mobile<sup className="text-danger">*</sup></label>
                                                <input type="tel" className="form-control form-control-white" name="mobile" id="mobile" />
                                            </div>
                                            <div className="col-md-12 formFooter readmore mt-0">
                                                <input type="hidden" name="contact_action" value="active" />
                                                <input type="hidden" id="pagename" name="pagename" value="" />
                                                <input type="hidden" name="utm_source" value="" />
                                                <input type="hidden" name="utm_medium" value="" />
                                                <input type="hidden" name="utm_campaign" value="" />
                                                <button type="submit" className="button light mx-auto">Submit</button>
                                            </div>
                                            <div className="col-md-12 modal-call text-center mt-4 d-flex align-items-center justify-content-center">
                                                <h6 className="mb-0">Request a Call Back</h6>
                                                <div className="readmore ml-3 mt-0"><a href="#" className="button light"><i className="fa fa-phone"></i><span id="ivrmodal">+91 000 0000 000</span></a></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-enquiryBtn d-flex d-sm-none">
                <a className="monCall" id="mobPhone" href="tel:+91"><strong><i className="fa fa-phone"></i> Call</strong></a>
                <a id="mobEnquiry" href="#formModal" data-toggle="modal"><strong><i className="fa fa-envelope"></i>
                    Enquire</strong></a>
                <a className="whatsCall" href="https://api.whatsapp.com/send?phone=+91&amp;text=Hi I am interested in Lodha Bellevue, Please share the details." target="_blank"><strong><i className="fab fa-whatsapp"></i> WhatsApp</strong></a>
            </div>

            <div className="footer-bottom">
                <div className="container-lg justify-content-center">
                    <div className="copyrights">
                        <p>Copyrights © Star Estate 2024</p>
                    </div>
                </div>
            </div>
            <div className="button-top"><i className="fa fa-chevron-up"></i></div>
        </div>
    )
}

export default LodhaBellevueMahalaxmi