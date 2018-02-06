import React from "react";
import PeopleList from "./PeopleList/PeopleList";

var othersStyles = {
  margin:'10px',
  boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

function Others(){
  return (
    <div style={othersStyles}>
      <PeopleList/>
    </div>
  );
}

export default Others;
