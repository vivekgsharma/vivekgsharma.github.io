import React, { Component } from 'react';

class Equipments extends Component {

  render() {
    return (
      <div id="content">
        
        
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


        
        
      </div>
    );
  }
}

export default Equipments;
