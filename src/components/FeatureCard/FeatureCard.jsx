import React from 'react';
import './FeatureCard.scss';
const FeatureCard = ({ imgSrc, title, text, className = '', delay }) => {
    return (
        <div 
            className={`feature-card ${className}`}
        >
            <img src={imgSrc} alt="" />
            <h6>
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h6>
            <p>{text}</p>
        </div>
    );
};

export default FeatureCard;
