import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat({imageUrl}) {
    return (
        <div className="sidebar__chat">
            <div className="sidebar__chatAvatar">
                <Avatar alt="Simoney" className="Avatar" src={imageUrl}/>
            </div>
            <div>
                <div className="sidebar__chatInfo">
                    <p><strong>room-name</strong></p>
                    <p style={{color: "gray"}}>yesterday</p>
                </div>
                <div>
                    <p>last message</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat
