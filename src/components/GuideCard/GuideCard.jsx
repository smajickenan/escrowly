import React from 'react';
import './GuideCard.scss';

const GuideCard = ({ icon, imgSrc = [], title, subtitle, text, type = "image", className = '' }) => {
    return (
        <div className={`guide-card ${className}`}>
            <h4><img src={icon} alt="" /><span>{title}</span></h4>
            <div className="row">
                {imgSrc.map((src, index) => (
                    <div className="col" key={index}>
                        <div className="guide-thumb">
                            <img src={src} alt="" />
                            {type === "video" && (
                                <button className="btn-play">
                                    <img src="/img/icon-play.svg" alt="" />
                                </button>  
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <h6>{subtitle}</h6>
            <p>{text}</p>
        </div>
    );
};

export default GuideCard;
