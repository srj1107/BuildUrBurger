import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleClicked}/>
        <div>
        <Logo className={classes.Logo}/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
        </nav>
    </header>
);

export default toolbar;