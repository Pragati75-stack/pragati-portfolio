import { useState } from "react";

import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";


const navigation = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Education", "education"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];


function Navbar({
  darkMode,
  setDarkMode,
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);


  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };


  return (
    <header className="navbar">

      <div className="container nav-container">


        <button
          className="logo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >

          <span>PS</span>

        </button>


        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          {navigation.map(
            ([label, id]) => (

              <button
                key={id}
                onClick={() =>
                  scrollToSection(id)
                }
              >
                {label}
              </button>

            )
          )}

        </nav>


        <div className="nav-actions">

          <button
            className="theme-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >

            {darkMode
              ? <FiSun />
              : <FiMoon />}

          </button>


          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen
              ? <FiX />
              : <FiMenu />}

          </button>

        </div>

      </div>

    </header>
  );
}


export default Navbar;
