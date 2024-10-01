import React, { Component } from 'react'
import Header from './Header'
import ProductItem from './ProductItem';
import Cookies from 'js-cookie'
class Products extends Component{
  state={
    productList: [],

  }
  componentDidMount(){
    this.getApiData();
  }
  getApiData=async ()=>{
    const apiUrl='https://apis.ccbp.in/products';
    const jwtToken=Cookies.get('jwt-token')
    const options={
     
      headers: {
        
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response=await fetch(apiUrl,options);

    if(response.ok===true){
      const data=await response.json();
      const update=data.products.map(product=>({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,

      }));
      this.setState({productList: update});
    }
  }
  render() {
    const {productList}=this.state;
    return (
      <div>
        <Header />
        {
          productList.map(product=>(
            <ProductItem product={product} key={product.id} />
          ))
        }

        
      </div>
    )
  }
}

export default Products
