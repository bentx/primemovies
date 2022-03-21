import {
  LOADDATA,
  setData,
  LOADMOVIEDATA,
  SETSEARCHDATA,
  loadMovieData,
  GENRES,
  setGenresData,
  SELECTEDGENRES,
  setSelectedGenresData,
  LOADSEARCHDATA,
  loadSearchData,
  LOADMOVIEDETAILS,
  loadMovieDetails,
  loadVideoDetails,
  LOADVIDEODETAILS,
} from "../action";

const loadDataFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    try {
      if (action.type === LOADDATA) {
        const { data } = await api.getdata(action.payload);
        console.log(data);
        dispatch(setData(data.results));
      }
      if (action.type === LOADMOVIEDATA) {
        const { data } = await api.getdata(action.payload);
        console.log(data);
        dispatch(loadMovieData(data.results));
      }
      if (action.type === LOADSEARCHDATA) {
        const { data } = await api.getdata(action.payload);
        console.log(data);
        dispatch(loadSearchData(data.results));
      }
      if (action.type === LOADMOVIEDETAILS) {
        const { data } = await api.getdata(action.payload);
        dispatch(loadMovieDetails(data));
      }
      if (action.type === LOADVIDEODETAILS) {
        const { data } = await api.getdata(action.payload);
        dispatch(loadVideoDetails(data.results[0]?.key));
      }
      if (action.type === GENRES) {
        const { data } = await api.getdata(action.payload);
        console.log(data);
        dispatch(setGenresData(data.genres));
      }
    } catch (error) {
      console.log(error);
    }
  };

export default [loadDataFlow];
