import React from 'react';
import "./post.css";
import { MoreVert } from '@mui/icons-material';
import likeImg from "../../../public/assets/like.png";
import loveImg from "../../../public/assets/heart.png";
import { Users } from "../../../public/dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  

const likeHandler = () =>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked);
}

  // Find luser based 3la luser from post :)
  const user = Users.find((user) => user.id === post.userId);

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {user && (
              <>
                <img className='postProfileImg' src={user.profilePicture} alt={user.username} />
                <span className='postProfileName'>{user.username}</span>
              </>
            )}
            <span className='postTime'>{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className='optionLogo' />
          </div>
        </div>
        <div className="postCenter">
          <span className='postTitle'>{post.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeimg' src={likeImg} onClick={likeHandler} alt="Like" />
            <img className='likeimg' src={loveImg} onClick={likeHandler} alt="Love" />
            <span className='postLikeStats'>
              {like} people liked this!
            </span>
          </div>
          <div className="postBottomRight">
            <span className="PotCommentNumber">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
