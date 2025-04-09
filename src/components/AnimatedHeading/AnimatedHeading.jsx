import React from "react";
import { motion } from "motion/react";
import "./AnimatedHeading.scss";

const AnimatedHeading = ({ title = "Animated Heading" }) => {
  const letters = title.split("");

  // Also create a non-animated version for screen readers
  return (
    <>
      <h1 className="color-white flex space-x-1">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + (index * 0.02) }}
            aria-hidden="true" // Hide animated version from screen readers
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <span className="sr-only">{title}</span> {/* Hidden visually but available to screen readers */}
    </>
  );
};

export default AnimatedHeading;
