const useGenre = (selectedGenre) => {
  if (selectedGenre.length < 1) return "";

  const GenreIds = selectedGenre.map((selected) => selected.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
