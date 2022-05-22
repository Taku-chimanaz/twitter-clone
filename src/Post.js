import { Avatar } from '@mui/material';
import {avatarUrl} from './data'
import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

function Post() {

  return (

    <div className='post'>

        <div className="post__avatar">
            <Avatar src={avatarUrl}/>
        </div>

        <div className="post__body">

            <div className="post__header">
                <div className="post__headerText">
                    <h3>Takudzwa L Chimanikire <span className='post__headerSpecial'><VerifiedUserIcon className="post__badge"/>@tk_cypher_zw</span> </h3>
                </div>

                <div className="post__headerDescription">
                    <p>I challenge you to build a Twitter Clone</p>
                </div>
            </div>

            <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="gif" />

            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavouriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
            </div>
        </div>

    </div>

  )
}

export default Post