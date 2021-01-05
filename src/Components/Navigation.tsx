import React from 'react';


export function Navigation() {
    return (
        <nav className='navigation__wrapper'>
            <ul className='navigation__list'>
                <li className='navigation__item'>Profile</li>
                <li className='navigation__item'>Messages</li>
                <li className='navigation__item'>News</li>
                <li className='navigation__item'>Music</li>
                <li className='navigation__item'>Settings</li>
            </ul>
        </nav>
    );
}
