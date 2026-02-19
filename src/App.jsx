import NavBar from "./layout/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <hr className="w-3/4 mx-auto border-2 border-primary"/>
      <Footer />
    </div>
  );
};

export default App;
