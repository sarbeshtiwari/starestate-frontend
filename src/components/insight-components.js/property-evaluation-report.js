import React from 'react'
import { Link } from 'react-router-dom';

function PropertyEvaluationReport() {
    return (
        <div>
            <div className="insideBanner">

                    <picture>
                        <img src="https://ecis.in/star-estate-react/assets/images/banner-property-evaluation.jpg" className="img-fluid h-100 object-cover object-position-bottom rounded" alt="Star Estate" />
                    </picture>

            </div>

            <div class="w-100">
                <div class="container">
                    <div class="breadcrumbContainer" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item active">Property Evaluation Report</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="w-100 py-4">
                <div className="container">
                    <div className="heading">
                        <h2 className="mb-0">Property Evaluation Report</h2>
                    </div>
                    <div className="form-wrapper mt-4">
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ad. Iure eum explicabo delectus officiis voluptatem hic, mollitia laudantium tempora cum quae? Vero maxime nostrum iste quia recusandae quos totam!</p>
                        <div className="form-box">
                            <form>
                                <div className="form--section">
                                    <h6 className="form--title">Please select the property type</h6>
                                    <div className="row g-3">
                                        <div className="col-sm-5">
                                            <div className="d-flex bg-light rounded p-2">
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="residential" name="propertyType" checked className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="residential">Residential</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="commercial" name="propertyType" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="commercial">Commercial</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-7">
                                        <div className="custom-control-flexbox bg-darkgreen text-white rounded p-2">
                                        <div className="custom-control custom-radio form-check form-check-inline">
                                            <input type="radio" id="apartment" name="residentilType" defaultChecked  className="form-check-input" />
                                            <label className="form-check-label" for="apartment">Apartment</label>
                                        </div>
                                        <div className="custom-control custom-radio form-check form-check-inline">
                                            <input type="radio" id="builderfloor" name="residentilType" className="form-check-input" />
                                            <label className="form-check-label" for="builderfloor">Builder Floor</label>
                                        </div>
                                        <div className="custom-control custom-radio form-check form-check-inline">
                                            <input type="radio" id="independentfloor" name="residentilType" className="form-check-input" />
                                            <label className="form-check-label" for="independentfloor">Independent Floor</label>
                                        </div>
                                        <div className="custom-control custom-radio form-check form-check-inline">
                                            <input type="radio" id="villa" name="residentilType" className="form-check-input" />
                                            <label className="form-check-label" for="villa">Villa</label>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form--section">
                                    <h6 className="form--title">Please select the unit type and configuration</h6>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="BHK">BHK</label>
                                            <div className="d-flex">
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="bhk1" name="bhk" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="bhk1">1 BHK</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="bhk2" name="bhk" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="bhk2">2 BHK</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="bhk3" name="bhk" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="bhk3">3 BHK</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="bhk4" name="bhk" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="bhk4">4 BHK</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" id="bhk5" name="bhk" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="bhk5">5+ BHK</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="">Area</label>
                                            <input type="text" className="form-select" placeholder="Super Built-up Area (Sq. Ft.)" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form--section">
                                    <h6 className="form--title">Additional details</h6>
                                    <div className="row g-3">
                                        <div className="col-sm-8">
                                            <div className="row g-3">
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">Property age (optional)</label>
                                                    <input type="text" className="form-select" placeholder="in year" />
                                                </div>
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">Floor no. (optional)</label>
                                                    <input type="text" className="form-select" />
                                                </div>
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">Total floors in building (optional)</label>
                                                    <input type="text" className="form-select" />
                                                </div>
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">No. of covered parking (optional)</label>
                                                    <select className="form-select bg-light">
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">Facing (optional)</label>
                                                    <input type="text" className="form-select" placeholder="" />
                                                </div>
                                                <div className="col-sm-4 form-group mb-0">
                                                    <label htmlFor="">Unit no. (optional)</label>
                                                    <input type="text" className="form-select" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 form-group">
                                            <label htmlFor="">Write message (optional)</label>
                                            <textarea className="form-select" rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-section">
                                    <div className="readmore mt-3">
                                        <button className="button" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="formModalLabel">Please fill the given form.</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-container">
                                <form id="contact_form" method="post" onSubmit="return Enquiry();">
                                    <p className="status mb-0 text-warning"></p>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name<sup className="text-danger">*</sup></label>
                                        <input type="text" name="name" id="name" className="form-select" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email<sup className="text-danger">*</sup></label>
                                        <input type="email" name="email" id="email" className="form-select" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" name="phone" id="phone" className="form-select" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message<sup className="text-danger">*</sup></label>
                                        <textarea name="message" id="message" className="form-select"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyEvaluationReport;
