import React from "react";

function DisplayTransactions({ transactionsData }) {
 

  return (
    <div>
     
        <table style={{width:"100%",border:"1px solid black",borderCollapse:"collapse"}}>
          <thead>
            <tr>
              <th style={{border:"1px solid black"}}>Date</th>
              <th style={{border:"1px solid black"}}>Description</th>
              <th style={{border:"1px solid black"}}>Category</th>
              <th style={{border:"1px solid black"}}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction, index) => (
              <tr key={index}>
                <td style={{border:"1px solid black",padding: "0"}}>{transaction.Date}</td>
                <td style={{border:"1px solid black",padding: "0"}}>{transaction.Description}</td>
                <td style={{border:"1px solid black",padding: "0"}}>{transaction.Category}</td>
                <td style={{border:"1px solid black",padding: "0"}}>{transaction.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
}

export default DisplayTransactions;
