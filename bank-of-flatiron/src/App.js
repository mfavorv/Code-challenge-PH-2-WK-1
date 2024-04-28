import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import SearchTransaction from './components/SearchBar.js';
import DisplayTransactions from './components/DisplayTransactions.js';
import transactionsData from './components/Transactions.js';
import AddTransaction from './components/AddTransaction.js';

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [searchResults, setSearchResults] = useState([]); 
 
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <NavBar className="App-header" />
      <SearchTransaction transactions={transactions} handleSearchResults={handleSearchResults} />
      <AddTransaction transactions={transactions} setTransactions={setTransactions} />
      <DisplayTransactions transactionsData={searchResults.length > 0 ?  searchResults: transactions} />
    </div>
  );
}

export default App;
