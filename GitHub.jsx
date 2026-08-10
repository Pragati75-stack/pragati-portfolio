import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";


function GitHub() {

  const [
    repositories,
    setRepositories,
  ] = useState([]);


  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const fetchRepositories =
      async () => {

        try {

          const response =
            await axios.get(
              "https://api.github.com/users/Pragati75-stack/repos?sort=updated&per_page=6"
            );


          setRepositories(
            response.data
          );

        } catch (error) {

          console.error(
            "GitHub API Error:",
            error
          );

        } finally {

          setLoading(false);

        }

      };


    fetchRepositories();

  }, []);


  return (
    <section
      id="github"
      className="section"
    >

      <div className="container">


        <div className="section-heading github-heading">

          <div>

            <span className="section-label">
              07 — GITHUB
            </span>

            <h2>

              Code in

              <span>
                public.
              </span>

            </h2>

          </div>


          <a
            href="https://github.com/Pragati75-stack"
            target="_blank"
            rel="noreferrer"
            className="github-profile"
          >

            <FiGithub />

            View GitHub

          </a>

        </div>


        {loading ? (

          <div className="github-loading">

            Loading repositories...

          </div>

        ) : (

          <div className="github-grid">

            {repositories.map(
              (repo, index) => (

                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"

                  className="github-card"

                  key={repo.id}

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

                  <div className="github-card-header">

                    <FiGithub />

                    <FiExternalLink />

                  </div>


                  <h3>
                    {repo.name}
                  </h3>


                  <p>

                    {repo.description ||
                      "Development project."}

                  </p>


                  <div className="github-stats">

                    <span>

                      <FiStar />

                      {repo.stargazers_count}

                    </span>


                    <span>

                      <FiGitBranch />

                      {repo.forks_count}

                    </span>


                    {repo.language && (

                      <span className="repo-language">

                        {repo.language}

                      </span>

                    )}

                  </div>

                </motion.a>

              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}


export default GitHub;
