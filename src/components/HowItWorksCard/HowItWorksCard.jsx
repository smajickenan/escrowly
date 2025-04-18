import React from "react";

import "./HowItWorksCard.scss";

const HowItWorksCard = ({num, img, title, text}) => {

  return (
    <div className="how-it-works-card">
        <span className="num">{num}</span>
        <img src={img} alt="" />
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  );
};

export default HowItWorksCard;
