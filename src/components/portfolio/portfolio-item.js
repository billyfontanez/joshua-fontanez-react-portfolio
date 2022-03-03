import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {

  const {id, description, thumb_image_url, logo_url, name} = props.item
  return (
    <div>
      <img src={thumb_image_url}/>
      <img src={logo_url}/>
      <div>{description}</div>



      <Link to={`/portfolio/${id}`}>This is a link to my {name}</Link>
    </div>
  );
}