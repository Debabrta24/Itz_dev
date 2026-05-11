import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-black dark:text-white transition-colors duration-300 px-4 sm:px-6 lg:px-8">
       <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;