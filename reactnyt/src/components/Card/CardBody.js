import React from "react";
import "./Card.css";
export const CardBody = ({children}) => {
    return (
        <div className="card-body">
            <p className="card-text">{children}</p>
            <hr></hr>
        </div>
    );
};