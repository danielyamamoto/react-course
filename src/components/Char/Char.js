import React from 'react';
import classes from '../../assets/css/style.css';

const char = (props) => {
    return (
        <div className={classes.ABC} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;