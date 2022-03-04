import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const { id, description, thumb_image_url, logo, name } = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      />

      <img src={logo} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>This is a link to my {name}</Link>
    </div>
  );
}