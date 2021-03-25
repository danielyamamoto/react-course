import React from 'react';
import classes from './Button.module.scss';

const button = props => (
    <button className={[classes.button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;