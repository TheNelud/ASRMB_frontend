import React from "react";
import './style.css'
import { BiGrid } from "react-icons/bi";



let ComponentMenuTable = ({key, count}) =>{

    return(
        <div key={key} id={`div-menu-${count}`}>
            <button key={count}  className='style-btn-component'><BiGrid/> Table_{count}</button>
        </div>
    )
}

export default ComponentMenuTable