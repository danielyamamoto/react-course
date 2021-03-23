import React from 'react';
import classes from '../../../assets/css/style.css';

const button = props => (
    <button className={[classes.button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;