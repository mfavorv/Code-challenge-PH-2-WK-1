import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import SearchTransaction from './components/SearchBar.js';
import AddTransaction from './components/AddTransaction.js';
import DisplayTransactions from './components/DisplayTransactions.js';

function App() {

  const transactionsData = [
  {
      Date: '2024-12-10',
      Description: 'Movie tickets',
      Category: 'Entertainment',
      Amount: 20.00,
    },
    {
      Date: '2024-11-15',
      Description: 'Grocery shopping',
      Category: 'Food',
      Amount: 80.00,
    },
    {
      Date: '2024-08-20',
      Description: 'Freelance work payment',
      Category: 'Income',
      Amount: 500.00,
    },
    {
      Date: '2024-07-25',
      Description: 'Concert tickets',
      Category: 'Entertainment',
      Amount: 60.00,
    },
    {
      Date: '2024-02-28',
      Description: 'Lunch with friends',
      Category: 'Food',
      Amount: 30.00,
    },
    {
      Date: '2024-04-30',
      Description: 'Utility bill payment',
      Category: 'Bills',
      Amount: 100.00,
    },
    {
      Date: '2024-05-02',
      Description: 'Birthday gift',
      Category: 'Gifts',
      Amount: 50.00,
    },
      ];

  const [transactions, setTransactions] = useState(transactionsData);
  const [searchResults, setSearchResults] = useState(transactionsData); 

  
  const handleSearch = (searchTerm) => {
    const results = transactions.filter(
      (transaction) => transaction.Description.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    setSearchResults(results);
     console.log(searchResults)
  }

  const addTransaction = (updatedTransactions) => {
    setTransactions(updatedTransactions);
    setSearchResults(updatedTransactions); 
  };

console.log(transactionsData);
console.log(transactions);

  return (
    <div className="App">
      <NavBar className="App-header" />
      <SearchTransaction transactions={transactions} handleSearch ={handleSearch} setSearchResults={setSearchResults} />
      <AddTransaction transactions={transactions} addTransaction={addTransaction}/>
      <DisplayTransactions transactionsData={searchResults}/>
      </div>
  );
}
export default App;
