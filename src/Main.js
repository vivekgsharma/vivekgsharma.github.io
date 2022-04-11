import React, { Component } from 'react';

class Main extends Component {

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
        <p>&nbsp;</p>
        <h2>Equipments </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                             console.log(event.target.name)
                            this.props.requestProduct(event.target.name)
                          }}
                        >
                          Request
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <p>&nbsp;</p>


        <h2>Requests </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
           { this.props.requestCount>0
                      ? 
                      
          <tbody id="productList">
           { this.props.request.map((req, key) => {
              return(
                 <tr >
               
                  <th scope="row">{key+1}</th>
                  <td>{this.props.products[req.productID.toNumber()-1].name}</td>
                  <td>{req.owner}</td>
                  <td>
                    { req.productID.toNumber()>0
                      ? <button
                          name={req.productID.toNumber()}
                          onClick={(event) => {
                            console.log(event.target.name)
                            const _k=key+1;
                            this.props.purchaseProduct(1,_k)
                          }}
                        >
                          Accept
                        </button>
                      : null
                    }
                    </td>
                    
                  
                </tr>




                
              )
            })}
               
              
          </tbody>

            :null}
        </table>
        
      </div>
    );
  }
}

export default Main;
