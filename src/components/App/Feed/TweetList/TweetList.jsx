import React from "react";
import Tweet from ".././Tweet/Tweet"

function TweetList(){

  var masterTweetList = [
    {
      user:'@dril',
      time:'14 Sept 2008',
      tweet:'Food $200 Data $150 Rent $800 Candles $3,600 Utility $150. someone who is good at the economy please help me budget this. my family is dying'
    },
    {
      user:'@mountain_goats',
      time:'3 Mar 2013',
      tweet:'Despite all my rage I am still just a frog in a ball'
    },
    {
      user:'@CherOfficial',
      time:'17 Jul 2017',
      tweet:'Don\'t leave the dog shampoo on the tub\'s edge. On the bright side, I should be flea and tick free for the next 30 days.'
    }
  ]
  return (
    <div>
      <hr/>
        {masterTweetList.map((tweet, index) =>
          <Tweet user={tweet.user}
            time={tweet.time}
            tweet={tweet.tweet}
            key={index}/>
        )}
    </div>
  );
}

export default TweetList;
