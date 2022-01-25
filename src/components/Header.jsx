import React from 'react';
import './index.css';
import { SiGooglekeep } from 'react-icons/si';


function Header(){
    return(
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">SafeNotes<SiGooglekeep /></span>
        </div>
        <p className="copy">Copyright Ⓒ {new Date().getFullYear()}</p>
      </nav>
    );
}

export default Header;