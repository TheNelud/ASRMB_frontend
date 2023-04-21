import React from 'react'
import './style.css'


const Clock = () => {

    const [date, setDate] = React.useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  React.useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span id='timedate'>
      {date.toLocaleTimeString()}
    </span>
  );
}
 
export default Clock;