import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import profileImage from '../../../public/assets/person/1.jpeg'; // Adjust the path as necessary

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>RedConnect</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className=''/>
          <input className='searchInput' placeholder='Search for a friend, post or video' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={profileImage} alt="Profile" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
