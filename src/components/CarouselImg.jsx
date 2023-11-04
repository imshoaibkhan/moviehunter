import axios from "axios";
import URL from "../config/urlConfig";
import "../styles/carousel.css";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../config/Imgconfig";

const handleDragStart = (e) => e.preventDefault();

const CarouselImg = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((credit) => (
    <div className="carouselItem">
      <img
        src={
          credit.profile_path ? `${img_300}/${credit.profile_path}` : noPicture
        }
        alt={credit?.name}
        onDragStart={handleDragStart}
        className="carousel-img"
      />
      <b className="carousel-txt">{credit?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${URL.KEY}&language=en-US`
    );

    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  });
  return (
    <AliceCarousel
    mouseTracking
    infinite
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    items={items}
    autoPlay
    />
  );
};

export default CarouselImg;
