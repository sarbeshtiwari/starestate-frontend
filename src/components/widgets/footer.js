import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../views/utils/axiosInstance';

export const fetchCities = async () => {
    try {
        const response = await axiosInstance.get(`/city/getCities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};
const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        }

        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const data = await fetchCities();
                setCities(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        getCities();
    }, []);
    return (
        <footer class="footer-area overflow-hidden float-left w-100">
            <div class="container-lg">
                <div class="padding border-bottom foot-links">
                    <div class="inner">
                        <div class="row gap-row">
                            <div class="col-md-12 col-sm-12 foot-menu">
                                <div class="insideBox">
                                    <h6>Cities</h6>
                                    <ul class="list-inline footer-cities d-flex flex-wrap">
                                        {cities.map((city) => (
                                            <li key={city.id}>
                                                <Link to="#">{city.location}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="padding foot-links">
                    <div class="inner">
                        <div class="row gap-row">
                            <div class="col foot-menu">
                                <div class="insideBox">
                                    <h6>Projects</h6>
                                    <ul class="list-inline">
                                        <li><a href="https://www.starestate.in/category/luxury">Luxury</a></li>
                                        <li><a href="https://www.starestate.in/category/commercial">Commercial</a></li>
                                        <li><a href="https://www.starestate.in/category/residential">Residential</a></li>
                                        <li><a href="https://www.starestate.in/category/new-launch">New Launchs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col foot-menu">
                                <div class="insideBox">
                                    <h6>Company</h6>
                                    <ul class="list-inline">
                                        <li><a href="https://www.starestate.in/about-us">About Star Estate</a></li>
                                        <li><a href="https://www.starestate.in/about-us#mission">Mission &amp; Vision</a></li>
                                        <li><a href="https://www.starestate.in/about-us#who-we-are">Who We Are</a></li>
                                        <li><a href="https://www.starestate.in/clients-speak">Client's Speak</a></li>
                                        <li><a href="https://www.starestate.in/faqs">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col foot-menu">
                                <div class="insideBox">
                                    <h6>Media</h6>
                                    <ul class="list-inline">
                                        <li><a href="#">Awards</a></li>
                                        <li><a href="https://www.starestate.in/news">News</a></li>
                                        <li><a href="https://www.starestate.in/events">Events</a></li>
                                        <li><a href="https://www.starestate.in/blogs">Blogs</a></li>
                                        <li><a href="https://www.starestate.in/advertisements">Advertisements</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col foot-menu">
                                <div class="insideBox">
                                    <h6>Explore</h6>
                                    <ul class="list-inline">
                                        <li><a href="https://www.starestate.in/careers">Careers</a></li>
                                        <li><a href="https://www.starestate.in/contact-us">Contact Us</a></li>
                                        <li><a href="https://www.starestate.in/buyer-guide">Buyer Guide</a></li>
                                        <li><a href="https://www.starestate.in/terms-and-conditions">Terms &amp; Conditions</a></li>
                                        <li><a href="https://www.starestate.in/sitemap">Sitemap</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col foot-menu socialBox">
                                <div class="insideBox">
                                    <h6>Get Social</h6>
                                    <ul class="list-inline socialIcons solid">
                                        <li class="list-inline-item"><a href="https://www.facebook.com/starestate.in" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="https://www.instagram.com/starestate_official/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Instagram"><i class="fab fa-instagram"></i></a></li>
                                        <li class="list-inline-item"><a href="https://www.linkedin.com/company/star-estate" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li class="list-inline-item"><a href="https://twitter.com/starestate2" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCwfDf7Ut8jrkjiBeRnbZUPw" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="YouTube"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="footer-bottom">
                <div class="container-lg">
                    <div class="footer-logo">
                        <a href="https://www.starestate.in/"><img src="https://www.starestate.in/assets/images/logo-starestate.png" alt="Star Estate" /></a>
                        <div class="partner-rera">
                            <p class="mb-0"><b>RERA No.: UPRERAAGT10202</b> <br />https://up-rera.in/Agents</p>
                        </div>
                    </div>
                    <div class="copyrights">
                        <p>© Star Estate 2024</p>
                        <p>Designed &amp; Developed by: <img src="https://www.starestate.in/assets/images/ecis.png" /></p>
                    </div>
                </div>
            </div>
            <div
                className="button-top"
                style={{
                    opacity: isScrolled ? (showButton ? 1 : 0) : 0,
                    pointerEvents: showButton ? 'auto' : 'none',
                    transition: 'opacity 0.5s ease',
                }}
                onClick={scrollToTop}
            >
                <i className="fa fa-chevron-up" style={{ color: 'white' }}></i>
            </div>
        </footer>
    );
}

export default Footer;
