import React from "react";
import './style.css'

import {ReactComponent as IconCreate} from "./assets/icon-create.svg";
import {ReactComponent as IconSave} from "./assets/icon-save.svg";
import {ReactComponent as IconEdit} from "./assets/icon-edit.svg";
import {ReactComponent as IconDelete} from "./assets/icon-delete.svg";
const Dock = ({ click_filter }) => {
    let [date, setDate] = React.useState()
    let onChangeDate = () =>{
        setDate( date =  document.getElementById("fetchDate").value)
        return date
    }

    return (
        <div className='dockpanel'>
            <input id='fetchDate' className='fetchDate' type='date' onChange={() => click_filter(onChangeDate())} ></input>
            <button className='btnFunc'><IconCreate/></button>
            <button className='btnFunc'><IconSave/></button>
            <button className='btnFunc'><IconEdit/></button>
            <button className='btnFunc'><IconDelete/></button>
        </div>
    )
}
export default Dock