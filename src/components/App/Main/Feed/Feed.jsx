import React from "react";
import Compose from "./Compose/Compose";
import TweetList from "./TweetList/TweetList";

function Feed(){
  var feedStyles = {
    minWidth: '500px',
    border: '2px solid black',
    padding: '8px',
    margin:'10px',
    boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  };
  return (
    <div style={feedStyles}>
      <Compose/>
      <TweetList/>
    </div>
  );
}

export default Feed;
