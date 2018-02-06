import React from "react";
import ProfileTop from "./ProfileTop/ProfileTop";
import ProfileBottom from "./ProfileBottom/ProfileBottom";

function About(){
  var aboutStyles = {
    margin:'10px',
    boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    border: '2px solid black',
    display: 'flex',
    flexFlow: 'column nowrap',
    fontFamily: 'sans-serif',
    width: '300px',
    alignItems: 'center'
  }
  return (
    <div style={aboutStyles}>
      <ProfileTop/>
      <ProfileBottom/>
    </div>
  );
}

export default About;
