import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Height } from "@material-ui/icons";
import axios from "axios";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useStyles } from "../atom/style/MaterialUI";
import ModalContant from "../molecules/ModalContant";
import { Content } from "../atom/style";
import { useDispatch, useSelector } from "react-redux";
import {
  loadData,
  LOADDATA,
  LOADMOVIEDETAILS,
  loadMovieDetails,
  LOADVIDEODETAILS,
} from "../redux/action";
import { CardButton } from "../atom/button";

export default function ContentModal({ children, media_type, id }) {
  const classes = useStyles();
  const content = useSelector((state) => state.movieDetails);
  const video = useSelector((state) => state.videoDetails);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    dispatch(
      loadData(
        LOADMOVIEDETAILS,
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
    );
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    // );
    //  setContent(data);
  };
  const fetchVideo = async () => {
    dispatch(
      loadData(
        LOADVIDEODETAILS,
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
    );
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    // );
    // console.log(data);
    // setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [open]);

  return (
    <>
      <CardButton type='button' onClick={handleOpen}>
        {children}
      </CardButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <ModalContant content={content} video={video}></ModalContant>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
