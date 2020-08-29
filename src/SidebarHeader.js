import React from 'react'
import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';

function SidebarHeader() {
    const createChat = () => {
        const roomName = prompt("Enter a name for your new chat: ");

        if (roomName) {
            //do some database stuff
        }
    }

    return (
        <div className="sidebar__header">
        <Avatar alt="mark" className="sidebar__headerAvatar" src="https://tentulogo.com/wp-content/uploads/Mark-Zuckerberg-FB.jpg"/>
            <div className="sidebar__headerIcons">
                <IconButton onClick={createChat} className="sidebar__headerChatButton" disableFocusRipple={true} color="inherit">
                    <ChatIcon className="sidebar__headerChatIcon"/>                        
                </IconButton>
                <MoreVertIcon className="sidebar__headerMoreVertIcon"/>
            </div>
        </div>
    )
}

export default SidebarHeader
