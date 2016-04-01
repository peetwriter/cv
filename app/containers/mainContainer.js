import React from 'react';

function MainContainer (props) {
    return(
        <div className="container text-center">
            {props.children}
        </div>
    )
}

module.exports = MainContainer;
