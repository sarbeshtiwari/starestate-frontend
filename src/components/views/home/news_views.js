import React from 'react';

const newsItems = [
  { title: 'Awards', src: 'assets/images/awards-th.jpg', alt: 'Awards' },
  { title: 'News', src: 'assets/images/news-th.jpg', alt: 'News' },
  { title: 'Events', src: 'assets/images/events-th.jpg', alt: 'Events' },
  { title: 'Blogs', src: 'assets/images/blogs-th.jpg', alt: 'Blogs' }
];

const NewsViews = () => (
  <div className="padding container-lg">
    <div className="heading mx-auto text-center">
      <h3>News &amp; Views</h3>
    </div>
    <div className="hm-project-card-wrapper">
      <div className="row g-3">
        {newsItems.map((item, index) => (
          <div key={index} className="col-lg-3 col-sm-6 news-card">
            <a href="#" className="inner">
              <h5 className="card-title">{item.title}</h5>
              <div className="img-fluid">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="arrow"><i className="fa fa-arrow-right"></i></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NewsViews;
