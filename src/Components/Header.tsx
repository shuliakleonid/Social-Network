import React from 'react';
import logo from '../logo.svg'
export function Header (){
    return (
        <header className='header__wrapper'>
          <img className='header__logo' src={logo} alt='logo'/>
          <div>Header</div>
        </header>
    )
}