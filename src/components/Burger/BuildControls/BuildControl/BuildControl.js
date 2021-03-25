import React from 'react';
import classes from './BuildControl.module.scss';

const buildControl = props => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{props.label}</div>
        <button 
            className={classes.less} 
            onClick={props.removed} 
            disabled={props.disabled}>
                Less
        </button>
        <button 
            className={classes.more} 
            onClick={props.added}>
                More
        </button>
    </div>
);

export default buildControl;