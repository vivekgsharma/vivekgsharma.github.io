import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Navbarswitch from './Navbarswitch'

import Equipments from './Equipments'
import Request from './Request'
import AddProduct from './AddProduct'

class Main extends Component {

  render() {
    return (
      <div >
      
      <Router>
      <Navbarswitch />
      <Routes>
      <Route exact path="/" element={<Equipments
       
        products={this.props.products}
        requestProduct={this.props.requestProduct}
        requestCount={this.props.requestCount}
        request={this.props.request}
        purchaseProduct={this.props.purchaseProduct} /> }/>
        
      
      <Route path="/request" element={
        <Request
        products={this.props.products}
        requestProduct={this.props.requestProduct}
        requestCount={this.props.requestCount}
        request={this.props.request}
        purchaseProduct={this.props.purchaseProduct} />}/>
      
      <Route path="/add" element={
        <AddProduct 
        createProduct={this.createProduct}/>}/>
      
      </Routes>
    </Router>
      
        
      </div>
    );
  }
}

export default Main;
