import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Typed from 'typed.js';
import { fetchCategories, fetchCities, fetchProjects } from '../../../apis/home-page-api';
import './banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    cityLocation: '',
    projectConfiguration: '',
    projectPrice: '',
    property_type: '',
  });

  useEffect(() => {
    fetchCategories().then(data => setCategories(data)).catch(console.error);
    fetchCities().then(data => setCities(data)).catch(console.error);

    if (formData.property_type && formData.cityLocation) {
      fetchProjects(formData.property_type)
        .then(data => {
          const filteredProjects = data.filter(project => project.cityLocation === formData.cityLocation);
          console.log(filteredProjects);
          setProjects(filteredProjects);
        })
        .catch(console.error);
    }
  }, [formData.property_type, formData.cityLocation]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'property_type' && value) {
      await fetchProjects(value).then(data => setProjects(data)).catch(console.error);
    }

  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: ['Apartment', 'Villa', 'Mall', 'Office Space'],
      typeSpeed: 160,
      backDelay: 1500,
      backSpeed: 50,
      loop: true,
      preStringTyped: (arrayPos, self) => {
        const typedText = self.strings[arrayPos].trim();
        const items = ['Apartment', 'Villa', 'Mall', 'Office Space'];

        const foundIndex = items.indexOf(typedText);
        if (foundIndex !== -1) {
          setIndex(foundIndex);
        }
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="banner" className="carousel slide carousel-fade banner" data-pause="false" data-ride="carousel">
       <Carousel indicators={false} controls={false} activeIndex={index}>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 540px)" srcSet="images/homebanner/new/banner-apartments-m.jpg" />
            <img src="assets/images/homebanner/new/banner-apartments.jpg" alt="Star Estate" className="d-block w-100 carousel-img" />
          </picture>
          <span className="typing-text-in-carousel">Apartment</span>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 540px)" srcSet="images/homebanner/new/banner-villa-m.jpg" />
            <img src="assets/images/homebanner/new/banner-villa.jpg" alt="Star Estate" className="d-block w-100 carousel-img" />
          </picture>
          <span className="typing-text-in-carousel">Villa</span>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 540px)" srcSet="images/homebanner/new/banner-mall-m.jpg" />
            <img src="assets/images/homebanner/new/banner-mall.jpg" alt="Star Estate" className="d-block w-100 carousel-img" />
          </picture>
          <span className="typing-text-in-carousel">Mall</span>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 540px)" srcSet="images/homebanner/new/banner-office-m.jpg" />
            <img src="assets/images/homebanner/new/banner-office.jpg" alt="Star Estate" className="d-block w-100 carousel-img" />
          </picture>
          <span className="typing-text-in-carousel">Office Space</span>
        </Carousel.Item>
      </Carousel>
      <div className="banner-overlay">
        <div className="bannerContainer">
          <div className="container-lg">
            <div className="search-filter">
              <span className="h4">
                You deserve the best  <span id="typed" >Apartment</span><span className="typed-cursor" aria-hidden="true"></span>
              </span>
              <div className="filter-form">
                <form method="POST" id="categoryfilter" encType="multipart/form-data">
                  <div className="row g-2">
                    <div className="col-md-10">
                      <div className="inner">
                        <div className="row no-gutters">
                          <div className="col mb-0 form-group">
                            <select
                              name="property_type"
                              id="property_type"
                              className="form-select bg-white my-0"
                              value={formData.property_type}
                              onChange={handleChange}
                            >
                              <option value="">Property Type</option>
                              {categories
                                .filter(category => category.status)
                                .map(filteredCategory => (
                                  <option key={filteredCategory._id} value={filteredCategory.slugURL}>
                                    {filteredCategory.category}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="col mb-0 form-group">
                            <select
                              name="cityLocation"
                              id="cityLocation"
                              className="form-select bg-white my-0"
                              value={formData.cityLocation}
                              onChange={handleChange}
                            >
                              <option value="">Project Location</option>
                              {cities.map(city => (
                                <option key={city._id} value={city.slugURL}>
                                  {city.location}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col mb-0 form-group">
                            <select
                              name="projectPrice"
                              id="projectPrice"
                              className="form-select bg-white my-0"
                              value={formData.projectPrice}
                              onChange={handleChange}
                            >
                              <option value="">Budget</option>
                              <option value="1 Cr">Below 1 Cr.</option>
                              <option value="1 Cr">Above 1 Cr.</option>
                              <option value="2 Cr">Above 2 Cr.</option>
                              <option value="3 Cr">Above 3 Cr.</option>
                              <option value="4 Cr">Above 4 Cr.</option>
                              <option value="5 Cr">Above 5 Cr.</option>
                            </select>
                          </div>
                          {/* <div className="col mb-0 form-group">
                            <select
                              name="projectConfiguration"
                              id="projectConfiguration"
                              className="form-select bg-white my-0"
                              value={formData.projectConfiguration}
                              onChange={handleChange}
                            >
                              <option value="">Configuration</option>
                              <option value="2 BHK">2 BHK</option>
                              <option value="3 BHK">3 BHK</option>
                              <option value="4 BHK">4 BHK</option>
                              <option value="5 BHK">5 BHK</option>
                              <option value="Villa">Villa</option>
                              <option value="Independent Homes">Independent Homes</option>
                              <option value="Penthouse">Penthouse</option>
                            </select>
                          </div> */}
                          {/* <div className="col mb-0 form-group">
                            <select
                              name="projectName"
                              id="projectName"
                              className="form-select bg-white my-0"
                              value={formData.projectName}
                              onChange={handleChange}
                            >
                              <option value="">Projects</option>
                              {projects.map(project => (
                                <option key={project._id} value={project.projectName}>
                                  {project.projectName}
                                </option>
                              ))}
                            </select>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 readmore w-auto mt-0">
                      <input type="hidden" name="projectfltr" value="active" />
                      <button className="button w-100 h-100" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <div className="filter-property-type d-none d-md-flex">
                  <a href="#">New Launches</a>
                  <a href="#">Luxury Properties</a>
                  <Link to='/commercial-projects'>Commercial Properties</Link>
                  <a href="#">Residential Properties</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="scrollDown d-none d-md-block">Scroll<br /><i class="fa fa-chevron-down"></i></div>
    </div>
  );
};

export default Banner;
