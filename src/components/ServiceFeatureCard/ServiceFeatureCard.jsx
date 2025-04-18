import React from 'react';
import './ServiceFeatureCard.scss';
const ServiceFeatureCard = ({ icon, image, title, text, className = '', delay }) => {
    return (
        <div 
            className={`service-feature-card ${className}`}
        >
            {image && (
                <img className='service-feature-image' src={image} alt="" />
            )}
            <div className="service-feature-content">
                <img src={icon} alt="" />
                <h6>
                    <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h6>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ServiceFeatureCard;
