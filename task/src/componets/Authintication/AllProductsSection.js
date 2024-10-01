import { Component } from "react";
import Cookies from "js-cookie";
import { TailSpin } from 'react-loader-spinner'; 

import ProductCard from "./ProductCard";
// import "./index.css";

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const apiUrl = "https://apis.ccbp.in/products";
    const jwtToken = Cookies.get("jwt-token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        productsList: updatedData,
        isLoading: false,
      });
    }
  };

  renderProductsList = () => {
    const { productsList } = this.state;
    const { isLoading } = this.state;

    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {isLoading ? (<TailSpin color="#00BFFF" height={50} width={50} />): (
             productsList.map((product) => (
              <ProductCard productData={product} key={product.id} />
            ))
            
          )}
         
        </ul>
      </div>
    );
  };

  render() {
    return <>{this.renderProductsList()}</>;
  }
}

export default AllProductsSection;