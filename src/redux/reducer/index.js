import page from "./counterReducer";
import data from "./movieDataReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  page: page.counterReducer,
  moviePage: page.counterReducer,
  trendingContent: data.dataReducer,
  movieContent: data.movieDataReducer,
  searchContent: data.searchDataReducer,
  genres: data.setGenresData,
  selectedGenres: data.setSelectedGenresData,
  searchText: data.setSearchText,
  movieDetails: data.movieDetailsReducer,
  videoDetails: data.videoDetailsReducer,
  rating: data.ratingReducer,
  hover: data.hoverReducer,
  routeValue: page.RouteValueReducer,
});

export default rootReducers;
