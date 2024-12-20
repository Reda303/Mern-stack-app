import React from 'react'
import './rightbar.css'
import gift from "../../../public/assets/gift.png"
import adimg from "../../../public/assets/person/ad2.png"
import Online from "../online/Online.jsx"
import {Users} from "../../../public/dummyData"



export default function Rightbar({profile}) {
 

    const HomeRightbar = () =>{
      return(
        <>
         <div className="birthdayContainer">
          <img className='birthdayImg' src={gift} alt="" />
          <span className='birthdayText'><b>Demnati Nour</b> and <b>3 other Friends</b> have a birthday today. </span>
        </div>
        <img className='rightbarAd' src={adimg} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className= "rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
        
        
        
        </>
      );
    }

    const ProfileRightbar = () => {
     return(
      <>
      <h4 className='userInfoTtitle'>User Information</h4>
      <div className='userInfo'>
        <div className="userInfoItem">
        <span className='userInfoKey'>City:</span>
        <span className='userInfoValue'>New York</span>
        </div>
      <div className='userInfoItem'>
        <span className='userInfoKey'>From:</span>
        <span className='userInfoValue'>Madrid</span>
      </div>

      <div className='userInfoItem'>
        <span className='userInfoKey'>Relationship:</span>
        <span className='userInfoValue'>Single</span>
      </div>
      </div>

      <h4 className='userInfoTtitle'>User Friends</h4>
      <div className="rightbarFollowers">
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/2.jpeg" alt="" />
          <span className='rightbarFollowerName'>Hamza Halmi</span>
        </div>
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/4.jpeg" alt="" />
          <span className='rightbarFollowerName'>Demnati Nour</span>
        </div>
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/9.jpeg" alt="" />
          <span className='rightbarFollowerName'>Youssra Ben</span>
        </div>
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/8.jpeg" alt="" />
          <span className='rightbarFollowerName'>safae hs</span>
        </div>
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/6.jpeg" alt="" />
          <span className='rightbarFollowerName'>kai cenat</span>
        </div>
        <div className="rightbarfollower">
          <img className='rightbarFollowerImg' src="../../../public/assets/person/5.jpeg" alt="" />
          <span className='rightbarFollowerName'>jihane bah</span>
        </div>
      </div>
      <img className='rightbarAd' src={adimg} alt="" />
     
      </>
     );
    }
    return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar />}
       </div>
      </div>
  );

}

