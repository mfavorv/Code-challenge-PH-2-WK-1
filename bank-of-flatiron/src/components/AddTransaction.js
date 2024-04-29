import React, { useState } from "react";

function AddTransaction({ transactions, addTransaction }) {
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
      addTransaction(updatedTransactions); 
      setNewTransaction({
        Date: '',
        Description: '',
        Category: '',
        Amount: ''
      });
    }
  };
  const styling = {
  borderRadius: "10px",
  textAlign: "center",
  color: "black",
  width: "20%",
  marginBottom: "10px",
  padding: "10px"
}

  return (
    <div>
      <form onSubmit={handleSubmit} style={
        {
          backgroundColor:"white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          border: "2px solid #ccc",
          width:"100%",
        
        }
      }>
        <label>Date:</label>
        <input style={styling}
          type="date"
          value={newTransaction.Date}
          onChange={(e) => setNewTransaction({ ...newTransaction, Date: e.target.value })}
          placeholder="dd/mm/yyyy"
        />
        <input style={styling}
          type="text"
          value={newTransaction.Description}
          onChange={(e) => setNewTransaction({ ...newTransaction, Description: e.target.value })}
          placeholder="Description"
        />
        <input style={styling}
          type="text"
          value={newTransaction.Category}
          onChange={(e) => setNewTransaction({ ...newTransaction, Category: e.target.value })}
          placeholder="Category"
        />
        <input style={styling}
          type="number"
          value={newTransaction.Amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, Amount: e.target.value })}
          placeholder="Amount"
        />
        <button type="submit" style={{
          borderRadius: "50px",
          marginBottom: "20px",
         width:"40%",
         backgroundColor: "#ccc",
         color: "black",
        border: "1px solid #ccc",
        padding: "10px 20px",
        fontSize: "small",
        marginTop: "10px auto",
        textAlign: "center",
        display: "inline-block",
       cursor: "pointer"}}>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
