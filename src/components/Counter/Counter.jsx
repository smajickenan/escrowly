import React, { useEffect, useRef, useState } from "react";

const Counter = ({ targetNumber = 100, duration = 2000, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(0);
    const spanRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (spanRef.current) {
            observer.observe(spanRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = performance.now();
        // const step = targetNumber <= 1 ? 0.1 : 1;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = targetNumber <= 1
                ? (progress * targetNumber).toFixed(1)
                : Math.floor(progress * targetNumber);

            setCurrentNumber(value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, targetNumber, duration]);

    return (
        <span ref={spanRef} className="count-up-span">
            {currentNumber}
        </span>
    );
};

export default Counter;
