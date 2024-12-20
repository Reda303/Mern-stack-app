import React from 'react'
import './feed.css'
import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"

import { Posts } from '../../../public/dummyData.js'
const Feed = () => {
  return (
    <div className='feed'>
    <div className="feedWrapper">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
      

    </div>
    </div>
  )
}

export default Feed