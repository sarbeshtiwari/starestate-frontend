import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './assets/css/responsive.css'
import './assets/css/swiper.bundle.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/widgets/header';
import Footer from './components/widgets/footer';
import Home from './components/views/home/home';
import EmiCalculator from './components/insight-components.js/emi-calculator';
import PropertyEvaluationReport from './components/insight-components.js/property-evaluation-report';
import NriGuidelines from './components/insight-components.js/nri-guidelines';
import RealityCheck from './components/insight-components.js/reality-check-before-buying';
import LodhaBellevueMahalaxmi from './components/projects/lodha-bellevue-mahalaxmi';
import AboutUs from './components/views/home/about-us';
import ContactUs from './components/views/home/contact-us';
import Career from './components/views/home/career';
import CommercialProjects from './components/projects/commercial-projects';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/emi-calculator' element={<EmiCalculator />} />
        <Route path='/property-evaluation-report' element={<PropertyEvaluationReport />} />
        <Route path='/nri-guidelines' element={<NriGuidelines />} />
        <Route path='/reality-check-before-buying' element={<RealityCheck />} />
        <Route path='/lodha-bellevue-mahalaxmi' element={<LodhaBellevueMahalaxmi />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/commercial-projects' element={<CommercialProjects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
