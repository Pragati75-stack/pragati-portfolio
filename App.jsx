import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [scrollProgress, setScrollProgress] =
    useState(0);


  useEffect(() => {

    document.body.className =
      darkMode ? "dark" : "light";

  }, [darkMode]);


  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  return (
    <>

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />


      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <main>

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Research />

        <Education />

        <GitHub />

        <Contact />

      </main>


      <Footer />

    </>
  );
}


export default App;
