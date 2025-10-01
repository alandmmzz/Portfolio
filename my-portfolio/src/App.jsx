import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './components/Footer/Footer';
import HomeContainer from './pages/Home/HomeContainer';
import ProjectsContainer from './pages/Projects/ProjectsContainer';
import FreelancerContainer from './pages/Freelancer/FreelancerContainer';
import ContactContainer from './pages/Contact/ContactContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/proyectos" element={<ProjectsContainer />} />
          <Route exact path="/freelancer" element={<FreelancerContainer />} />
          <Route exact path="/contacto" element={<ContactContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
