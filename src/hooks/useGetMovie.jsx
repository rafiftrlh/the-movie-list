import apiAxios from "../services/api";
import { useEffect, useState } from "react";

const useGetMovie = (page, vid = false, popular = "popularity.desc") => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    apiAxios
      .get(
        `/discover/movie?page=${page}&include_video=${vid}&sort_by=${popular}`
      )
      .then((res) => {
        setDataMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, vid, popular]);

  return { dataMovies };
};

const useGetDetailMovie = (id) => {
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    apiAxios
      .get(`/movie/${id}`)
      .then((res) => {
        setDetailMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { detailMovie };
};

const useGetPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    apiAxios
      .get("/movie/popular?page=1")
      .then((res) => {
        setPopularMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return popularMovies;
};

export { useGetMovie, useGetDetailMovie, useGetPopularMovies };
