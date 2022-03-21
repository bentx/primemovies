import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenres from "../atom/hooks/useGenre";
import CustomPagination from "../molecules/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
  LOADMOVIEDATA,
  loadData,
  increment,
  setRating,
  setHover,
} from "../redux/action";
import Genres from "../molecules/Genres";
import ThumbnailCard from "../molecules/ThumbnailCard";
import { FlexPage } from "../atom/style";
import { Title } from "../atom/fields";
import StarRating from "../molecules/Rating";

function Movies() {
  const value = useSelector((state) => state.rating);
  const hover = useSelector((state) => state.hover);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.moviePage);
  const content = useSelector((state) => state.movieContent);
  const [numOfPages, setNumOfPages] = useState();
  const genres = useSelector((state) => state.genres);
  const selectedGenres = useSelector((state) => state.selectedGenres);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}&vote_average.gte=${value}&with_keywords=ben`
    );
    setNumOfPages(data.total_pages);
    console.log(genreforURL);
  };

  useEffect(() => {
    dispatch(increment(1));
  }, []);

  useEffect(() => {
    dispatch(
      loadData(
        LOADMOVIEDATA,
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}&vote_average.gte=${value}`
      )
    );
    console.log(genreforURL);
  }, [page, genreforURL, value]);

  return (
    <div>
      <Title>MOVIES</Title>
      <StarRating />
      <Genres />
      <FlexPage>
        {content &&
          content.map((c) => (
            <ThumbnailCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type='movie'
              vote_average={c.vote_average}
            />
          ))}
      </FlexPage>
      <CustomPagination />
    </div>
  );
}

export default Movies;
