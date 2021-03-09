import React, {FunctionComponent} from 'react';
import logo from '../../assets/icons/logo.svg'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

type HeaderProps = {
  login: string
  isAuth: boolean
}
const Header: FunctionComponent<HeaderProps> = (props) => {

  return (
      <header className={classes.wrapper}>
        <img className={classes.logo} src={logo} alt='logo'/>
        <div>Header</div>
        <div>
          {props.isAuth
              ? props.login
              : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  )
}

export default Header;
