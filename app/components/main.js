import React from 'react';
require('../styles/main.css');

function Main (props) {
    return (
        <div className="main-container">
            {props.children}
        </div>
    )
}


export default Main;
