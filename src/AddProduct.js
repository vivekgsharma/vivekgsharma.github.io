import React, { Component } from 'react';

class AddProduct extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Equipments</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          this.props.createProduct(name)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
          </div>
         
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
       
      </div>
    );
  }
}

export default AddProduct;
