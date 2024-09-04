import React from 'react'
import { Link } from 'react-router-dom'

function RealityCheck() {
  return (
    <div>
         <div className="insideBanner">

            <picture>

                <img src="https://ecis.in/star-estate-react/assets/images/banner-realty-check.jpg" className="h-100 object-cover object-position-bottom rounded" alt="Star Estate" />
            </picture>
       
    </div>        

    <div className="w-100">
        <div className="container">
            <div className="breadcrumbContainer" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active">Realty Check before Buying Property</li>
                </ol>
            </div>

        </div>
    </div>


    
    <div className="w-100 padding">
        <div className="container">
            <div className="heading">
                <h2 className="mb-0 ">Realty Check before Buying Property</h2>
            </div>
            <div className="row gap-row">
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/seal-certificate-stroke.svg" alt="Approvals and Certifications" /></div>
                        <p className="mb-0 text-primary">Approvals and Certifications</p>
                    </div>
                </div>
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/reputation-stroke.svg" alt="Builder’s Reputation" /></div>
                        <p className="mb-0 text-primary">Builder’s Reputation</p>
                    </div>
                </div>
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/map-stroke.svg" alt="Location and Infrastructure" /></div>
                        <p className="mb-0 text-primary">Location and Infrastructure</p>
                    </div>
                </div>
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/legal-document.svg" alt="Legal Compliance" /></div>
                        <p className="mb-0 text-primary">Legal Compliance</p>
                    </div>
                </div>
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/financial-aspect.svg" alt="Financial Aspects" /></div>
                        <p className="mb-0 text-primary">Financial Aspects</p>
                    </div>
                </div>
                <div className="col-md-4 iconBox nri-iconBox">
                    <div className="d-flex flex-column align-items-center bg-light">
                        <div className="img-fluid size-md"><img src="https://ecis.in/star-estate-react/assets/images/icons/physical-verification.svg" alt="Physical Verification" /></div>
                        <p className="mb-0 text-primary">Physical Verification</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default RealityCheck