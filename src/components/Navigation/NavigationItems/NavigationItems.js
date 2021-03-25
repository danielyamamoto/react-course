import React from 'react';
import classes from '../../../assets/css/style.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>
    </ul>
);

export default navigationItems;