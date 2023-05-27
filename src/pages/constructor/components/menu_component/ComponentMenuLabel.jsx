import {BiGrid, BiHighlight} from "react-icons/bi";
import React from "react";

let ComponentMenuLabel = ({ count_label}) =>{
    return(
        <div key={count_label} id={`div-menu-${count_label}`}>
            <button key={count_label}  className='style-btn-component'><BiHighlight/>Label_{count_label}</button>
        </div>
    )
}
export default ComponentMenuLabel