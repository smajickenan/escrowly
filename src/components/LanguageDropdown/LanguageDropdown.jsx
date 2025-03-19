import React from "react";
import './LanguageDropdown.scss';

const LanguageDropdown = ({dark}) => {
    console.log("Dark mode:", dark);
    return (
        
        <div className="language-dropdown">
            <span className="selected-language">
                <img src="/img/flag.svg" alt="" className="icon-flag"/>
                EN{dark}
                <img src={dark ? "/img/chevron-down-dark.svg" : "/img/chevron-down-white.svg"} alt={dark} className="chevron-down" />
            </span>
            <ul className="dropdown-menu">
                <li><a href="#ch" className="dropdown-item"><img src="/img/flag-cn.svg" alt="" />中文(简体)</a></li>
                <li><a href="#de" className="dropdown-item"><img src="/img/flag-de.svg" alt="" />Deutsch</a></li>
                <li><a href="#fr" className="dropdown-item"><img src="/img/flag-fr.svg" alt="" />Français</a></li>
                <li><a href="#fr" className="dropdown-item"><img src="/img/flag-ru.svg" alt="" />Русский</a></li>
            </ul>
        </div>
    );
};

export default LanguageDropdown;
