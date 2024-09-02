import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './assets/css/swiper.bundle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/widgets/header';
import Footer from './components/widgets/footer';
import Home from './components/views/home/home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
