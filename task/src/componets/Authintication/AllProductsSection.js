import { Component } from "react";
import Cookies from "js-cookie";
import { TailSpin } from 'react-loader-spinner'; 

import ProductCard from "./ProductCard";
import ProductSortHeader from "./ProductSortHeader";
// import "./index.css";


const sortOption=[
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: true,
    activeOption: sortOption[0].optionId
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const {activeOption}=this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOption}`;
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
  updateActive=activeOption=>{
    this.setState({activeOption},this.getProducts)
  }

  renderProductsList = () => {
    const { productsList } = this.state;
    const { isLoading } = this.state;
    const {activeOption}=this.state

    return (
      <div>
        <ProductSortHeader sortOption={sortOption} activeOption={activeOption} updateActive={this.updateActive} />
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