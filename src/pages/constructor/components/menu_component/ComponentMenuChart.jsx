import {BiBarChart} from "react-icons/bi";
import React from "react";

let ComponentMenuChart = ({ count_chart}) =>{
    return(
        <div key={count_chart} id={`div-menu-${count_chart}`}>
            <button key={count_chart}  className='style-btn-component'><BiBarChart/>Chart_{count_chart}</button>
        </div>
    )
}
export default ComponentMenuChart