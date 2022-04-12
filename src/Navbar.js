import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {

  render() {
    return (
      <nav className="Navbar-container">
        <h1 className="nav-heading">
          Lab Equipments 
       </h1>
        <h1 className="account">{this.props.account}</h1>
      </nav>
    );
  }
}

export default Navbar;
