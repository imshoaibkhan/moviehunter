import axios from "axios";
import React, { useEffect } from "react";
import URL from "../config/urlConfig";
import "../styles/Chip.css";
import Chip from "../components/Chip";

const GenreChip = ({
  type,
  genres,
  setGenres,
  selectedGenre,
  setSelectedGenre,
  setPage,
}) => {
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${URL.KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  const handleAdd = (genre) => {
    setSelectedGenre([...selectedGenre, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
      setGenres([...genres, genre])
      setSelectedGenre(selectedGenre.filter((selected) => selected.id !== genre.id))
    setPage(1)
  }

  useEffect(() => {
    fetchGenre();
  },[]);


  return (
    <div className="genre-container">
      {selectedGenre &&
        selectedGenre.map((genre) => (
          <Chip key={genre.id}
          children={genre.name}
          selected={true}
          onClick={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            children={genre.name}
            selected={false}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default GenreChip;
