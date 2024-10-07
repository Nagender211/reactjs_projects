import React, { Component } from 'react';
import Cookies from 'js-cookie';

const apiStatusPrime = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
};

class PrimeProduct extends Component {
  state = {
    products: [],
    apiStatus: apiStatusPrime.initial,
  };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    this.setState({ apiStatus: apiStatusPrime.loading }); // Set loading state
    const apiUrl = 'https://apis.ccbp.in/prime-deals';
    const jwtToken = Cookies.get('jwt-token');
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        const updatedList = data.prime_deals.map((product) => ({
          id: product.id,
          price: product.price,
          rating: product.rating,
          style: product.style,
          title: product.title,
          totalReviews: product.total_reviews,
          availability: product.availability,
          brand: product.brand,
          description: product.description,
          imageUrl: product.image_url,
        }));
        this.setState({ products: updatedList, apiStatus: apiStatusPrime.success });
      } else if (response.status === 401) {
        Cookies.remove('jwt-token');
        this.setState({ apiStatus: apiStatusPrime.failure });
      }
    } catch (error) {
      console.error('Error fetching prime deals:', error);
      this.setState({ apiStatus: apiStatusPrime.failure });
    }
  };

  renderFailure = () => {
    return (
      <div>
      <h1> Get prime Deals</h1>
        <img
          src="https://bgr.com/wp-content/uploads/2023/09/Prime-Big-Deal-Days-Sign.jpg?quality=82&strip=all"
          alt="prime deals"
        />
      </div>
    );
  };

  renderLoading = () => {
    return <div>Loading...</div>;
  };

  renderProductList = () => {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid black', margin: '10px' }}>
            <img
              src={product.imageUrl}
              alt="product-img"
              style={{ width: '200px', height: '200px' }}
            />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Total Reviews: {product.totalReviews}</p>
            <p>Availability: {product.availability}</p>
            <p>Brand: {product.brand}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusPrime.success:
        return this.renderProductList();
      case apiStatusPrime.failure:
        return this.renderFailure();
      case apiStatusPrime.loading:
        return this.renderLoading();
      default:
        return null;
    }
    
  }
}

export default PrimeProduct;
