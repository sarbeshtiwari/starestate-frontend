import React from 'react';


// Sample data, replace with actual data if available
const cities = [
  { src: '/star-estate-react/assets/images/cities/new/hyderabad.jpg', alt: 'Hyderabad' },
  { src: '/star-estate-react/assets/images/cities/new/noida.jpg', alt: 'Noida' },
  { src: '/star-estate-react/assets/images/cities/new/mumbai.jpg', alt: 'Mumbai' },
  { src: '/star-estate-react/assets/images/cities/new/pune.jpg', alt: 'Pune' },
  { src: '/star-estate-react/assets/images/cities/new/bangalore.jpg', alt: 'Bangalore' },
  { src: '/star-estate-react/assets/images/cities/new/delhi.jpg', alt: 'Delhi' },
  { src: '/star-estate-react/assets/images/cities/new/gurugram.jpg', alt: 'Gurugram' },
  { src: '/star-estate-react/assets/images/cities/new/other-cities.jpg', alt: 'Other Cities' }
];

const CitywiseContainer = () => (
  <div className="w-100 padding position-relative overflow-hidden hm-citywiseContainer animate-section2">
    <div className="container-lg">
      <div className="heading mx-auto text-center">
        <h3 className="mb-0">
          Find your dream property in the city you're searching in
        </h3>
      </div>
      <div className="all-cities">
        <div className="inner text-center">
          <div className="row g-3">
            {cities.map((city, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 project_box cityBox py-0">
                <div className="project_box_inner p-0">
                  <a href="#">
                    <div className="Project_box_img">
                      <div className="img-fluid">
                        <img src={city.src} alt={city.alt} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CitywiseContainer;
