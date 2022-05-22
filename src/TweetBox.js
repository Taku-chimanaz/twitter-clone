import React, {useState} from 'react'
import './TweetBox.css'
import { avatarUrl } from './data'
import { Avatar, Button } from '@mui/material'
import db from './firebaseFile';


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {

    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Takudzwa L Chimanikire',
      username: 'tk_cypher_zw',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: avatarUrl
    });

    setTweetImage("");
    setTweetMessage("")

  }

  return (
    <div className='tweetBox'>

        <form>

            <div className="tweetBox__input">
                <Avatar src={avatarUrl}/>

                <input type="text" placeholder='What is happenning'  value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}/>

            </div>

            <input className='tweetBox__inputImage' type="text" placeholder='Optional: Enter image URL' value={tweetImage} onChange={e => setTweetImage(e.target.value)} />
            <Button className='tweetBox__tweetButton' type="submit" onClick={sendTweet}>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox