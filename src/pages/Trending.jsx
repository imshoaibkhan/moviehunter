import axios from "axios";
import "../styles/Trending.css";
import URL from "../config/urlConfig";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import Pagination from "../components/Pagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState()

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${URL.KEY}&page=${page}`
    );
    setContent(data.results);
    setTotalPages(data.total_pages)
  };

  useEffect(() => {
    window.scroll(0, 0)
    fetchTrending();
  }, [page]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      <div className="pageTitle">
        <h3>Trending today</h3>
      </div>
      <div className="trending">
        {content &&
          content.map((card) => (
            <MovieCard
              key={card.id}
              id={card.id}
              poster={card.poster_path}
              title={card.title || card.name}
              vote={card.vote_average}
              media_type={card.media_type}
            />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Trending;
