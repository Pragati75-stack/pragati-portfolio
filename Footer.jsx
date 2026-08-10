import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import {
  personalInfo,
} from "../data/portfolioData";


function Footer() {

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (
    <footer className="footer">

      <div className="container footer-container">


        <div>

          <div className="footer-logo">
            PS
          </div>


          <p>

            Software Developer ·
            Full-Stack Engineering ·
            AI

          </p>

        </div>


        <div className="footer-links">


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


          <button onClick={scrollTop}>

            <FiArrowUp />

          </button>

        </div>

      </div>


      <div className="copyright">

        © {new Date().getFullYear()}

        {" "}

        Pragati Sharma.

        {" "}

        All rights reserved.

      </div>

    </footer>
  );
}


export default Footer;
