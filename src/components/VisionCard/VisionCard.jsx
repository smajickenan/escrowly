import React from 'react';
import './VisionCard.scss';
const VisionCard = ({ icon, title, text, url }) => {
    return (
        <div className="vision-card">
            <img src={icon} alt="" />
            <h6>{title}</h6>
            <p>{text}</p>
            <a href={url}>Discover more<img src="/img/btn-arrow-right-dark.svg" alt="" /></a>
        </div>
    );
};

export default VisionCard;
