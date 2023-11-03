import React, { useState } from "react";
import { img_300, unavailable } from "../config/Imgconfig";

const MovieCard = ({
  poster,
  title,
  vote,
}) => {
  return (
    <div className="movies">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <div className="movies-info">
        <h3>{title}</h3>
        <span className={vote >= 8 ? "green" : vote >= 5 ? "orange" : "red"}>
          {vote.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
