import React from "react";
import './style.css'

import {ReactComponent as IconCreate} from "./assets/icon-create.svg";
import {ReactComponent as IconSave} from "./assets/icon-save.svg";
// import {ReactComponent as IconEdit} from "./assets/icon-edit.svg";
import {ReactComponent as IconDelete} from "./assets/icon-delete.svg";
const Dock = ({ click_filter, click_save, click_create}) => {
    let [date, setDate] = React.useState(new Date())
    let onChangeDate = () =>{
        setDate( date =  document.getElementById("fetchDate").value)
        return date
    }

    return (
        <div className='dockpanel'>
            <input id='fetchDate' className='fetchDate' type='date' onChange={() => click_filter(onChangeDate())} ></input>
            <button className='btnFunc' onClick={() => click_create(date)}><IconCreate/></button>
            <button className='btnFunc' onClick={click_save}><IconSave/></button>
            {/*<button className='btnFunc'><IconEdit/></button>*/}
            <button className='btnFunc'><IconDelete/></button>
        </div>
    )
}
export default Dock