import React from "react";
import "./HelpDeskItem.scss";
import { Link } from "react-router-dom";

const HelpDeskItem = ({ question, link = "/help-desk-single" }) => {
    return (
        <li className="help-desk-item">
            <Link to={link}>
                <span>Q.</span> {question}
            </Link>
        </li>
    );
};

export default HelpDeskItem;
