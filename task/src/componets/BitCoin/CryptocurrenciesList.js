import React from 'react'

const CryptocurrenciesList = (props) => {
    const {item}=props;
    const {currencyName,usdValue,euroValue,currencyLogo,id}=item;
  return (
    <div>
        
      <img src={currencyLogo} alt={currencyName} />
      <h3>{currencyName}</h3>
      <p>USD: {usdValue}</p>
      <p>EUR: {euroValue}</p>
      {/* <button onClick={()=>props.deleteCurrency(id)}>Delete</button> */}

    </div>
  )
}

export default CryptocurrenciesList
