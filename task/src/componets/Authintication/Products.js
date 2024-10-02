import { Component } from "react";
import AllProductsSection from "./AllProductsSection";
import Cookies from 'js-cookie'
import Header from "./Header";
import PrimeProduct from './PrimeProduct'
// import "./index.css";

class Products extends Component{
  state={
    products: [],
  }
  componentDidMount() {
    this.getApiData();
  }
  getApiData=async()=>{
    const apiUrl='';
    const jwtToken=Cookies.get('jwt-token')
    const options = {
      heades: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`
      },
      method: 'GET',
    }
    const rseponse=await fetch(apiUrl,options);
    const date=await rseponse.json();
    console.log('Prime Products are shown your logged in as the Prime user')
  }
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

