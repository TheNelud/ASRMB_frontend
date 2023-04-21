import React from 'react'
import Calendar from "react-calendar";
import './style.css'


const CalendarM = () => {
    const [value, onChange] = React.useState(new Date());
  return (
      <div id='calendar'>
          <Calendar onChange={onChange} value={value} />
      </div>
  );
}

export default CalendarM;