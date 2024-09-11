import React from 'react'

const MoneyManagerContent = (props) => {
    const {eachMoney,onDeletae}=props;
    const {id,title, amount, type}=eachMoney;
    const delteHistosry=()=>{
        onDeletae(id);
    }
  return (
    <div>
        <p> {title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <img src='https://assets.ccbp.in/frontend/react-js/money-manager/delete.png' onClick={delteHistosry} />

    </div>
  )
}

export default MoneyManagerContent
