import React from "react";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Feed from "./Feed/Feed";
import Others from "./Others/Others";
function App(){
  return (

    <div>
      <Nav/>
      <About/>
      <Feed/>
      <Others/>
    </div>
  );
}

export default App;
