import React from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Studies_Timeline from './components/Studies_Timeline/Studies_Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <AboutMe />
      {/* <Projects /> */}
      <Studies_Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
