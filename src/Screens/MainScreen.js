import React from 'react'
import SideBarScreen from "./SideBarScreen"
import HomeScreen from "./HomeScreen"
import "./Css/MainScreen.css"

function MainScreen() {
    return (
           <div className="Screen__main">
                <SideBarScreen />   
                <HomeScreen />  
            </div> 
    )
}

export default MainScreen;

