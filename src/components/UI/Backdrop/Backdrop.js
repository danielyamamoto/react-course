import React from 'react';
import classes from '../../../assets/css/style.css';

const backdrop = props => (
    props.show ? <div className={classes.backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;