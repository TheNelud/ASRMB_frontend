import React from "react";
import './style.css'
import ShowTable from "./components/showTable/ShowTable";

let CreatorTables = () =>{
    let [isRow, setRow] = React.useState(0)
    let [isColunm, setColunm] = React.useState(0)

    let onChangeRow=(event)=>{setRow(event.target.value);}
    let onChangeColumn=(event)=>{setColunm(event.target.value);}

    return(
        <div className='style-creator-tables'>
            <label>Столбцы</label><input className='row-input' type='number' value={isRow} onChange={onChangeRow}></input>
            <label>Строки</label><input className='colunm-input' type='number' value={isColunm} onChange={onChangeColumn}></input>


            <ShowTable row={isRow} column={isColunm}/>
        </div>
    )
}

export default CreatorTables