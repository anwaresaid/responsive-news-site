import React, { useEffect, useState } from "react";

function NavBar(props) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  }, [window.innerWidth]);

  const updateWindowWidth = () => {
    setWindowSize(window.innerWidth);
  };
  const openBar = () => {
    setIsActive(!isActive);
  };

  const updateWindowDimensions = () => {
    if (window.innerWidth < 577) {
      setWindowSize("mobile");
    } else if (window.innerWidth < 321) {
      setWindowSize("min-mobile");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div className="container-navbar">
      <nav className="navbar">
        <div className="brand-title">TRT</div>
        <a href="#" className="toggle-button" onClick={openBar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={`navbar-links ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">WORLD</a>
            </li>
            <li>
              <a href="#">TURKEY</a>
            </li>
            <li>
              <a href="#">VIDEO</a>
            </li>
            <li>
              <a href="#">OPINION</a>
            </li>
            <li>
              <a href="#">CLIMATE</a>
            </li>
            <li>
              <a href="#">BUSINESS</a>
            </li>
            <li>
              <a href="#">SCIENCE & TECH</a>
            </li>
            <li>
              <a href="#">ARTS & CULTURE</a>
            </li>
            <li>
              <a href="#">INVESTIGATION</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
