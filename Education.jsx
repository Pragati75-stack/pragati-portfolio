import { motion } from "framer-motion";

import { FiBookOpen } from "react-icons/fi";

import {
  education,
} from "../data/portfolioData";


function Education() {

  return (
    <section
      id="education"
      className="section section-alt"
    >

      <div className="container">


        <div className="section-heading">

          <span className="section-label">
            06 — EDUCATION
          </span>

          <h2>

            Academic

            <span>
              foundation.
            </span>

          </h2>

        </div>


        <div className="education-card">

          {education.map(
            (item) => (

              <motion.div
                className="education-content"
                key={item.institution}

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
              >

                <div className="education-icon">

                  <FiBookOpen />

                </div>


                <div>

                  <span className="timeline-year">
                    {item.duration}
                  </span>


                  <h3>
                    {item.degree}
                  </h3>


                  <h4>
                    {item.field}
                  </h4>


                  <p>
                    {item.institution}
                    {" · "}
                    {item.location}
                  </p>

                </div>


                <div className="education-grade">

                  <strong>
                    {item.grade}
                  </strong>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}


export default Education;
