import React, { Fragment } from 'react';
import './header.scss';
import Navbar from '../Navbar/Navbar';
import avatar from './josefel.jpg';
import {ReactComponent as Bild} from './img.svg';

const Header = () => {
    return (

        <div className="header">
            <Navbar />
            <div className="container">
                <div className="header-content">
                    <h1 className="home-title">
                        Deveolper, Engineer, Freelancer
                    </h1>
                    <h4 className="lead">
                        I write code and I love what I do
                    </h4>

                    <div className="bio-grid px-2">
                        <div className="main-img"></div>
                        <div className="bio">
                            {/* <h5 className="lead">Who am i professionally?</h5> */}
                            <p className="p-1">
                                I'm a front-end deveolper specializing in React JS.
                                Because of my great passion for programming, I'm more of
                                a programmer than a designer (doesn't mean i do not 
                                appreciate good design). I have an engineerig background in 
                                Mechatronichs and during my studies for that i got in touch with
                                machine-near programming such as coding in C and programming 
                                microprocessors which sparked my interest for coding and 
                                what led me to specialize in Web Development.
                            </p>
                        </div>
                    </div>

                    
                    
                    
                </div>
            </div>
            
        </div>
    );
}

export default Header;