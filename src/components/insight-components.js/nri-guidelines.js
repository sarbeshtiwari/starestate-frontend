import React from 'react'
import { Link } from 'react-router-dom'

function NriGuidelines() {
    return (
        <div>
            <div className="insideBanner">

                    <picture>

                        <img src="https://ecis.in/star-estate-react/assets/images/banner-nri.jpg" className="h-100 object-cover object-position-bottom rounded" alt="Star Estate" />
                    </picture>

            </div>

            <div className="w-100">
                <div className="container">
                    <div className="breadcrumbContainer" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active">NRI Guidelines</li>
                        </ol>
                    </div>

                </div>
            </div>

            <div className="w-100 padding">
                <div className="container">
                    <div className="heading">
                        <h2 className="mb-0">Exclusive NRI Benefits</h2>
                    </div>
                    <div className="row gap-row">
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/financial-idea.svg" alt="Financial Solution" /></div>
                                <p className="mb-0 text-primary">Easy Financial Solutions</p>
                            </div>
                        </div>
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/lease.svg" alt="Easy Lease" /></div>
                                <p className="mb-0 text-primary">Easy Lease</p>
                            </div>
                        </div>
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/handshake.svg" alt="NRI Assistance" /></div>
                                <p className="mb-0 text-primary">Dedicated NRI Assistance (onsite)</p>
                            </div>
                        </div>
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/customer-support-stroke.svg" alt="Customer Care Assistance" /></div>
                                <p className="mb-0 text-primary">Customer Care Assistance</p>
                            </div>
                        </div>
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/special-offer.svg" alt="Exclusive Offers" /></div>
                                <p className="mb-0 text-primary">Exclusive Offers</p>
                            </div>
                        </div>
                        <div className="col-md-4 iconBox nri-iconBox">
                            <div className="d-flex flex-column align-items-center bg-lightgray">
                                <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/gifts-stroke.svg" alt="Special Gifts" /></div>
                                <p className="mb-0 text-primary">Special Gifts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 overview-right">
                <div className="container">
                    <div className="heading">
                        <h2 className="mb-0">NRI Guidelines</h2>
                    </div>
                    <div className="list-group list-group-flush faqsContainer">
                        <div className="accordion-wrapper" id="myAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Q1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Q2: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Q3: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Q4: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Q5: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        Q6: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseSix"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSix"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        Q7: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <i className="fa fa-plus ms-auto"></i>
                                    </button>
                                </h2>
                                <div
                                    id="collapseSeven"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven"
                                    data-bs-parent="#myAccordion"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                <b>A:</b> <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Add more accordion items here */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-100 padding">
                <div className="container">
                    <div className="heading">
                        <h2 className="mb-0">Express Your Interest</h2>
                    </div>
                    <div className="">
                        <form method="post">
                            <p className="status mb-0 text-warning"></p>
                            <div className="row g-3">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="name" className="form-label">Name<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-select" id="name" name="name" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="email" className="form-label">Email<sup className="text-danger">*</sup></label>
                                    <input type="email" className="form-select" name="email" id="email" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile<sup className="text-danger">*</sup></label>
                                    <input type="tel" className="form-select" name="mobile" id="mobile" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="msg_nri" className="form-label">Message</label>
                                    <textarea className="form-select" name="msg_nri" id="msg_nri" rows="5"></textarea>
                                </div>
                                <div className="col-md-12 d-flex readmore mt-0 justify-content-start">
                                    <input type="hidden" name="contact_action" value="active" />
                                    <button type="submit" className="button hoverOnWhite">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NriGuidelines