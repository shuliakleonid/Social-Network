import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.css'


const Navigation = () => {
  return (
      <nav className={style.wrapper}>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/profile'>Profile</NavLink>
          </li>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/dialogs'>Messages</NavLink>
          </li>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/Users'>Users</NavLink>
          </li>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/news'>News</NavLink>
          </li>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/music'>Music</NavLink>
          </li>
          <li className={style.item}>
            <NavLink activeClassName={style.active} to='/settings'>Settings</NavLink>
          </li>
        </ul>
      </nav>
  );
}
export default Navigation
