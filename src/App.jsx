import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DevAI from "./components/dev_ai";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 px-4 sm:px-6 lg:px-8">
       <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <DevAI />
    </div>
  );
}

export default App;