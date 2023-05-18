import React from "react";
import './style.css'
import MenuComponent from "./menu_component/MenuComponent";

let TableMenu = () => {

    let [isShowListMenu, setShowListMenu] = React.useState(false)
    let [isContentListMenu, setContentListMenu] = React.useState({})

    let checkListMenu = () =>{setShowListMenu(!isShowListMenu);}

    let showContentMenu = () =>{
        if (isShowListMenu){
            return(
                <MenuComponent/>
            )
        }
    }


    return(
        <div className='position-table-menu'>
            <button className='style-btn-menu' onClick={checkListMenu}>Список таблиц</button>

            {showContentMenu()}

        </div>
    )
}
export default TableMenu