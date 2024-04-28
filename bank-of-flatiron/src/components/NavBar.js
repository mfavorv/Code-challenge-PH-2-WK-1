import React from "react";

function NavBar(){
    const divStyle = {
        backgroundColor: 'indigo',  
        color: "white",
        marginBottom: "20px" 
      };
    
    return (
        <div>
            <h2 style={divStyle}>The Royal Bank of Flatiron</h2>
        </div>
    )
}

export default NavBar;