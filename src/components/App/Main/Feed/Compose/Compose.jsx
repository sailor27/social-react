import React from "react";

function Compose(){
  var composeStyles = {
    height: '3em',
    minWidth: '300px',
    fontSize: '0.75em',
    padding: '0px',
    fontWeight: 'bold'
   }
  return (
    <div>
      <input style={composeStyles} placeholder="      What's Happening?"></input>
    </div>

  );
}

export default Compose;
