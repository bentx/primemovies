import React from "react";

import {
  ThemeProvider,
  TextField,
  createTheme,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { SearcDiv, SearchAreaDiv } from "../atom/style";
import { useDispatch, useSelector } from "react-redux";
import { loadData, LOADSEARCHDATA, searchTest } from "../redux/action";
const SearchArea = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const searchtext = useSelector((state) => state.searchText);
  const fetchSearch = async () => {
    dispatch(
      loadData(
        LOADSEARCHDATA,
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
      )
    );
  };
  return (
    <SearcDiv>
      <TextField
        style={{ flex: 1 }}
        label='Search'
        variant='filled'
        onChange={(e) => {
          dispatch(searchTest(e.target.value));
        }}
      />
      <Button
        style={{ marginLeft: 10 }}
        variant='contained'
        onClick={fetchSearch}>
        <SearchIcon />
      </Button>
    </SearcDiv>
  );
};

export default SearchArea;
