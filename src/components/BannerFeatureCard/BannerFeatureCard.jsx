import React from 'react';
import './BannerFeatureCard.scss';
const BannerFeatureCard = ({ imgSrc, title, list = [], className = '', delay }) => {
    return (
        <div className={`banner-feature-card ${className}`} >
            <h5>
                <img src={imgSrc} alt="" />
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h5>
            <ul className="feature-card-list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BannerFeatureCard;
