import React from "react";
import './style.css'
import {ReactComponent as IconCreate} from "./accests/icon-create.svg";
import {ReactComponent as IconEdit} from "./accests/icon-edit.svg";
import {ReactComponent as IconDelete} from "./accests/icon-delete.svg";
import SettingCreateTable from "./create_table/SettingCreateTable";

let ContextMenu = ({key, count, isClickBtnTable,isColumn,isRow,setColumn,setRow}) =>{

    let [isClickCreate, setClickCreate] = React.useState(false)

    let onClickCreate = () =>{setClickCreate(!isClickCreate)}



    return (
        <div className={isClickBtnTable  ? 'show-context-menu' : 'hide-context-menu'} key={count}>
            <button key={count} className='style-btn-cntext-menu' onClick={onClickCreate}><IconCreate/></button>
            <button className='style-btn-cntext-menu'><IconEdit/></button>
            <button className='style-btn-cntext-menu'><IconDelete/></button>

            <SettingCreateTable
                key={count}
                count={count}
                isClickCreate={isClickCreate}
                isRow={isRow}
                isColumn={isColumn}
                setRow={setRow}
                setColumn={setColumn}
            />
        </div>
    )
}




export default ContextMenu
