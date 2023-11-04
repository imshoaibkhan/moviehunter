import React, { useState } from "react";
import { img_300, unavailable } from "../config/Imgconfig";
import ContentModal from "./ContentModal";

const MovieCard = ({ poster, title, vote, id, media_type }) => {
  const [PopUpOpen, setPopUpOpen] = useState(false);

  const handleClickCard = () => {
    setPopUpOpen(true);
  };

  const handleCloseModal = () => {
    setPopUpOpen(false);
  };

  return (
    <div className="movies">
      <ContentModal id={id} media_type={media_type} open={handleClickCard} onClose={handleCloseModal}>
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
      </ContentModal>
    </div>
  );
};

export default MovieCard;
