import React, { Component } from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";

class Navbarswitch extends Component {

  render() {
    return (
      <div className="Navbar">
      <Link to = "/" style={{ textDecoration: 'none', color: 'black', fontSize: '20px', cursor:'pointer' }}>Equipments</Link>
      <Link to = "/request" style={{ textDecoration: 'none', color: 'black', fontSize: '20px', cursor:'pointer' }}>Requests</Link>
      <Link to = "/add" style={{ textDecoration: 'none', color: 'black', fontSize: '20px', cursor:'pointer' }}>Add Product</Link>

      </div>
    );
  }
}

export default Navbarswitch;
