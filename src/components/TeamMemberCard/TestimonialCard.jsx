import React from "react";
import "./TestimonialCard.scss";

const TestimonialCard = ({ img, title, text, name, address}) => {

  return (
    <div className="testimonial-card">
        <span className="testimonial-title">{title}</span>
        <p>{text}</p>
        <div className="client">
            <img src={img} alt="" />
            <p>
                {name}
                <span>{address}</span>
            </p>
        </div>
    </div>
  );
};

export default TestimonialCard;
