import React from 'react'
import './TweetBox.css'
import { avatarUrl } from './data'
import { Avatar, Button } from '@mui/material'


function TweetBox() {

  return (
    <div className='tweetBox'>

        <form>

            <div className="tweetBox__input">
                <Avatar src={avatarUrl}/>

                <input type="text" placeholder='What is happenning' />

            </div>

            <input className='tweetBox__inputImage' type="text" placeholder='Optional: Enter image URL' />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox