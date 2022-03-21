import {
  SETDATA,
  INCREMENT,
  LOADDATA,
  setData,
  SETHOVER,
  SETMOVIEDATA,
  SETSEARCHDATA,
  SETSELECTEDGENRES,
  SETGENRES,
  SEARCH,
  SETMOVIEDETAILS,
  SETVIDEODETAILS,
  SETRATING,
} from "../action";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case SETDATA:
      return action.payload;
    default:
      return state;
  }
};

const movieDataReducer = (state = [], action) => {
  switch (action.type) {
    case SETMOVIEDATA:
      return action.payload;
    default:
      return state;
  }
};

const searchDataReducer = (state = [], action) => {
  switch (action.type) {
    case SETSEARCHDATA:
      return action.payload;
    default:
      return state;
  }
};

const movieDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SETMOVIEDETAILS:
      return action.payload;
    default:
      return state;
  }
};

const videoDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SETVIDEODETAILS:
      return action.payload || "";
    default:
      return state;
  }
};

const setGenresData = (state = [], action) => {
  switch (action.type) {
    case SETGENRES:
      return action.payload;
    default:
      return state;
  }
};

const setSelectedGenresData = (state = [], action) => {
  switch (action.type) {
    case SETSELECTEDGENRES:
      return action.payload;
    default:
      return state;
  }
};

const setSearchText = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

const ratingReducer = (state = 2, action) => {
  switch (action.type) {
    case SETRATING:
      return action.payload;
    default:
      return state;
  }
};

const hoverReducer = (state = -1, action) => {
  switch (action.type) {
    case SETHOVER:
      return action.payload;
    default:
      return state;
  }
};

export default {
  dataReducer,
  searchDataReducer,
  movieDataReducer,
  setSelectedGenresData,
  setGenresData,
  movieDetailsReducer,
  setSearchText,
  videoDetailsReducer,
  hoverReducer,
  ratingReducer,
};
