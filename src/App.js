import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './props.css';
import './assets/css/responsive.css'
import './assets/css/swiper.bundle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/home/home';
import EmiCalculator from './components/insight-components.js/emi-calculator';
import PropertyEvaluationReport from './components/insight-components.js/property-evaluation-report';
import NriGuidelines from './components/insight-components.js/nri-guidelines';
import RealityCheck from './components/insight-components.js/reality-check-before-buying';
import AboutUs from './components/views/home/about-us';
import ContactUs from './components/views/home/contact-us';
import Career from './components/views/home/career';
import CommercialProjects from './components/projects/commercial-projects';
import CareerDetails from './components/views/home/career-details';
import AllProjects from './components/projects/all-projects';
import ProjectDetails from './components/projects/project-details';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <BrowserRouter basename='/star-estate-react'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/star-estate-react/emi-calculator' element={<EmiCalculator />} />
        <Route path='/star-estate-react/property-evaluation-report' element={<PropertyEvaluationReport />} />
        <Route path='/star-estate-react/nri-guidelines' element={<NriGuidelines />} />
        <Route path='/star-estate-react/reality-check-before-buying' element={<RealityCheck />} />
        <Route path='/:slugURL' element={<ProjectDetails />} />
        <Route path='/star-estate-react/about-us' element={<AboutUs />} />
        <Route path='/star-estate-react/contact-us' element={<ContactUs />} />
        <Route path='/star-estate-react/careers' element={<Career />} />
        <Route path='/careers/:location/:id' element={<CareerDetails />} />
        <Route path='/projects/:id' element={<CommercialProjects />} />
        <Route path='/star-estate-react/projects' element={<AllProjects />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
