import { Component } from "react";
import AllProductsSection from "./AllProductsSection";
import Cookies from 'js-cookie'
import Header from "./Header";
import PrimeProduct from './PrimeProduct'
// import "./index.css";

class Products extends Component{
 
  render() {
    return (
      <div>
        <Header />
        <PrimeProduct />  
        <AllProductsSection />
      </div>
    )
  }
}

export default Products;


// ProdutsItems
// export default Products

