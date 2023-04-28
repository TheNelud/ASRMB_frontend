import React from "react";
import './style.css'
import Clock from "../../components/clock/Clock";
import Tasks from "../../components/tasks/Tasks";
import CalendarM from "../../components/calendar/CalendarM";
import Personal from "../../components/personal/Personal";


const BaseContent = () => {

    return(
        <div className='base-content'>
            <Clock/>
            <Tasks/>
            <CalendarM/>
            <Personal/>
        </div>
    )
}

export default BaseContent