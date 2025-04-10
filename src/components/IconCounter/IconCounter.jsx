import React from 'react';
import './IconCounter.scss';
import { motion } from 'motion/react';
import Counter from '../Counter/Counter';

const IconCounter = ({ imgSrc, num, numText, description, delay, alt }) => {
    return (
        <motion.div 
            className="icon-counter"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: delay,
            }}
        >
            <img 
                src={imgSrc} 
                alt={alt || description} 
                loading="lazy" 
                width="32" 
                height="32"
            />
            <div className="icon-content">
                <span className="num">
                    <Counter
                        targetNumber={num}
                        duration={1500}
                        delay={delay*1000}
                    />
                    {numText}
                </span>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default IconCounter;
