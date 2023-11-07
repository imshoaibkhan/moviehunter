import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../config/urlConfig";
import MovieCard from "../components/movieCard";
import Pagination from "../components/Pagination";
import GenreChip from "../components/GenreChip";
import useGenre from "../hooks/useGenre";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreforURL = useGenre(selectedGenre);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${URL.KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setContent(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, [page, genreforURL]);
  
  return (
    <div className="main">
      <div className="pageTitle">
        <h3>Movies List</h3>
      </div>
      <div className="genre-container">
        <GenreChip
          type="movie"
          genres={genres}
          setGenres={setGenres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          setPage={setPage}
        />
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
              media_type='movie'
            />
          ))}
      </div>
      {totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Movies;
