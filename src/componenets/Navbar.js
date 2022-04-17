import React from 'react';
import Logo from '../media/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <img className='nav-logo' src={Logo} alt="logo"/>
        </nav>
    );
};

export default Navbar;