import React, { useState } from 'react';

const SearchTransaction = ({ transactions, handleSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (e) => {
    const term = e.target.value.trim().toLowerCase();
    setSearchTerm(term);
    if (term === '') {
      setSearchResults([]);
      handleSearchResults([]);
      
    } else {
      handleSearch(term);
    }
  };

  const handleSearch = (term) => {
    const results = transactions.filter(
      (transaction) => transaction.Description.toLowerCase().includes(term)
    );
    
    console.log(searchResults)
    setSearchResults(results);
    handleSearchResults(results);
   
  };

  return (
    <div>
      <input 
       type="text" 
       value={searchTerm} 
       onChange={handleChange} 
       style={{ width: "99%", marginBottom: "20px" }} 
       placeholder="Search your Recent Transactions"
      /> 

    </div>
  );
};

export default SearchTransaction;
