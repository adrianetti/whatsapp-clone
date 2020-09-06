import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SendIcon from '@material-ui/icons/Send';
import db from  './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';




function Chat() {
    const { roomId } = useParams();
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [headerInfo, setHeaderInfo] = useState({});

    const [{ user }, dispatch] = useStateValue();

    


    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId)
            .onSnapshot(snapshot => (
            setHeaderInfo(
                {   roomName: snapshot.data().name,
                    imageUrl: snapshot.data().imageUrl,

                }
                )
            ))
        
        db.collection("rooms").doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) =>
                doc.data()
                ))
            )
        }
    }, [roomId])
 
    useEffect(() => {
        const objDiv = document.querySelector(".chat__body");
        objDiv.scrollTop = objDiv.scrollHeight;        
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();

        db.collection("rooms")
        .doc(roomId)
        .collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            name: user.displayName,
        })

        setInput("");
    }

    return (

        <div className="chat">
            <div className="chat__header">
                <Avatar src={headerInfo.imageUrl}/>

                <div className="chat__headerInfo">
                    <p>
                        {headerInfo.roomName}
                    </p>
                </div>

                <div className="chat__headerButtons">
                    <SearchRoundedIcon/>
                    <AttachFileIcon className="chat__headerButtonsRotate45"/>
                    <MoreVertIcon/>
                </div>

            </div>


            <div className="chat__body">
            <div className="bg"></div>
                <div className="chat__messages">
                    <FlipMove>
                   {
                    messages.map(message =>
                        <p className={`chat__message ${ user.displayName === message.name &&
                            'chat__receiver'}`}>
                                {message.message}
                        </p>
                    )
                    }
                    </FlipMove> 
                </div>
                
                

            </div>


            <div className="chat__footer">
                <EmojiEmotionsOutlinedIcon/>
                <form className="chat__footerInput">
                   <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text"></input>
                    <IconButton disabled={!input} type="submit" onClick={sendMessage}>
                        <SendIcon />                        
                    </IconButton>                 
                </form>
            </div>

        </div>
    )
}

export default Chat
