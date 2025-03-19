import React from "react";
// import { motion } from "motion/react";
import "./ServiceCard.scss";

const ServiceCard = ({icon, title, text, url}) => {

  return (
    <div className="service-card">
        <img src={icon} alt="" />
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
