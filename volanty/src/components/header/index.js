import React from 'react';
import './styles.css';
import logo from './volanty-logo.png';


const VolantyHeader = () => (
    <div className="volanty-header">
        <img src={logo} alt="volanty-logo" className="volanty-logo"></img>
    </div>
);


export default VolantyHeader;