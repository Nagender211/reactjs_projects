import React from 'react';

const MoneyManagerContent = (props) => {
  const { eachMoney, onDelete } = props;
  const { id, title, amount, type } = eachMoney;
  const deleteHistory = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          onClick={deleteHistory}
        />
      </td>
    </tr>
  );
};

export default MoneyManagerContent;
