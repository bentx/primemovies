import {
  ThemeProvider,
  TextField,
  createTheme,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomPagination from "../molecules/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  loadData,
  LOADSEARCHDATA,
  loadSearchData,
  searchTest,
} from "../redux/action";
import { FlexPage, SearcDiv } from "../atom/style";
import ThumbnailCard from "../molecules/ThumbnailCard";
import SearchArea from "../molecules/SearchArea";
import { lightTheme } from "../atom/style/MaterialUI";

function Search() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const content = useSelector((state) => state.searchContent);
  const searchtext = useSelector((state) => state.searchText);

  const fetchSearch = async () => {
    dispatch(
      loadData(
        LOADSEARCHDATA,
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
      )
    );
  };

  useEffect(() => {
    dispatch(increment(1));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [page]);

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <SearchArea />
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
        {!(content.length === 0) && <CustomPagination />}
      </ThemeProvider>
    </div>
  );
}

export default Search;
