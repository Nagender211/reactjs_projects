import React, { Component } from 'react';
import Header from './Header';
import AllProducts from './AllProducts';

const productList = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
];

class Products extends Component {
  state = {
    products: productList,
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <Header />
        {products.map((each) => (
          // Make sure to add the key prop here
          <AllProducts key={each.id} each={each} />
        ))}
      </div>
    );
  }
}

export default Products;


// export default Products
