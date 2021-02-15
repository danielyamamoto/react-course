import React from 'react';

const char = (props) => {
    return (
        <div className="abc" onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;