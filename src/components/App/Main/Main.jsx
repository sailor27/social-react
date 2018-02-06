import React from "react";
import About from "./About/About";
import Feed from "./Feed/Feed";
import Others from "./Others/Others";

function Main(){
  var mainStyles = {
    display: 'flex',
    flexFlow: 'row nowrap',
  }
  return (
    <div style={mainStyles}>
      <About/>
      <Feed/>
      <Others/>
    </div>
  );
}

export default Main;
