import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

import {
  personalInfo,
} from "../data/portfolioData";


function Hero() {

  return (
    <section className="hero">

      <div className="hero-grid" />


      <div className="container hero-container">


        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >


          <div className="availability">

            <span className="status-dot" />

            Software Developer

          </div>


          <p className="hero-intro">

            Hi, I'm{" "}

            <span>
              Pragati Sharma
            </span>

          </p>


          <h1>

            Building scalable

            <br />

            <span className="gradient-text">

              software solutions.

            </span>

          </h1>


          <p className="hero-description">

            {personalInfo.tagline}

          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >

              Explore My Work

              <FiArrowRight />

            </a>


            <a
              href={personalInfo.resume}
              download
              className="secondary-btn"
            >

              Download Resume

              <FiDownload />

            </a>

          </div>


          <div className="social-links">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>


            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

          </div>


        </motion.div>


        <motion.div
          className="hero-visual"

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1,
          }}
        >

          <div className="orb orb-one" />

          <div className="orb orb-two" />


          <div className="code-card">

            <div className="window-bar">

              <span />
              <span />
              <span />

            </div>


            <pre>
{`const pragati = {
  role: "Software Developer",

  stack: [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL"
  ],

  focus: [
    "Backend",
    "Full Stack",
    "AI"
  ],

  goal: "Build impactful software"
};`}
            </pre>

          </div>

        </motion.div>

      </div>


      <div className="scroll-indicator">

        <span />

        Scroll to explore

      </div>

    </section>
  );
}


export default Hero;
