import React from "react";

function DisplayTransactions({ transactionsData}) {
 
  const divStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px"
  }

  return (
    <div style={{
      marginTop: "20px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)"
    }}>
     
     {transactionsData.length > 0 ? (
        <table style={{  
          fontFamily:"arial", 
          font:"sansSerif",
          width:"100%",
          border:"1px solid black",
          borderCollapse:"collapse"}}>
          <thead>
            <tr>
              <th style={divStyle}>Date</th>
              <th style={divStyle}>Description</th>
              <th style={divStyle}>Category</th>
              <th style={divStyle}>Amount</th>
            </tr>
          </thead>
          <tbody >
            {transactionsData.map((transaction, index) => (
              <tr style={index % 2 === 0 ? { backgroundColor: "#dddddd" } : null} key={index} >
                <td style={divStyle}>{transaction.Date}</td>
                <td style={divStyle}>{transaction.Description}</td>
                <td style={divStyle}>{transaction.Category}</td>
                <td style={divStyle}>{transaction.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table> 
     ) : 
       (<p> No transactions found</p>)
}
      
    </div>
  );
}

export default DisplayTransactions;
