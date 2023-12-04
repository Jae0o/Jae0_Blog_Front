import React from "react";
import "../../../CSS/PostPage/PostBanner/PostBannerDecotation.css";
import { useNavigate } from "react-router-dom";

const PostBannerDecotation: React.FC = () => {
  const navigate = useNavigate();

  const toPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <div className="ptbanner__decoration">
      <button
        className="ptdecoration__button pt-close"
        onClick={toPrevPageHandler}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <button className="ptdecoration__button pt-minimize">
        <span className="material-symbols-outlined">horizontal_rule</span>
      </button>
      <button className="ptdecoration__button pt-maximize">
        <span className="material-symbols-outlined">expand_content</span>
      </button>
    </div>
  );
};

export default PostBannerDecotation;
