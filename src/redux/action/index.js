export const INCREMENT = "INCREMENT";
export const LOADDATA = "LOADDATA";
export const SETDATA = "SETDATA";
export const LOADMOVIEDATA = "LOADMOVIEDATA";
export const LOADSEARCHDATA = "LOADSEARCHDATA";
export const SETMOVIEDATA = "SETMOVIEDATA";
export const SETSEARCHDATA = "SETSEARCHDATA";
export const SELECTEDGENRES = "SELECTEDGENRES";
export const GENRES = "GENRES";
export const SETSELECTEDGENRES = "SETSELECTEDGENRES";
export const SETGENRES = "SETGENRES";
export const SETMOVIEPAGE = "SETMOVIEPAGE";
export const SEARCH = "SEARCH";
export const LOADMOVIEDETAILS = "LOADMOVIEDETAILS";
export const SETMOVIEDETAILS = "SETMOVIEDETAILS";
export const LOADVIDEODETAILS = "LOADVIDEODETAILS";
export const SETVIDEODETAILS = "SETVIDEODETAILS";
export const SETRATING = "SETRATING";
export const SETHOVER = "SETHOVER";
export const SETROUTEVALUE = "SETROUTEVALUE";

export const loadData = (type, url) => ({
  type: type,
  payload: url,
});

export const loadMovieData = (data) => ({
  type: SETMOVIEDATA,
  payload: data,
});

export const loadSearchData = (data) => ({
  type: SETSEARCHDATA,
  payload: data,
});

export const loadMovieDetails = (data) => ({
  type: SETMOVIEDETAILS,
  payload: data,
});

export const loadVideoDetails = (data) => ({
  type: SETVIDEODETAILS,
  payload: data,
});

export const loadGenresData = (url) => ({
  type: GENRES,
  payload: url,
});

export const setGenresData = (data) => ({
  type: SETGENRES,
  payload: data,
});

export const setSelectedGenresData = (data) => ({
  type: SETSELECTEDGENRES,
  payload: data,
});

export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const searchTest = (text) => {
  return {
    type: SEARCH,
    payload: text,
  };
};

export const setRating = (data) => {
  return {
    type: SETRATING,
    payload: data,
  };
};

export const setHover = (data) => {
  return {
    type: SETHOVER,
    payload: data,
  };
};

export const setData = (data) => {
  return {
    type: SETDATA,
    payload: data,
  };
};

export const setRouteValue = (data) => {
  return {
    type: SETROUTEVALUE,
    payload: data,
  };
};
