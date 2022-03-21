import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { ThemeProvider } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/action";
import { darkTheme } from "../atom/style/MaterialUI";
import { PaginationStyle } from "../atom/style";

const CustomPagination = ({ numOfPages = 2 }) => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const handlePageChange = (page) => {
    dispatch(increment(page));
    window.scroll(0, 0);
  };
  return (
    <PaginationStyle>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </PaginationStyle>
  );
};

export default CustomPagination;
