import React from "react";
import Compose from "./Compose/Compose";
import Tweets from "./Tweets/Tweets";

function Feed(){
  return (
    <div>
      <h1>Feed</h1>
      <Compose/>
      <Tweets/>
    </div>
  );
}

export default Feed;
