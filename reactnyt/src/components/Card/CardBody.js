import React from "react";

export const CardBody = ({children}) => {
    return (
        <div class="card-body">
            <p class="card-text">{children}</p>
        </div>
    );
};