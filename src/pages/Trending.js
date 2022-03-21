import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { increment, loadData, LOADDATA } from "../redux/action";
import ThumbnailCard from "../molecules/ThumbnailCard";
import CustomPagination from "../molecules/CustomPagination";
import { FlexPage } from "../atom/style";
import { Title } from "../atom/fields";

const Trending = () => {
  const page = useSelector((state) => state.page);
  const content = useSelector((state) => state.trendingContent);
  const dispatch = useDispatch();

  const fetchTrending = async () => {
    dispatch(
      loadData(
        LOADDATA,
        `https://api.themoviedb.org/3/trending/week/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
    );
  };

  useEffect(() => {
    dispatch(increment(1));
  }, []);

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <Title>Trendnig</Title>
      <FlexPage>
        {content &&
          content.map((c) => (
            <ThumbnailCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </FlexPage>
      <CustomPagination />
    </div>
  );
};

export default Trending;
