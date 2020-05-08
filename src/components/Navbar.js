import React from 'react';

import './styles/Navbar.css';
import logo from '../images/logo.jpg'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;