import { useState, useEffect } from "react";
const Key = "e096eb42";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callBack?.();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${Key}&s=${query}`
          );
          if (!response.ok)
            throw new Error("Somthing went wrong with fetching movies");
          const moviesData = await response.json();
          if (moviesData.Response === "False") throw Error("movie not Found");
          setMovies(moviesData.Search);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 1) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovie();
    },
    [query]
  );
  return { movies, isLoading, error };
}
