import { motion } from "framer-motion";

import {
  FiCode,
  FiDatabase,
  FiShield,
  FiCpu,
} from "react-icons/fi";


const focusAreas = [

  {
    icon: <FiCode />,
    title: "Full-Stack Development",
    description:
      "Building responsive React applications and integrating them with robust backend APIs.",
  },

  {
    icon: <FiDatabase />,
    title: "Backend Engineering",
    description:
      "Developing scalable REST APIs and backend systems using Java and Spring Boot.",
  },

  {
    icon: <FiShield />,
    title: "Secure Systems",
    description:
      "Implementing authentication and authorization using Spring Security and JWT.",
  },

  {
    icon: <FiCpu />,
    title: "AI & Intelligent Systems",
    description:
      "Working with Python, OpenCV and NLP while exploring AI-powered applications.",
  },

];


function About() {

  return (
    <section
      id="about"
      className="section"
    >

      <div className="container">


        <div className="section-heading">

          <span className="section-label">
            01 — ABOUT ME
          </span>

          <h2>

            Developer focused on

            <span>
              meaningful software.
            </span>

          </h2>

        </div>


        <div className="about-content">


          <motion.div
            className="about-text"

            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}
          >

            <p>

              I'm a Computer Science &
              Engineering student at Dronacharya
              Group Of Institution, currently pursuing
              my Bachelor of Technology from 2023 to
              2027.

            </p>


            <p>

              My technical focus is full-stack
              software development, with experience
              across Java, Spring Boot, React,
              PostgreSQL, REST APIs and JWT-based
              authentication.

            </p>


            <p>

              I enjoy building production-oriented
              systems where backend architecture,
              database design, security and frontend
              experience work together.

            </p>


            <div className="about-highlight">

              <strong>
                8.1 / 10
              </strong>

              <span>
                Current CGPA
              </span>

            </div>

          </motion.div>


          <div className="about-cards">

            {focusAreas.map(
              (item, index) => (

                <motion.div
                  className="about-card"
                  key={item.title}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay: index * 0.1,
                  }}
                >

                  <div className="card-icon">

                    {item.icon}

                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.description}
                  </p>

                </motion.div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}


export default About;
