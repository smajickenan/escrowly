import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ breadcrumbs = [] }) => {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <ul className="breadcrumbs-list">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={index}>
                            {index !== breadcrumbs.length - 1 ? (
                                <Link to={crumb.url}>{crumb.title}</Link>
                            ) : (
                                <span>{crumb.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
