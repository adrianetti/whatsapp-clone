import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Sidebar.css';

function SidebarSearchBar() {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">    
                <SearchOutlinedIcon/>
                <input placeholder="Search or start new chat" type="text"/>
            </div>
        </div>
    )
}

export default SidebarSearchBar
