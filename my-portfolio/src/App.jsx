import { useEffect } from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Studies_Timeline from './components/Studies_Timeline/Studies_Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    const items = document.querySelectorAll(".study-item.has-details");

    items.forEach((item) => {
      const handleMouseEnter = () => item.classList.add("active");
      const handleMouseLeave = () => item.classList.remove("active");

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // Limpieza por si el componente se desmonta
      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Studies_Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
