import React from "react";
// import { motion } from "motion/react";
import "./ServiceCard.scss";
import { Link } from "react-router-dom";

const ServiceCard = ({icon, title, text, url}) => {

  return (
    <Link to={url} className="service-card">
        <img src={icon} alt="" />
        <span className="service-card-link">Get Started Now <img src="/img/btn-arrow-right-dark.svg" alt="" /></span>
        <h5>{title}</h5>
        <p>{text}</p>
    </Link>
  );
};

export default ServiceCard;
