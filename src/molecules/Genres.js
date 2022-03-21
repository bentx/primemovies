import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  loadGenresData,
  setGenresData,
  setSelectedGenresData,
} from "../redux/action";
import { LRpadding } from "../atom/style";

const Genres = ({ type }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.moviePage);
  const genres = useSelector((state) => state.genres);
  const selectedGenres = useSelector((state) => state.selectedGenres);

  const handleAdd = (genre) => {
    dispatch(setSelectedGenresData([...selectedGenres, genre]));
    dispatch(setGenresData(genres.filter((g) => g.id !== genre.id)));
    dispatch(increment(1));
  };

  const handleRemove = (genre) => {
    dispatch(
      setSelectedGenresData(
        selectedGenres.filter((selected) => selected.id !== genre.id)
      )
    );
    dispatch(setGenresData([...genres, genre]));
    dispatch(increment(1));
  };

  const fetchGeners = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
  };
  console.log(selectedGenres);
  useEffect(() => {
    dispatch(
      loadGenresData(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
    );
  }, []);
  return (
    <LRpadding>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            size='small'
            color='primary'
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            size='small'
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </LRpadding>
  );
};

export default Genres;
