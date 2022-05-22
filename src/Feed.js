import './Feed.css';
import TweetBox from './TweetBox';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import db from './firebaseFile';
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    db.collection('posts').onSnapshot(snapshot => {
      console.log("snapshot:", snapshot);
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
    
  }, []);

  return (
    <div className='feed'>
        {/*   Header */}
        
        <div className="feed__header">
            <h2>Home</h2>
        </div>

        {/*   TweetBox */}
        <TweetBox/>

        {/* Post */}


        <FlipMove>
            {posts.map(post =>{
              
              return <Post key={post.text}
              displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>

            })}
       </FlipMove>

    </div>
  )
}

export default Feed