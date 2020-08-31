import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function SidebarChat({id, name, imageUrl}) {
    return (
        <Link to={`/rooms/${id}`}>
            <div className="sidebar__chat">
                <div className="sidebar__chatAvatar">
                    <Avatar alt="Simoney" className="Avatar" src={imageUrl}/>
                </div>
                <div>
                    <div className="sidebar__chatInfo">
                        <p><strong>{name}</strong></p>
                        <p style={{color: "gray"}}>yesterday</p>
                    </div>
                    <div>
                        <p>last message</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat
