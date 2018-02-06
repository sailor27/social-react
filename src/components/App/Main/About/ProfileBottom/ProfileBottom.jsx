import React from "react";

function ProfileBottom(){

  var profileBottomStyles = {
    paddingLeft: '15px',
    paddingRight: '15px',
    height: '60%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }


  return (
    <div style={profileBottomStyles}>
      <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
      <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
      <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
      <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
    </div>

  );
}

export default ProfileBottom;
