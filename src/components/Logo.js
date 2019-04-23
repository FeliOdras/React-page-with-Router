import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
    )
}

export default Logo
