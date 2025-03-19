import React from "react";
import './FormButton.scss';

const FormButton = ({ text, icon }) => {
    return (
        <button className="btn btn-primary">
            {text}
            {icon && <img src={icon} alt="Button Icon" />}
        </button>
    );
};

export default FormButton;
