import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import NavInputs from "./NavInputs/NavInputs";

function Nav(){
  var navStyles = {
    width: '100vw',
    height: '150px',
    backgroundColor: '#FFFAFA',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  };
  return (
    <div style={navStyles}>
      <NavLinks/>
      <NavInputs/>
    </div>
  );
}

export default Nav;
