import React from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";


function Widgets() {

  return (
    <div className='widgets'>

      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"/>
        <input type="text" placeholder='Search Tweet'/>
      </div>


      <div className="widgets__widgetsContainer">
        
        <h2>What's hapenning</h2>
        <TwitterTweetEmbed tweetId={"1528348469009829889"}/>

        <TwitterTimelineEmbed sourceType='profile' screenName='tk_cypher_zw' options={{height: 400}}/>

        <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{text: "#reactjs is awesome", via: "cleverqazi"}}/>
      </div>
    </div>
  )
}

export default Widgets