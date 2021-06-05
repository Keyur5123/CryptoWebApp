import React from 'react'
import "./Css/SideBarOption.css"

function SideBarOption({ u_name,title,Icon}) {
    return (
        <div>
            <div className="sidebar__uname">
                <h4>{u_name}</h4>
            </div>
            <div className="sidebar__option">
                {Icon && <Icon className="sidebar__icon" />}
                {Icon ? <h6>{title}</h6> : null}
            </div>
        </div>
    )
}

export default SideBarOption
