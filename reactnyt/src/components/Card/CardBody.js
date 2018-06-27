import React from "react";

export const CardBody = ({children}) => {
    return (
        <div className="card-body">
            <p className="card-text">{children}</p>
        </div>
    );
};