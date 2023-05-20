import React from "react";
import './style.css'
import MenuComponent from "./menu_component/MenuComponent";

let TableMenu = ({count, setCount, setRow, setColunm, setTables}) => {

    let [isShowListMenu, setShowListMenu] = React.useState(false)
    let checkListMenu = () =>{setShowListMenu(!isShowListMenu);}

    return(
        <div className='position-table-menu'>
            <button className='style-btn-menu' onClick={checkListMenu}>Список таблиц</button>
            <MenuComponent
                isShowListMenu={isShowListMenu}
                count={count}
                setCount={setCount}
                setRow={setRow}
                setColunm={setColunm}
                setTables={setTables}
            />
        </div>
    )
}
export default TableMenu