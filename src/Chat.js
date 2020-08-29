import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>

                <div className="chat__headerInfo">
                    <p>room-name</p>
                </div>

                <div className="chat__headerButtons">
                    <SearchRoundedIcon/>
                    <AttachFileIcon className="chat__headerButtonsRotate45"/>
                    <MoreVertIcon/>
                </div>

            </div>


            <div className="chat__body">
                <div className="bg"></div>
            </div>


            <div className="chat__footer">
                <EmojiEmotionsOutlinedIcon/>

                <div className="chat__footerInput">
                    <input type="text"></input>
                    <IconButton>
                        <SendIcon />                        
                    </IconButton>
                </div>

            </div>

        </div>
    )
}

export default Chat
