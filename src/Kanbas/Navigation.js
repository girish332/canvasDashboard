import React from "react";
import "./Navigation.css"
import {DashboardIcon} from './Icons/DashboardIcon'
import {UserIcon} from './Icons/UserIcon'
import {UniversityIcon} from './Icons/UniversityIcon'
import {HelpIcon} from "./Icons/HelpIcon";
import {CalenderIcon} from "./Icons/CalenderIcon";
import {GroupIcon} from "./Icons/GroupIcon";
import {HistoryIcon} from "./Icons/HistoryIcon";
import { Link } from 'react-router-dom';
import {InboxIcon} from "./Icons/InboxIcon";
import {Routes} from "react-router";

const Element = ({title, icon}) => {
    return (
        <div className='elementContainer'>
            <div className="iconContainer">{icon}</div>
            <div className='titleContainer'>{title}</div>
        </div>
    )
}

export const Navigation = () => {
    return (
        <div className="navigationParent" >
            <Link to="/"><Element title='' icon={<UniversityIcon />}/></Link>
            <Link to="/Kanbas/Account"><Element title='Account' icon={<UserIcon />} /></Link>
            <Link to="/Kanbas/Dashboard"><Element title='Dashboard' icon={<UserIcon />} /></Link>
            <Link to="/Kanbas/Courses"><Element title='Courses' icon={<DashboardIcon />} /></Link>
            <Link to="/Kanbas/Groups"><Element title='Groups' icon={<GroupIcon />} /></Link>
            <Link to="/Kanbas/Calendar"><Element title='Calendar' icon={<CalenderIcon />} /></Link>
            <Link to="/Kanbas/Inbox"><Element title='Inbox' icon={<InboxIcon />} /></Link>
            <Link to="/Kanbas/History"><Element title='History' icon={<HistoryIcon />} /></Link>
            <Link to="/Kanbas/Help"><Element title='Help' icon={<HelpIcon />} /></Link>
        </div>
    );
}

