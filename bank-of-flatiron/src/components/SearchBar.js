import React, { useState } from 'react';

const SearchTransaction = ({ transactionsData, handleSearch,setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  
  const handleChange = (e) => {
    const term = e.target.value
    setSearchTerm(term);
    handleSearch(term);
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
