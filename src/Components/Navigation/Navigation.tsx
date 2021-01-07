import React from 'react';
import classes from './Navigation.module.css'


export function Navigation() {
    return (
        <nav className={classes.wrapper}>
            <ul className={classes.list}>
                <li className={`${classes.item}${classes.active}`}>Profile</li>
                <li className={classes.item}>Messages</li>
                <li className={classes.item}>News</li>
                <li className={classes.item}>Music</li>
                <li className={classes.item}>Settings</li>
            </ul>
        </nav>
    );
}
