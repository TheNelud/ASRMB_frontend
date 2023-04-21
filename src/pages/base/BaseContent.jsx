import React from "react";
import './style.css'
import Clock from "../../components/clock/Clock";
import Tasks from "../../components/tasks/Tasks";
import CalendarM from "../../components/calendar/CalendarM";


const BaseContent = () => {

    return(
        <div className='base-content'>
            <Clock/>
            <Tasks/>
            <CalendarM/>
        </div>
    )
}

export default BaseContent