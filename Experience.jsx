import { motion } from "framer-motion";

import { FiBriefcase } from "react-icons/fi";

import {
  experience,
} from "../data/portfolioData";


function Experience() {

  return (
    <section
      id="experience"
      className="section"
    >

      <div className="container">


        <div className="section-heading">

          <span className="section-label">
            03 — EXPERIENCE
          </span>

          <h2>

            Professional

            <span>
              experience.
            </span>

          </h2>

        </div>


        <div className="timeline">

          {experience.map(
            (item) => (

              <motion.div
                className="timeline-item"
                key={item.company}

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

                <div className="timeline-dot">
                  <FiBriefcase />
                </div>


                <div className="timeline-content">

                  <span className="timeline-year">
                    {item.year}
                  </span>


                  <h3>
                    {item.role}
                  </h3>


                  <h4>
                    {item.company}
                  </h4>


                  <span className="experience-type">
                    {item.type}
                  </span>


                  <p>
                    {item.description}
                  </p>


                  <ul className="responsibility-list">

                    {item.responsibilities.map(
                      (responsibility) => (

                        <li
                          key={responsibility}
                        >
                          {responsibility}
                        </li>

                      )
                    )}

                  </ul>


                  <div className="tech-tags">

                    {item.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}


export default Experience;
