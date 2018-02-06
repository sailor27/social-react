import React from "react";
import Compose from "./Compose/Compose";
import TweetList from "./TweetList/TweetList";

function Feed(){
  return (
    <div>
      <h1>Feed</h1>
      <Compose/>
      <TweetList/>
    </div>
  );
}

export default Feed;
