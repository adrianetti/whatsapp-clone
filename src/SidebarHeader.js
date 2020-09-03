import React from 'react'
import './Sidebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import db from './firebase';
import { useStateValue } from './StateProvider';

function SidebarHeader() {
    const [{ user }, dispatch] = useStateValue();

    console.log(user.displayName)

    const createChat = () => {
        const roomName = prompt("Enter a name for your new chat: ");

        if (roomName) {
            //do some database stuff
            db.collection("rooms").add({
                name: roomName,
                imageUrl: user.photoURL,
                
    
            })    
        }

    }

    return (
        <div className="sidebar__header">
        <Avatar alt={user?.displayName} className="sidebar__headerAvatar" src={user?.photoURL}/>
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
