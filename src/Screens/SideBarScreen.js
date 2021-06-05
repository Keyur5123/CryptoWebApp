import React from 'react'
import "./Css/SideBarScreen.css"
import SideBarOption from "./SideBarOption"
import HomeIcon from '@material-ui/icons/Home';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import InputIcon from '@material-ui/icons/Input';
import HistoryIcon from '@material-ui/icons/History';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core"

function SideBarScreen() {
    return (
        <div className="sidebar d-none d-sm-block">
            <div className="sidebar_header">
                <Avatar className="avatar"/>
                <SideBarOption  u_name="Keyur Pipaliya" />
            </div>
            {/* <br /> */}
            <hr />
            <div className="sidebar_body">
            <Link to="/Home" className="text-decoration-none text-muted">
                <SideBarOption Icon={HomeIcon} title="HOME"/>
            </Link>

            <Link to="/DashBoard" className="text-decoration-none text-muted">
                <SideBarOption Icon={DashboardRoundedIcon} title="DASH BOARD" />
            </Link>

            <Link to="/Deposite" className="text-decoration-none text-muted">
                <SideBarOption Icon={InputIcon} title="CASH IN"/>
            </Link>

            <Link to="/Withdraw" className="text-decoration-none text-muted">
                <SideBarOption Icon={HistoryIcon} title="CASHOUT HISTORY"/>
            </Link>
   
            <Link to="/Refferal" className="text-decoration-none text-muted">
                <SideBarOption Icon={PeopleAltIcon} title="REFERRALS"/>
            </Link>

            <Link to="/Setting" className="text-decoration-none text-muted">
                <SideBarOption Icon={SettingsRoundedIcon} title="SETTING"/>
            </Link>
            </div>

            <SideBarOption Icon={ExitToAppRoundedIcon} title="Log Out"/>
        </div>
    )
}

export default SideBarScreen
