import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {
    return (
        <div className={classes.sideDrawer}>
            <Logo height="11%" marginBottom="32px" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;