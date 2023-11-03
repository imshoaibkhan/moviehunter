import React from "react";
import "../styles/footerMenu.css";
import { useNavigate } from "react-router-dom";

const FooterMenubar = () => {
  const navigate = useNavigate();
  return (
    <div className="footerMenu">
      <div className="footerMenu__icons">
        <button
          onClick={() => navigate("/")}
          className="footerMenu__btn ripple"
        >
          <i className="fa-solid fa-fire"></i>
          <span>Trending</span>
        </button>
        <button
          onClick={() => navigate("/movies")}
          className="footerMenu__btn ripple"
        >
          <i className="fa-solid fa-film"></i>
          <span>Movies</span>
        </button>
        <button
          onClick={() => navigate("/TVseries")}
          className="footerMenu__btn ripple"
        >
          <i className="fa-solid fa-tv"></i>
          <span>TV Series</span>
        </button>
        <button
          onClick={() => navigate("/search")}
          className="footerMenu__btn ripple"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default FooterMenubar;
