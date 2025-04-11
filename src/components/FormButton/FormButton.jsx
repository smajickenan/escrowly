import React from "react";
import './FormButton.scss';

const FormButton = ({ text, onClick , icon}) => {
    return (
        <button 
            type="button" 
            className="btn btn-primary form-button"
            onClick={onClick}
        >
            {text}
           

        </button>
    );
};

export default FormButton;
