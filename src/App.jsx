import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => (
  <div className="bg-primary text-secondary font-inter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Photography />
      <Contact />
      <Footer />
    </div>
);

export default App
