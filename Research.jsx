import { motion } from "framer-motion";

import {
  FiBookOpen,
  FiExternalLink,
} from "react-icons/fi";

import {
  research,
} from "../data/portfolioData";


function Research() {

  return (
    <section
      id="research"
      className="section"
    >

      <div className="container">


        <div className="section-heading">

          <span className="section-label">
            05 — RESEARCH & PUBLICATION
          </span>

          <h2>

            Research beyond

            <span>
              software.
            </span>

          </h2>

        </div>


        <div className="research-grid">

          {research.map(
            (paper, index) => (

              <motion.article
                className="research-card"
                key={paper.id}

                initial={{
                  opacity: 0,
                  y: 25,
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

                <div className="research-icon">

                  <FiBookOpen />

                </div>


                <span className="research-author">

                  {paper.author}

                </span>


                <h3>
                  {paper.title}
                </h3>


                <p className="research-publication">

                  {paper.publication}

                </p>


                <p>

                  DOI:

                  <br />

                  <strong>
                    {paper.doi}
                  </strong>

                </p>


                <div className="tech-tags">

                  {paper.tags.map(
                    (tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    )
                  )}

                </div>


                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >

                  View Publication

                  <FiExternalLink />

                </a>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}


export default Research;
