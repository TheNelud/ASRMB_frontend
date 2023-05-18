import React from "react";
import './style.css'
import ContextMenu from "./menu_context/ContextMenu";

let TbCompMenu = ({key, count}) =>{

    let [isClickBtnTable, setClickBtnTable] = React.useState(false)

    let onClickBntTable = () => {
        setClickBtnTable(!isClickBtnTable);
        console.log(isClickBtnTable)
    }
    let showContextMenu = () => {
        if (isClickBtnTable){
            return(
                <ContextMenu key={count}/>
            )
        }
    }


    return(
        <div key={key}>
            <button key={key} onClick={onClickBntTable} className='style-btn-component'>Component_{count}</button>
            {showContextMenu()}
        </div>

    )
}

export default TbCompMenu