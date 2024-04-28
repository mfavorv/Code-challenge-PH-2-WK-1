import React, { useState } from "react";

function AddTransaction({ transactions, setTransactions }) {
  const [newTransaction, setNewTransaction] = useState({
    Date: '',
    Description: '',
    Category: '',
    Amount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTransaction.Date.trim() && newTransaction.Description.trim() && newTransaction.Category.trim() && newTransaction.Amount.trim() !== "") {
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      setNewTransaction({
        Date: '',
        Description: '',
        Category: '',
        Amount: ''
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input style={{width:"23%", marginBottom: "10px"}}
          type="date"
          value={newTransaction.Date}
          onChange={(e) => setNewTransaction({ ...newTransaction, Date: e.target.value })}
          placeholder="dd/mm/yyyy"
        />
        <input style={{width:"23%" , marginBottom: "10px"}}
          type="text"
          value={newTransaction.Description}
          onChange={(e) => setNewTransaction({ ...newTransaction, Description: e.target.value })}
          placeholder="Description"
        />
        <input style={{width:"23%", marginBottom: "10px"}}
          type="text"
          value={newTransaction.Category}
          onChange={(e) => setNewTransaction({ ...newTransaction, Category: e.target.value })}
          placeholder="Category"
        />
        <input style={{width:"26.7%", marginBottom: "10px"}}
          type="number"
          value={newTransaction.Amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, Amount: e.target.value })}
          placeholder="Amount"
        />
        <button type="submit" style={{marginBottom: "20px"}}>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
