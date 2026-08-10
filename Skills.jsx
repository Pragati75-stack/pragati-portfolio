import { motion } from "framer-motion";

import {
  skills,
  technologies,
} from "../data/portfolioData";


const categories = [
  ["Programming Languages", "programming"],
  ["Backend", "backend"],
  ["Frontend", "frontend"],
  ["Database", "database"],
  ["Tools & Platforms", "tools"],
  ["Machine Learning & AI", "ai"],
];


function Skills() {

  return (
    <section
      id="skills"
      className="section section-alt"
    >

      <div className="container">


        <div className="section-heading">

          <span className="section-label">
            02 — TECHNICAL SKILLS
          </span>

          <h2>

            My technical

            <span>
              toolkit.
            </span>

          </h2>

        </div>


        <div className="skills-categories">

          {categories.map(
            ([title, key], index) => (

              <motion.div
                className="skill-category"
                key={key}

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
                  delay: index * 0.05,
                }}
              >

                <h3>
                  {title}
                </h3>


                <div className="skill-tags">

                  {skills[key].map(
                    (skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    )
                  )}

                </div>

              </motion.div>

            )
          )}

        </div>


        <div className="technology-cloud">

          <h3>
            Technologies
          </h3>


          <div className="tech-tags">

            {technologies.map(
              (technology) => (

                <span key={technology}>
                  {technology}
                </span>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}


export default Skills;
