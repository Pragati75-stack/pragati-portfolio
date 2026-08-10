import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  projects,
} from "../data/portfolioData";


function Projects() {

  const [filter, setFilter] =
    useState("All");


  const categories = [
    "All",
    "AI / Full Stack",
    "Full Stack",
  ];


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );


  return (
    <section
      id="projects"
      className="section section-alt"
    >

      <div className="container">


        <div className="section-heading projects-heading">

          <div>

            <span className="section-label">
              04 — PROJECTS
            </span>

            <h2>

              Selected

              <span>
                work.
              </span>

            </h2>

          </div>


          <div className="filter-buttons">

            {categories.map(
              (category) => (

                <button
                  key={category}

                  className={
                    filter === category
                      ? "active"
                      : ""
                  }

                  onClick={() =>
                    setFilter(category)
                  }
                >

                  {category}

                </button>

              )
            )}

          </div>

        </div>


        <motion.div
          layout
          className="projects-grid"
        >

          <AnimatePresence mode="popLayout">

            {filteredProjects.map(
              (project) => (

                <motion.article
                  layout
                  className="project-card"
                  key={project.id}

                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}

                  whileHover={{
                    y: -8,
                  }}
                >


                  <div className="project-top">

                    <span className="project-number">
                      0{project.id}
                    </span>

                    <FiArrowUpRight />

                  </div>


                  <div>

                    <span className="project-category">
                      {project.category}
                    </span>


                    <h3>
                      {project.title}
                    </h3>


                    <h4>
                      {project.subtitle}
                    </h4>


                    <p>
                      {project.description}
                    </p>


                    <div className="project-features">

                      {project.features
                        .slice(0, 4)
                        .map(
                          (feature) => (

                            <span
                              key={feature}
                            >
                              {feature}
                            </span>

                          )
                        )}

                    </div>

                  </div>


                  <div className="project-bottom">

                    <div className="tech-tags">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>


                    <div className="project-links">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                      </a>


                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink />
                      </a>

                    </div>

                  </div>

                </motion.article>

              )
            )}

          </AnimatePresence>

        </motion.div>

      </div>

    </section>
  );
}


export default Projects;
