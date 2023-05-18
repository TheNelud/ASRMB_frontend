import React from "react";
import './style.css'
import {ReactComponent as IconCreate} from "./accests/icon-create.svg";
import {ReactComponent as IconEdit} from "./accests/icon-edit.svg";
import {ReactComponent as IconDelete} from "./accests/icon-delete.svg";

let ContextMenu = ({key}) =>{

    let onClickCreate = () =>{
        console.log('Tap button')
        return(
            <div key={key}>New Table</div>
        )
    }

    return (
        <div key={key}>
            <button onClick={onClickCreate}><IconCreate/></button>
            <button><IconEdit/></button>
            <button><IconDelete/></button>
        </div>
    )
}




export default ContextMenu
