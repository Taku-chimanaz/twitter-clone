import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarOption from './SidebarOption';


function Sidebar() {
  return (
    <div className="sidebar">

        {/* Twitter icon */}
        <TwitterIcon/>


        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
        {/* Sidebar Options*/}
        {/* Sidebar Options*/}
        {/* Sidebar Options*/}
        {/* Sidebar Options*/}
        {/* Sidebar Options*/}


    </div>
  )
}

export default Sidebar