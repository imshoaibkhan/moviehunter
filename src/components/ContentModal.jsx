import React, { useEffect, useState } from "react";
import Button from "./Button";
import CarouselImg from "./CarouselImg";
import URL from "../config/urlConfig";
import "../styles/Modal.css";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../config/Imgconfig";

const ContentModal = ({ children, id, media_type }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchModal = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${URL.KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${URL.KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  const handleOpen = () => {
    document.body.classList.add("modal-open");
    setOpen(true);
  };

  const handleClose = () => {
    document.body.classList.remove("modal-open");
    setOpen(false);
  };

  useEffect(() => {
    fetchModal();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="modal-button"
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        {children}
      </div>
      {open && (
        <div className="modal">
          <div className="modal-content">
            {content && (
              <div className="modal-container">
                <div className="modal-content-box">
                  <span className="close-button" onClick={handleClose}>
                    <i className="fa-solid fa-x"></i>
                  </span>
                  <div className="img-box">
                    <img
                      src={
                        content.poster_path
                          ? `${img_500}/${content.poster_path}`
                          : unavailable
                      }
                      alt={content.name || content.title}
                      className="modal-portrait"
                    />

                    <img
                      src={
                        content.backdrop_path
                          ? `${img_500}/${content.backdrop_path}`
                          : unavailableLandscape
                      }
                      alt={content.name || content.title}
                      className="modal-landscape"
                    />
                  </div>

                  <div className="modal-about">
                    <span className="modal-title">
                      {content.title || content.name} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                    <div className="description-container">
                      <p>Overview: </p>
                      <p className="modal-description">{content.overview}</p>
                    </div>
                    <CarouselImg media_type={media_type} id={id} />
                    <Button video={video} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentModal;
