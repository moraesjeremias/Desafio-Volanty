import React from 'react';
import './styles.css';
import logo from '../../assets/img/volanty-logo.png';


const Header = () => (
    <div className="volanty-header">
        <img src={logo} alt="volanty-logo" className="volanty-logo"></img>
    </div>
);


export default Header;