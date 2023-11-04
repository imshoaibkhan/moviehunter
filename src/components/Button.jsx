import React from "react";

import "../styles/Button.css";

const Button = ({ video }) => {
  const handleButtonClick = () => {
    window.open(`https://www.youtube.com/watch?v=${video}`, "_blank");
  };

  return (
    <div className="custom-button" onClick={handleButtonClick}>
      <i class="fa-brands fa-youtube"></i>
      <span className="button-text">Watch the Trailer</span>
    </div>
  );
};

export default Button;
