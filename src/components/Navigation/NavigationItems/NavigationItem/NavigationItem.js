import React from 'react';
import classes from '../../../../assets/css/style.css';

const navigationItem = props => (
    <li className={classes.navigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>
                {props.children}
        </a>
    </li>
);

export default navigationItem;