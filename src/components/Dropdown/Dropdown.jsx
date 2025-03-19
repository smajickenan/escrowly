import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.scss';

const Dropdown = ({ placeholder, items = [], onSelect, className = '', label = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleSelect = (item) => {
        setSelected(item);
        setIsOpen(false);
        if (onSelect) onSelect(item);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div 
            className={`dropdown ${className} ${isOpen ? 'active' : ''}`} 
            ref={dropdownRef}
        >
                <span>{label}</span>
            <div className="selected" onClick={toggleDropdown}>
                {selected || (
                    Array.isArray(placeholder) ? (
                        <div className="placeholder-images">
                            {placeholder.map((src, index) => (
                                <img key={index} src={src} alt="" />
                            ))}
                        </div>
                    ) : <div className="placeholder">{placeholder}</div>
                )}
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {items.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelect(item);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
