import React from 'react';
import classes from '../../../assets/css/style.css'

const modal = props => (
    <div 
        className={classes.modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
    </div>
);

export default modal;