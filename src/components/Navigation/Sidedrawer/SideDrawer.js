import React from 'react';
import classes from './Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/auxillary';

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
        <div className ={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;