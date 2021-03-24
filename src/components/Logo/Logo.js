import React from 'react';
import burgerLogo from '../../assets/img/burger-logo.png';
import classes from '../../assets/css/style.css';

const logo = props => (
    <div className={classes.logo} style={{height: props.height, marginBottom: props.marginBottom}}>
        <img src={burgerLogo} alt="MyBurgerLogo" />
    </div>
);

export default logo;