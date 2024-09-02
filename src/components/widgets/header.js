import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pageName = window.location.pathname.split('/').pop(); // Equivalent to PHP's $_SERVER['PHP_SELF']

    return (
        <>
           <header className="header">
            <div className="main-header">
                <div className="container-lg d-flex justify-content-between position-relative">
                    <nav className="navi">
                        <div className="logo">
                            <Link to="index-option5.php">
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
                                            <li><Link to="projects.php?type=residential">Residential</Link></li>
                                            <li><Link to="projects.php?type=commercial">Commercial</Link></li>
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
                        <div className="menuBtn" onClick={toggleMenu}>
                            <span id="menuLine1"></span>
                            <span id="menuLine2"></span>
                            <span id="menuLine3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

            <div className={`menuContainer ${isMenuOpen ? 'd-block' : 'd-none'} d-lg-none`}>
                <div className="container-lg">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link className="nav-link" to="/index.php">Home</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="javascript:;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Linkbout-us.php">About Star Estate</Link></li>
                                <li><Link className="dropdown-item" to="/Linkbout-us.php#mission">Mission & Vision</Link></li>
                                <li><Link className="dropdown-item" to="/Linkbout-us.php#star">Who We Are</Link></li>
                            </ul>
                        </li>
                        {/* Add other menu items similarly */}
                    </ul>
                </div>
                <div className="socialIcons stroke">
                    <ul className="nav list-inline">
                        <li className="list-inline-item"><Link to="https://www.facebook.com/starestate.in" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                        {/* Add other social icons similarly */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
