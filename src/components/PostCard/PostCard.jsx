import React from 'react';
import { Link } from "react-router-dom";
import "./PostCard.scss";

const PostCard = ({ image, title, category, date, url }) => {


  return (
    <div className="post-card">
         <Link to="/blog-article">
            <img src={image} alt="" className="post-thumbnail" />
         </Link>
         <h6>{title}</h6>
         <div className="post-meta">
            <span>{category}</span>
            <span>{date}</span>
         </div>
    </div>
  );
};

export default PostCard;
