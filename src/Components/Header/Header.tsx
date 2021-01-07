import React from 'react';
import logo from '../../logo.svg'
import classes from './Header.module.css'
export function Header (){
    return (
        <header className={classes.wrapper}>
          <img className={classes.logo} src={logo} alt='logo'/>
          <div>Header</div>
        </header>
    )
}