import React from 'react';
import './navbar.scss';
import logo from './logo.png';

const Navbar = () => {
    return (
            <nav id="navbar">
                <div className="container p-1">
                    <div className="nav-content">
                        <img src={logo} alt="logo" className="logo"/>
                        <p className="name">Josef Elrefai</p>
                        <div className="nav-btns">
                            <button className="nav-btn-1">About</button>
                            <button className="nav-btn-2">Contact</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
}

export default Navbar;