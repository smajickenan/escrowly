import React from "react";
import { motion } from "motion/react";
import './Button.scss';

const Button = function ({text, url, icon, className='btn-primary', delay, onClick}) {
    return (
        <motion.a 
            variants={{
                hidden: { opacity: 0, x:50 },
                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay } }
            }}
            href={url} 
            className={`btn ${className}`} 
            onClick={onClick}
        >
            {text}
            <img src={icon} alt="" />
        </motion.a>
    )
}
 
export default Button;