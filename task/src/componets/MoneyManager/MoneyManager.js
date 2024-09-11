import React, { Component } from 'react'
import MoneyManagerContent from './MoneyManagerContent'
import MoneyHeader from './MoneyHeader'
import {v4 as uuid4} from 'uuid'
class MoneyManager extends Component{



    state={
        title: '',
        amount: '',
        type: 'Income',
        totalCount: 0,
        income: 0,
        express: 0,
        History: [],
    }

    onTitleChange=(e)=>{
        this.setState({title: e.target.value})
    }
    onAmountChange=(e)=>{
        this.setState({
            amount: e.target.value,
            
            // income: pre.income + (type === 'Income'? Number(e.target.value) : 0),
            // express: pre.express + (type === 'Expenditure'? Number(e.target.value) : 0),
        })
    }


    onAddbalence=(e)=>{
        e.preventDefault();
        const {title,amount,type,History}=this.state;
        const newList={
            id: uuid4(),
            title,
            amount,
            type,
        }
        this.setState((pre)=>({
            History: [...pre.History, newList],
            title: '',
            amount: '',
            totalCount: pre.totalCount + Number(amount),
            income: pre.income + (type === 'Income'? Number(amount) : 0),
            express: pre.express + (type === 'Expenditure'? Number(amount) : 0),
            
        }))
        
    }
    onDeletae=(id)=>{
        const {History}=this.state

        const filteredList=History.filter(each=>each.id!==id);
        this.setState({History: filteredList})

    }
    render(){
        const {title, amount, type, totalCount, income, express, History } = this.state;
        
        return(
            <div>
                <h4>Hi, Nagender</h4>
                <h4>Welcome to the MoneyManager App</h4>
                <p>total amount: {totalCount}</p>
                <p>Income: {income}</p>
                <p>Expenditure: {express}</p>
           

                <form>
                    <label>Title:</label>
                    <input type='text' onChange={this.onTitleChange} value={title} placeholder='Enter the title'/>
                    <br />
                    <label>Amount:</label>
                    <input type='text' onChange={this.onAmountChange} value={amount} placeholder='Enter the Amount'/>
                    <br />
                    <button type='submit' onClick={this.onAddbalence}>Add</button>
                </form>
                
                <h1>History</h1>
                <p>Title: </p>
                <p>Amount: </p>
                <p>Type: </p>

                {History.map(eachMoney=>(
                    <MoneyManagerContent key={eachMoney.id} eachMoney={eachMoney} onDeletae={this.onDeletae}/>

                ))
                }

                
            </div>
        )
    }
}
export default MoneyManager
