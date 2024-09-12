import React, { Component } from 'react';
import MoneyManagerContent from './MoneyManagerContent';
import { v4 as uuid4 } from 'uuid';
import './MoneyManager.css'; 

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income', 
    totalCount: 0,
    income: 0,
    express: 0,
    History: [],
  };

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

 
  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  onTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  onAddBalance = (e) => {
    e.preventDefault();
    const { title, amount, type, History } = this.state;
    const newList = {
      id: uuid4(),
      title,
      amount: Number(amount),
      type,
    };

    if (type === 'Income') {
      this.setState((prevState) => ({
        History: [...prevState.History, newList],
        title: '',
        amount: '',
        totalCount: prevState.totalCount + Number(amount),
        income: prevState.income + Number(amount),
      }));
    } else if (type === 'Expenditure') {
      this.setState((prevState) => ({
        History: [...prevState.History, newList],
        title: '',
        amount: '',
        totalCount: prevState.totalCount - Number(amount),
        express: prevState.express + Number(amount),
      }));
    }
  };

  onDelete = (id) => {
    const { History } = this.state;
    const filteredList = History.filter((each) => each.id !== id);
    const deletedItem = History.find((each) => each.id === id);

    if (deletedItem) {
      if (deletedItem.type === 'Income') {
        this.setState((prevState) => ({
          History: filteredList,
          totalCount: prevState.totalCount - deletedItem.amount,
          income: prevState.income - deletedItem.amount,
        }));
      } else if (deletedItem.type === 'Expenditure') {
        this.setState((prevState) => ({
          History: filteredList,
          totalCount: prevState.totalCount + deletedItem.amount,
          express: prevState.express - deletedItem.amount,
        }));
      }
    }
  };

  render() {
    const { title, amount, type, totalCount, income, express, History } = this.state;

    return (
      <div className="container">
    
        <div className="top-section">
          <div className="welcome-section">
            <h2>Hi, Nagender</h2>
            <h3>Welcome to the MoneyManager App</h3>
          </div>
          <div className="summary-section">
            <p>Total Amount: {totalCount}</p>
            <p>Income: {income}</p>
            <p>Expenditure: {express}</p>
          </div>
        </div>

    
        <div className="main-content">
     
          <div className="form-section">
            <form>
              <label>Title:</label>
              <input
                type="text"
                onChange={this.onTitleChange}
                value={title}
                placeholder="Enter the title"
              />
              <br />
              <label>Amount:</label>
              <input
                type="number"
                onChange={this.onAmountChange}
                value={amount}
                placeholder="Enter the Amount"
              />
              <br />

              <label>Type:</label>
              <select onChange={this.onTypeChange} value={type}>
                <option value="Income">Income</option>
                <option value="Expenditure">Expenditure</option>
              </select>
              <br />

              <button type="submit" onClick={this.onAddBalance}>
                Add
              </button>
            </form>
          </div>

     
          <div className="history-section">
            <h3>History</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {History.length > 0 ? (
                  History.map((eachMoney) => (
                    <MoneyManagerContent
                      key={eachMoney.id}
                      eachMoney={eachMoney}
                      onDelete={this.onDelete}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No history available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
