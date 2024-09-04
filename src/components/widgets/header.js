import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <>
            <header className="header">
                <div className="main-header">
                    <div className="container-lg d-flex justify-content-between position-relative">
                        <nav className="navi">
                            <div className="logo">
                                <Link to='/'>
                                    <img src="assets/images/logo-starestate.png" alt="Star Estate" />
                                </Link>
                            </div>
                            <div className="menu d-none d-lg-block">
                                <ul className="list-inline">
                                    <li className="haschild">
                                        <Link to="javascript:;">
                                            City <i className="fa fa-caret-down"></i>
                                        </Link>
                                        <div className="dropdown dropdown-lg scroller">
                                            <div className="dropdown-title">City</div>
                                            <ul className="list-inline">
                                                <li><Link to="#">Mumbai</Link></li>
                                                <li><Link to="#">Pune</Link></li>
                                                <li><Link to="#">Bangalore</Link></li>
                                                <li><Link to="#">Delhi</Link></li>
                                                <li><Link to="#">Noida</Link></li>
                                                <li><Link to="#">Gurugram</Link></li>
                                                <li><Link to="#">Greater Noida</Link></li>
                                                <li><Link to="#">Agra</Link></li>
                                                <li><Link to="#">Ahmedabad</Link></li>
                                                <li><Link to="#">Mathura</Link></li>
                                                <li><Link to="#">Ghaziabad</Link></li>
                                                <li><Link to="#">Faridabad</Link></li>
                                                <li><Link to="#">Chennai</Link></li>
                                                <li><Link to="#">Mohali</Link></li>
                                                <li><Link to="#">Haridwar</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="haschild">
                                        <Link to="javascript:;">
                                            Builder <i className="fa fa-caret-down"></i>
                                        </Link>
                                        <div className="dropdown dropdown-lg scroller">
                                            <div className="dropdown-title">Builder</div>
                                            <ul className="list-inline">
                                                <li><Link to="#">ABA Corp</Link></li>
                                                <li><Link to="#">Ace</Link></li>
                                                <li><Link to="#">Adani Realty</Link></li>
                                                <li><Link to="#">Apex Group</Link></li>
                                                <li><Link to="#">Ashiana Housing</Link></li>
                                                <li><Link to="#">Assetz Property</Link></li>
                                                <li><Link to="#">ATS</Link></li>
                                                <li><Link to="#">Bhutani Group</Link></li>
                                                <li><Link to="#">Birla Estate</Link></li>
                                                <li><Link to="#">BPTP</Link></li>
                                                <li><Link to="#">DLF</Link></li>
                                                <li><Link to="#">Eldeco</Link></li>
                                                <li><Link to="#">Emaar India</Link></li>
                                                <li><Link to="#">Embassy Group</Link></li>
                                                <li><Link to="#">Exotica Housing</Link></li>
                                                <li><Link to="#">GAURS</Link></li>
                                                <li><Link to="#">Godrej Properties</Link></li>
                                                <li><Link to="#">Gulshan</Link></li>
                                                <li><Link to="#">Hero Realty</Link></li>
                                                <li><Link to="#">Hiranandani Developer</Link></li>
                                                <li><Link to="#">Kalpa-Taru</Link></li>
                                                <li><Link to="#">Kolte Patil Developer</Link></li>
                                                <li><Link to="#">L & T</Link></li>
                                                <li><Link to="#">Laureate Buildwell</Link></li>
                                                <li><Link to="#">Lodha</Link></li>
                                                <li><Link to="#">M3M</Link></li>
                                                <li><Link to="#">Mahagun</Link></li>
                                                <li><Link to="#">Max Estates</Link></li>
                                                <li><Link to="#">NIMBUS Group</Link></li>
                                                <li><Link to="#">Oberoi Realty</Link></li>
                                                <li><Link to="#">Omaxe Limited</Link></li>
                                                <li><Link to="#">Paras</Link></li>
                                                <li><Link to="#">Piramal Realty</Link></li>
                                                <li><Link to="#">Prateek Group</Link></li>
                                                <li><Link to="#">Prestige Group</Link></li>
                                                <li><Link to="#">Purvanchal</Link></li>
                                                <li><Link to="#">Raheja Developers</Link></li>
                                                <li><Link to="#">Raymond Realty</Link></li>
                                                <li><Link to="#">Shriram Properties</Link></li>
                                                <li><Link to="#">Signature Global</Link></li>
                                                <li><Link to="#">Smartworld Developers</Link></li>
                                                <li><Link to="#">Suncity Projects</Link></li>
                                                <li><Link to="#">TATA Value Homes</Link></li>
                                                <li><Link to="#">TVS Emerald</Link></li>
                                                <li><Link to="#">VTP Realty</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="haschild">
                                        <Link to="javascript:;">
                                            Projects <i className="fa fa-caret-down"></i>
                                        </Link>
                                        <div className="dropdown dropdown-lg">
                                            <div className="dropdown-title">Projects</div>
                                            <ul className="list-inline">
                                                <li><Link to="#">Luxury</Link></li>
                                                <li><Link to="#">Residential</Link></li>
                                                <li><Link to="#">Commercial</Link></li>
                                                <li><Link to="#">New Launches</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="searchContainer">
                            <button className="searchBtn" title="Register as a Channel Partner">
                                <span className="d-none d-lg-inline">Register as a Channel Partner</span>
                                <i className="fa fa-user"></i>
                            </button>
                            <button className="searchBtn" title="Search Property">
                                <span className="d-none d-lg-inline">Search Property</span>
                                <i className="fa fa-search"></i>
                            </button>
                            <div className={`menuBtn ${menuOpen ? 'closeMenuBtn' : ''}`} onClick={toggleMenu}>
                                <span id="menuLine1"></span>
                                <span id="menuLine2"></span>
                                <span id="menuLine3"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`menuContainer ${menuOpen ? 'open' : 'closed'}`}
                style={{ display: menuOpen ? 'block' : 'none' }}
            >
                <div className="bigMenuList">
                    <ul className="list-inline">
                        <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                        <li className="hasDropChild"><Link to='/about-us' onClick={closeMenu}>About Us <i className="fa fa-caret-down"></i></Link>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><Link to='#' onClick={closeMenu}>About Star Estate</Link></li>
                                    <li><Link to='#' onClick={closeMenu}>Mission &amp; Vision</Link></li>
                                    <li><Link to='#' onClick={closeMenu}>Who We Are</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="hasDropChild d-block d-sm-none"><a href="javascript:;">City <i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><a href="#">Mumbai</a></li>
                                    <li><a href="#">Pune</a></li>
                                    <li><a href="#">Bangalore</a></li>
                                    <li><a href="#">Delhi</a></li>
                                    <li><a href="#">Noida</a></li>
                                    <li><a href="#">Gurugram</a></li>
                                    <li><a href="#">Greater Noida</a></li>
                                    <li><a href="#">Agra</a></li>
                                    <li><a href="#">Ahmedabad</a></li>
                                    <li><a href="#">Mathura</a></li>
                                    <li><a href="#">Ghaziabad</a></li>
                                    <li><a href="#">Faridabad</a></li>
                                    <li><a href="#">Chennai</a></li>
                                    <li><a href="#">Mohali</a></li>
                                    <li><a href="#">Haridwar</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="hasDropChild d-block d-sm-none"><a href="javascript:;">Builder <i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><a href="#">ABA Corp</a></li>
                                    <li><a href="#">Ace</a></li>
                                    <li><a href="#">Adani Realty</a></li>
                                    <li><a href="#">Apex Group</a></li>
                                    <li><a href="#">Ashiana Housing</a></li>
                                    <li><a href="#">Assetz Property</a></li>
                                    <li><a href="#">ATS</a></li>
                                    <li><a href="#">Bhutani Group</a></li>
                                    <li><a href="#">Birla Estate</a></li>
                                    <li><a href="#">BPTP</a></li>
                                    <li><a href="#">DLF</a></li>
                                    <li><a href="#">Eldeco</a></li>
                                    <li><a href="#">Emaar India</a></li>
                                    <li><a href="#">Embassy Group</a></li>
                                    <li><a href="#">Exotica Housing</a></li>
                                    <li><a href="#">GAURS</a></li>
                                    <li><a href="#">Godrej Properties</a></li>
                                    <li><a href="#">Gulshan</a></li>
                                    <li><a href="#">Hero Realty</a></li>
                                    <li><a href="#">Hiranandani Developer</a></li>
                                    <li><a href="#">Kalpa-Taru</a></li>
                                    <li><a href="#">Kolte Patil Developer</a></li>
                                    <li><a href="#">L &amp; T</a></li>
                                    <li><a href="#">Laureate Buildwell</a></li>
                                    <li><a href="#">Lodha</a></li>
                                    <li><a href="#">M3M</a></li>
                                    <li><a href="#">Mahagun</a></li>
                                    <li><a href="#">Max Estates</a></li>
                                    <li><a href="#">NIMBUS Group</a></li>
                                    <li><a href="#">Oberoi Realty</a></li>
                                    <li><a href="#">Omaxe Limited</a></li>
                                    <li><a href="#">Paras</a></li>
                                    <li><a href="#">Piramal Realty</a></li>
                                    <li><a href="#">Prateek Group</a></li>
                                    <li><a href="#">Prestige Group</a></li>
                                    <li><a href="#">Purvanchal</a></li>
                                    <li><a href="#">Raheja Developers</a></li>
                                    <li><a href="#">Raymond Realty</a></li>
                                    <li><a href="#">Shriram Properties</a></li>
                                    <li><a href="#">Signature Global</a></li>
                                    <li><a href="#">Smartworld Developers</a></li>
                                    <li><a href="#">Suncity Projects</a></li>
                                    <li><a href="#">TATA Value Homes</a></li>
                                    <li><a href="#">TVS Emerald</a></li>
                                    <li><a href="#">VTP Realty</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="hasDropChild d-block d-sm-none"><a href="javascript:;">Projects <i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><Link to='#'>Luxury</Link></li>
                                    <li><Link to='#'>Residential</Link></li>
                                    <li><Link to='#'>Commercial</Link></li>
                                    <li><Link to='#'>New Launches</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="hasDropChild"><a href="javascript:;">Media <i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><a href="https://www.starestate.in/news">News</a></li>
                                    <li><a href="https://www.starestate.in/blogs">Blogs</a></li>
                                    <li><a href="https://www.starestate.in/research">Research</a></li>
                                    <li><a href="https://www.starestate.in/events">Events</a></li>
                                    <li><a href="https://www.starestate.in/advertisements">Advertisements</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to='#' onClick={closeMenu}>Client's Speak</Link></li>
                        <li><Link to='/career' onClick={closeMenu}>Careers</Link></li>
                        <li><Link to='/contact-us' onClick={closeMenu}>Contact us</Link></li>
                    </ul>
                </div>
                <div className="socialIcons stroke">
                    <ul className="list-inline">
                        <li style={{ '--i': 1 }}><a href="https://www.facebook.com/starestate.in" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li style={{ '--i': 2 }}><a href="https://www.instagram.com/starestate_official/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Instagram"><i className="fab fa-instagram"></i></a></li>
                        <li style={{ '--i': 3 }}><a href="https://www.linkedin.com/company/star-estate" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                        <li style={{ '--i': 4 }}><a href="https://twitter.com/starestate2" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li style={{ '--i': 5 }}><a href="https://www.youtube.com/channel/UCwfDf7Ut8jrkjiBeRnbZUPw" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="YouTube"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
