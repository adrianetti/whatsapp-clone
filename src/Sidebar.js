import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarHeader from './SidebarHeader'
import SidebarSearchBar from './SidebarSearchBar'
import SidebarChat from './SidebarChat'
import db from './firebase'

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                name: doc.data().name,
                imageUrl: doc.data().imageUrl,
                id: doc.id})))
        });

        return () => {
            unsubscribe();
        }
    }, []);

    console.log(rooms)


    return (
        <div className="sidebar">

            {/* header */}
            <SidebarHeader/>

            {/* search-bar */}
            <SidebarSearchBar/>
            
            {/* chats */}
            <div className="sidebar__chats">
                {
                    rooms.map(room => (
                        <SidebarChat name={room.name} imageUrl={room.imageUrl} id={room.id}/>
                    ))
                }
            </div>
            


        </div>
    )
}

export default Sidebar
