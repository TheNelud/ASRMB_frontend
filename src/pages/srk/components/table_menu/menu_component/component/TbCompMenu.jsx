import React from "react";
import './style.css'
import ContextMenu from "./menu_context/ContextMenu";

let TbCompMenu = ({key, count, isRow, setRow, isColumn, setColumn }) =>{

    let [isClickBtnTable, setClickBtnTable] = React.useState(false)
    let onClickBntTable = () => {setClickBtnTable(!isClickBtnTable);}

    return(
        <div key={key} id={`div-menu-${count}`}>
            <button key={count} onClick={onClickBntTable} className='style-btn-component'>Component_{count}</button>
            <ContextMenu
                isClickBtnTable={isClickBtnTable}
                key={count}
                count={count}
                isRow={isRow}
                isColumn={isColumn}
                setRow={setRow}
                setColumn={setColumn}
            />
        </div>
    )
}

export default TbCompMenu