import React from 'react'
import "./share.css"
import friendimg1 from "../../../public/assets/person/1.jpeg";
import {PermMedia,Label,LocationOn,EmojiEmotions} from '@mui/icons-material';

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className="shareTop">
          <img className='shareProfileImg' src={friendimg1} alt="" />
          <input 
            placeholder="what's on your Mind Reda ?"
            className='shareInput'
          />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor="green" className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="yellow" className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>


        </div>
      </div>
    </div>
  )
}

export default Share