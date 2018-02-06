import React from "react";

function PeopleList(){

  var peopleListStyles = {
    minWidth: '200px',
    border: '2px solid black',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  }

  var recommendedStyles = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px'
  }

  var peopleImage = {
    width: '50px',
    height: '50px',
    backgroundColor: '#E86EBD'
  }

  var buttonStyle = {
    backgroundColor: '#008F95',
    color: 'white',
    fontSize: '1em',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius: '10px'
  }
  return (
    <div style={peopleListStyles}>
      <h4>Recommended For You</h4>
      <div style={recommendedStyles}>
        <div style={peopleImage}></div>
        <h4>@MariahCarey ‏</h4>
        <button style={buttonStyle}>Follow</button>
      </div>
      <div style={recommendedStyles}>
        <div style={peopleImage}></div>
        <h4>@Beyonce</h4>
        <button style={buttonStyle}>Follow</button>
      </div>
      <div style={recommendedStyles}>
        <div style={peopleImage}></div>
        <h4>@Real_CSS_Tricks</h4>
        <button style={buttonStyle}>Follow</button>
      </div>
    </div>

  );
}

export default PeopleList;
