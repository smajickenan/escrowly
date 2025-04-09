import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import './Button.scss';

const Button = function ({ text, url, to, icon, className = 'btn-primary', delay, onClick }) {
    // If 'to' prop is provided, use Link component for internal navigation
    if (to) {
        return (
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay } }
                }}
                className={`btn-wrapper`}
            >
                <Link to={to} className={`btn ${className}`} onClick={onClick}>
                    {text}
                    {icon && <img src={icon} alt="" />}
                </Link>
            </motion.div>
        );
    }

    // Otherwise use regular anchor tag for external links
    return (
        <motion.a
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay } }
            }}
            href={url}
            className={`btn ${className}`}
            onClick={onClick}
        >
            {text}
            {icon && <img src={icon} alt="" />}
        </motion.a>
    );
}

export default Button;