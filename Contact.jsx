import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  personalInfo,
} from "../data/portfolioData";


function Contact() {

  return (
    <section
      id="contact"
      className="section contact-section"
    >

      <div className="container">


        <motion.div
          className="contact-box"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <span className="section-label">
            08 — CONTACT
          </span>


          <h2>

            Let's build

            <span>
              something meaningful.
            </span>

          </h2>


          <p>

            Have an opportunity, project idea,
            or simply want to connect?

            <br />

            I'd be happy to hear from you.

          </p>


          <div className="contact-buttons">

            <a
              href={`mailto:${personalInfo.email}`}
              className="primary-btn"
            >

              <FiMail />

              Email Me

              <FiArrowUpRight />

            </a>


            <a
              href={`tel:${personalInfo.phone}`}
              className="secondary-btn"
            >

              <FiPhone />

              Call

            </a>

          </div>


          <div className="contact-socials">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >

              <FiGithub />

              GitHub

            </a>


            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >

              <FiLinkedin />

              LinkedIn

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}


export default Contact;
