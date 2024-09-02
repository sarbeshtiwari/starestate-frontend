import React from 'react';

const InsightsTools = () => {
    return (
        <div className="w-100 padding scrollto">
        <div className="container-lg">
            <div className="heading mx-auto text-center">
                <h3>Insights &amp; Tools</h3>
            </div>
            <div className="hm-project-card-wrapper">
                <div className="row g-3">
                    <div className="col-lg-3 col-sm-6 project-card">
                        <div className="inner px-0 pt-0">

                            <img src="assets/images/icons/img-emi.jpg" alt="" />
                            <div className="card-footer viewmore"><a href="emi-calculator.php">Explore Now</a></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 project-card">
                        <div className="inner px-0 pt-0">

                            <img src="assets/images/icons/img-evaluation-report.jpg" alt="" />
                            <div className="card-footer viewmore"><a href="property-evaluation-report.php">Explore Now</a></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 project-card">
                        <div className="inner px-0 pt-0">

                            <img src="assets/images/icons/img-nri.jpg" alt="" />
                            <div className="card-footer viewmore"><a href="#">Explore Now</a></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 project-card">
                        <div className="inner px-0 pt-0">

                            <img src="assets/images/icons/img-realty-check.jpg" alt="" />
                            <div className="card-footer viewmore"><a href="realty-check-before-buying-property.php">Explore Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default InsightsTools;
