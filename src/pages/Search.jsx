import React, { useEffect, useRef, useState } from "react";
import URL from "../config/urlConfig";
import MovieCard from "../components/movieCard";
import Pagination from "../components/Pagination";
import "../styles/Search.css";
import axios from "axios";

const Search = () => {
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState("movie");
  const searchInputRef = useRef();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?api_key=${URL.KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );

    setContent(data.results);
    setTotalPages(data.total_pages);
    searchInputRef.current.value = "";
  };

  const handleMovieType = (newType) => {
    if (newType !== type) {
      setType(newType);
      setPage(1);
    }
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <div className="search-container">
      {/* Search Bar */}
      <div className="search">
        <input
          ref={searchInputRef}
          className="searchBox"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearchEnter}
        />
        <button className="searchButton" onClick={fetchSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          onClick={() => handleMovieType("movie")}
          className={type === "movie" ? "tabActive" : ""}
        >
          Search Movies
        </button>
        <button
          onClick={() => handleMovieType("tv")}
          className={type === "tv" ? "tabActive" : ""}
        >
          Search TV Series
        </button>
      </div>

      {/* Content */}
      <div className="search-content">
        <div className="trending">
          {content &&
            content.map((card) => (
              <MovieCard
                key={card.id}
                id={card.id}
                poster={card.poster_path}
                title={card.title || card.name}
                vote={card.vote_average}
                media_type={type === 'movie' ? 'movie' : 'tv'}
              />
            ))}
        </div>
        {totalPages > 1 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default Search;
