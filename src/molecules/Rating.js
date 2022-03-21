import { Rating } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieRating } from "../atom/style";
import { setHover, setRating } from "../redux/action";

const StarRating = () => {
  const value = useSelector((state) => state.rating);
  const hover = useSelector((state) => state.hover);
  const dispatch = useDispatch();

  return (
    <MovieRating>
      <Rating
        max={10}
        name='hover-feedback'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          dispatch(setRating(newValue));
        }}
      />
    </MovieRating>
  );
};

export default StarRating;
