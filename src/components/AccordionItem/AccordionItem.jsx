import React, { useState, useRef, useEffect, useCallback } from "react";
import "./AccordionItem.scss";

const AccordionItem = ({ title, text, active: defaultActive = false }) => {
    const [isActive, setIsActive] = useState(defaultActive);
    const contentRef = useRef(null);

    const activeToggle = () => {
        setIsActive((prev) => !prev);
    };

    const updateMaxHeight = useCallback(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isActive
                ? `${contentRef.current.scrollHeight}px`
                : "0px";
        }
    }, [isActive]);

    useEffect(() => {
        updateMaxHeight();
    }, [isActive, updateMaxHeight]);

    useEffect(() => {
        window.addEventListener("resize", updateMaxHeight);
        return () => {
            window.removeEventListener("resize", updateMaxHeight);
        };
    }, [updateMaxHeight]);

    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`}>
            <h6 onClick={activeToggle} className="accordion-title">
                <span>Q.</span>{title}
                <div className="plus"></div>
            </h6>
            <div 
                ref={contentRef} 
                className="accordion-content"
            >
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AccordionItem;
