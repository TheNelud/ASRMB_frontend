import React from "react";
import './style.css'

import {ReactComponent as IconCreate} from "./assets/icon-create.svg";
import {ReactComponent as IconSave} from "./assets/icon-save.svg";
import {ReactComponent as IconDelete} from "./assets/icon-delete.svg";

const Dock = ({ click_filter, click_save, click_create, click_delete}) => {
    console.log(new Date())
    let [date, setDate] = React.useState(new Date())
    let onChangeDate = () =>{
        setDate( date =  document.getElementById("fetchDate").value)
        return date
    }

    const today = () =>{
        let today_in = new Date()
        let dd = today_in.getDate();
        let mm = today_in.getMonth() + 1;
        let yyyy = today_in.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd
    }

    console.log(today())

    return (
        <div className='dockpanel'>
            <input id='fetchDate'
                   className='fetchDate'
                   type='date'
                   onChange={() => click_filter(onChangeDate())}
                   defaultValue={today()}>
            </input>
            <button className='btnFunc' onClick={() => click_create(date)}><IconCreate/></button>
            <button className='btnFunc' onClick={click_save}><IconSave/></button>
            <button className='btnFunc' onClick={() => click_delete(date)}><IconDelete/></button>
        </div>
    )
}
export default Dock