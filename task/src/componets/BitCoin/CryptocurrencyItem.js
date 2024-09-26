import React, { Component } from 'react'
import CryptocurrenciesList from './CryptocurrenciesList';
import { TailSpin } from 'react-loader-spinner'; 

class CryptocurrencyItem extends Component{
    state={
        cryptoData: [],
        // error: null,
        isLoading: true,
    }
    
    componentDidMount(){
        this.getCryptoData()
    }
    getCryptoData=async()=>{
        const response= await fetch('https://apis.ccbp.in/crypto-currency-converter');
        const data=await response.json();
        const updateDate=data.map(item=>({
            currencyName: item.currency_name,
            usdValue: item.usd_value,
            euroValue: item.euro_value,
            currencyLogo: item.currency_logo,
            id: item.id,
        }))
        this.setState({cryptoData: updateDate,isLoading: false});
    }
    render() {
        const { cryptoData,isLoading } = this.state;
      return (
        <div>
            
            {isLoading ? ( <TailSpin color="#00BFFF" height={50} width={50} />): 
            (
                
                cryptoData.map(item=>(
                <CryptocurrenciesList item={item} key={item.id} />
            )))}
          
        </div>
      )
    }
}

export default CryptocurrencyItem
