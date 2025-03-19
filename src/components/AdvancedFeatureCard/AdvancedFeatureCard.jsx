import React from 'react';
import './AdvancedFeatureCard.scss';
import { motion } from "motion/react";
const AdvancedFeatureCard = ({ image, background, title, text, className = '', imageDelay, btnUrl, btnText }) => {
    return (
        <div 
            className={`advanced-feature-card ${className}`}
            style={{ backgroundImage: `url(${background})`}}
        >
            <div className="advanced-feature-content">
                <h5>{title}</h5>
                <p>{text}</p>
                {btnText && (
                    <a href={btnUrl} className="feature-link">{btnText} <img src="/img/btn-arrow-right-blue.svg" alt="" /></a> 
                )}
                <motion.img 
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: imageDelay } }
                    }}
                    className='advanced-feature-image' src={image} alt="" 
                />
            </div>
        </div>
    );
};

export default AdvancedFeatureCard;
