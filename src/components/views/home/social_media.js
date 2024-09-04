import React, { useEffect } from 'react';
import Swiper from 'swiper';

const SocialMediaFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.dataset.useServiceCore = "";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleToggle = (target) => {
        document.querySelectorAll('.toggleBtn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.toggleBtn[data-target="${target}"]`).classList.add('active');
        // Add logic to display corresponding feed
    };
    useEffect(() => {
        var social = new Swiper(".social-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
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
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }
        });
      }, []);
    return (
        <>
            <div class="w-100 padding overflow-hidden hm-newsContainer">
                <div class="container-lg">
                    <div class="heading mx-auto text-center">
                        <h3>Social Media Feed</h3>
                    </div>
                    <div class="toggleHead">
                        <button
                            className="toggleBtn active"
                            data-bs-target="instagram"
                            style={{ '--clr': 'var(--instagram)' }}
                        >
                            <i className="fab fa-instagram"></i> Instagram
                        </button>
                        <button
                            className="toggleBtn"
                            data-bs-target="youtube"
                            style={{ '--clr': 'var(--youtube)' }}
                        >
                            <i className="fab fa-youtube"></i> YouTube
                        </button>

                    </div>
                    <div class="social-container">
                        <div class="swiper social-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide socialBox">
                                    <div class="cube-container">
                                        <div class="photo-cube">
                                            <figure class="img-fluid h-100 front">
                                                <img src="../assets/images/instagram/1.jpg" class="h-100 object-cover" alt="" />
                                            </figure>
                                            <div class="left photo-desc">
                                                <i class="fab fa-instagram"></i>
                                                <div class="likes d-flex justify-content-center align-items-center">
                                                    <span><i class="fa-regular fa-heart"></i> 88</span>
                                                    <span><i class="fa-regular fa-comment"></i> 4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide socialBox">
                                    <div class="cube-container">
                                        <div class="photo-cube">
                                            <figure class="img-fluid h-100 front">
                                                <img src="../assets/images/instagram/2.jpg" class="h-100 object-cover" alt="" />
                                            </figure>
                                            <div class="left photo-desc">
                                                <i class="fab fa-instagram"></i>
                                                <div class="likes d-flex justify-content-center align-items-center">
                                                    <span><i class="fa-regular fa-heart"></i> 31</span>
                                                    <span><i class="fa-regular fa-comment"></i> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide socialBox">
                                    <div class="cube-container">
                                        <div class="photo-cube">
                                            <figure class="img-fluid h-100 front">
                                                <img src="../assets/images/instagram/3.jpg" class="h-100 object-cover" alt="" />
                                            </figure>
                                            <div class="left photo-desc">
                                                <i class="fab fa-instagram"></i>
                                                <div class="likes d-flex justify-content-center align-items-center">
                                                    <span><i class="fa-regular fa-heart"></i> 5</span>
                                                    <span><i class="fa-regular fa-comment"></i> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide socialBox">
                                    <div class="cube-container">
                                        <div class="photo-cube">
                                            <figure class="img-fluid h-100 front">
                                                <img src="../assets/images/instagram/4.jpg" class="h-100 object-cover" alt="" />
                                            </figure>
                                            <div class="left photo-desc">
                                                <i class="fab fa-instagram"></i>
                                                <div class="likes d-flex justify-content-center align-items-center">
                                                    <span><i class="fa-regular fa-heart"></i> 9</span>
                                                    <span><i class="fa-regular fa-comment"></i> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide socialBox">
                                    <div class="cube-container">
                                        <div class="photo-cube">
                                            <figure class="img-fluid h-100 front">
                                                <img src="../assets/images/instagram/5.jpg" class="h-100 object-cover" alt="" />
                                            </figure>
                                            <div class="left photo-desc">
                                                <i class="fab fa-instagram"></i>
                                                <div class="likes d-flex justify-content-center align-items-center">
                                                    <span><i class="fa-regular fa-heart"></i> 8</span>
                                                    <span><i class="fa-regular fa-comment"></i> 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SocialMediaFeed;