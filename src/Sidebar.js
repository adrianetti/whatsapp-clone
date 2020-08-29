import React from 'react'
import './Sidebar.css'
import SidebarHeader from './SidebarHeader'
import SidebarSearchBar from './SidebarSearchBar'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">

            {/* header */}
            <SidebarHeader/>

            {/* search-bar */}
            <SidebarSearchBar/>
            
            {/* chats */}
            <div className="sidebar__chats">
                <SidebarChat imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/250px-Elon_Musk_Royal_Society.jpg"/>
                <SidebarChat imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Gates_June_2015.png"/>
                <SidebarChat imageUrl="https://vignette.wikia.nocookie.net/half-life/images/6/62/Gaben.jpg/revision/latest/top-crop/width/360/height/360?cb=20200126040848&path-prefix=en"/>
            </div>
            


        </div>
    )
}

export default Sidebar
