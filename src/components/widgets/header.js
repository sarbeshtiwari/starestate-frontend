import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../views/utils/axiosInstance';
import logo from '../../assets/images/logo-starestate.png';


export const fetchCities = async () => {
    try {
        const response = await axiosInstance.get(`/city/getCities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
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
    useEffect(() => {
        const hasDropChildElements = document.querySelectorAll('.hasDropChild');

        const handleClick = function () {
            const dropdowns = document.querySelectorAll('.hasDropChild .dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });

            const dropdown = this.querySelector('.dropdown');
            if (dropdown.style.display === 'none') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        };

        hasDropChildElements.forEach(element => {
            element.addEventListener('click', handleClick);
        });

        // Cleanup event listeners on component unmount
        return () => {
            hasDropChildElements.forEach(element => {
                element.removeEventListener('click', handleClick);
            });
        };
    }, []);
    const [developers, setDevelopers] = useState([]);
    const [errors, setError] = useState([]);
    useEffect(() => {
        const fetchDeveloperDetails = async () => {
            try {
                const response = await axiosInstance.get(`/developers/getDeveloper`);
                console.log(response.data, "builder")
                setDevelopers(response.data);
            } catch (error) {
                setError('Error fetching project content');
                console.error('Error fetching project content:', error);
            }
        };

        fetchDeveloperDetails();
    }, []);
    return (
        <>
            <header className="header">
                <div className="main-header">
                    <div className="container-lg d-flex justify-content-between position-relative">
                        <nav className="navi">
                            <div className="logo">
                                <Link to='/'>
                                    <img src={logo} alt="Star Estate" />
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
                                                {cities.map((city) => (
                                                    <li key={city.id}>
                                                        <Link to="#">{city.location}</Link>
                                                    </li>
                                                ))}
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
                                                {developers.map((developer, index) => (
                                                    <li key={index}>
                                                        <Link to="#">{developer.developerName}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="haschild">
                                        <Link to='/star-estate-react/projects'>
                                            Projects <i className="fa fa-caret-down"></i>
                                        </Link>
                                        <div className="dropdown dropdown-lg">
                                            <div className="dropdown-title">Projects</div>
                                            <ul className="list-inline">
                                                <li><Link to="#">Luxury</Link></li>
                                                <li><Link to='/projects/residential'>Residential</Link></li>
                                                <li><Link to='/projects/commercial'>Commercial</Link></li>
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
                        <li><Link to='/star-estate-react' onClick={closeMenu}>Home</Link></li>
                        <li className="hasDropChild"><Link to='/about-us' onClick={closeMenu}>About Us
                            {/* <i className="fa fa-caret-down"></i> */}
                        </Link>
                            {/* <div className="dropdown">
                                <ul className="list-inline">
                                    <li><Link to='#' onClick={closeMenu}>About Star Estate</Link></li>
                                    <li><Link to='#' onClick={closeMenu}>Mission &amp; Vision</Link></li>
                                    <li><Link to='#' onClick={closeMenu}>Who We Are</Link></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="hasDropChild d-block d-sm-none">
                            <Link to="javascript:;">
                                City <i className="fa fa-caret-down"></i>
                            </Link>
                            <div className="dropdown">

                                <ul className="list-inline">
                                    {cities.map((city) => (
                                        <li key={city.id}>
                                            <Link to="#">{city.location}</Link>
                                        </li>
                                    ))}
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
                        <li className="hasDropChild d-block d-sm-none"><Link to='/star-estae-react/projects'>Projects <i className="fa fa-caret-down"></i></Link>
                            <div className="dropdown">
                                <ul className="list-inline">
                                    <li><Link to='#'>Luxury</Link></li>
                                    <li><Link to='/projects/residential'>Residential</Link></li>
                                    <li> <Link to='/projects/commercial'>Commercial</Link></li>
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
                        <li><Link to='/careers' onClick={closeMenu}>Careers</Link></li>
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
