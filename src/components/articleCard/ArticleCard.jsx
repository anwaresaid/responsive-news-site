import React from "react";
import DarknetImg from "../../assets/darknet.jpg";

function ArticleCard({ title, description, img }) {
  return (
    <div className="article-card-container">
      <div className="article-card">
        <img src={img} alt="" />
        <div className="title">{title}</div>
        <div className="divider" />
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default ArticleCard;
