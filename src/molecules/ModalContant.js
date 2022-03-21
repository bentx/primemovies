import React from "react";
import { PortrateModel, LandscapeModel } from "../atom/images";
import { img_500, unavailable } from "../atom/config/config";
import About from "../molecules/About";
import { AboutModel, Content } from "../atom/style";

const ModalContant = ({ content, video }) => {
  return (
    <Content>
      <PortrateModel
        alt={content.name || content.title}
        src={
          content.poster_path
            ? `${img_500}/${content.poster_path}`
            : unavailable
        }
      />
      <LandscapeModel
        alt={content.name || content.title}
        src={
          content.poster_path
            ? `${img_500}/${content.backdrop_path}`
            : unavailable
        }
      />
      <About content={content} video={video}></About>
    </Content>
  );
};

export default ModalContant;
