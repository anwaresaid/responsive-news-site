import React, { useState, useEffect } from "react";

function Spotlight() {
  const [windowSize, setWindowSize] = useState();

  const updateWindowDimensions = () => {
    if (window.innerWidth < 577 && window.innerWidth > 320) {
      setWindowSize("mobile");
    } else if (window.innerWidth < 321) {
      console.log("else if ");
      setWindowSize("minmobile");
    } else {
      setWindowSize("");
    }
    console.log("windowsieze", window.innerWidth < 321);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <div className="spotlight-section">
        <div className="title">WORLD NEWS</div>
        <p className="description">Important news from all around the world!</p>
        <div className="dividers-container">
          <div className="divider"></div>
          <div className="icon-container">
            <i
              className={`fa-solid fa-earth-americas ${
                windowSize === "mobile"
                  ? "fa-2x"
                  : windowSize === "minmobile"
                  ? "fa-1x"
                  : "fa-3x"
              }`}
            ></i>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
