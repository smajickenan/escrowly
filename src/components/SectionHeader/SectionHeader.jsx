import React from "react";
import { motion } from "motion/react";
import "./SectionHeader.scss";

const SectionHeader = ({ label, title, className }) => {
    const lines = title.split("<br>").map(line => line.trim()).filter(line => line); // Убираем пустые строки

    return (
        <div className={`section-header ${className}`}>
            <motion.div 
              variants={{
                  hidden: { opacity: 0, transform: "scaleY(0) translateY(20px)" },
                  visible: { opacity: 1, transform: "scaleY(1) translateY(0px)", transition: { duration: 0.6, delay: 0 } }
              }}
              className="section-label"
            >
              {label}
            </motion.div>
            <h2 className="section-title">
                {lines.map((line, lineIndex) => {
                    const words = line.split(" ").map(word => word.trim()).filter(word => word); // Убираем пустые слова

                    return (
                        <div key={lineIndex} className="section-line">
                            {words.map((word, wordIndex) => (
                                <div key={wordIndex} className="section-word">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            variants={{
                                                hidden: { opacity: 0, transform: "scaleY(0) translateY(20px)" },
                                                visible: { opacity: 1, transform: "scaleY(1) translateY(0px)", transition: { duration: 0.6, delay: 0.6 + (lineIndex * 0.2 + wordIndex * 0.1 + charIndex * 0.02) } }
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </h2>
        </div>
    );
};

export default SectionHeader;
