import React from 'react';
import classes from '../../../assets/css/style.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={classes.toolbar}>
        <div>MENU</div>
        <Logo height="80%" />
        <nav className={classes.onlyDesktop}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;