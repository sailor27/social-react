import React from "react";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";

function App(){
  var wholeThingStyles = {
    backgroundColor: '#FFFAFA',
    margin: '0',
    height: '100vh',
    width: '100vw',
    fontFamily: 'sans-serif'
  };
  return (
    <div style={wholeThingStyles}>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
