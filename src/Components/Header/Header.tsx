import React, {FunctionComponent} from 'react';
import logo from '../../assets/icons/logo.svg'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

type HeaderProps = {
  login: string
  isAuth: boolean
  logOut:()=>void
}
const Header: FunctionComponent<HeaderProps> = (props) => {

const setLogOut = () => {
  props.logOut()
}


  return (
      <header className={classes.wrapper}>
        <img className={classes.logo} src={logo} alt='logo'/>
        <div>Header</div>
        <div>
          {props.isAuth
              ? <div>{props.login}<button onClick={setLogOut}>Log Out</button></div>
              : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  )
}

export default Header;
