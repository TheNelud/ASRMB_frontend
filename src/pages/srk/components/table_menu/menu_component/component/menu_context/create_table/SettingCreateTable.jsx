import React from "react";
import './style.css'


let SettingCreateTable = ({count,isClickCreate, isRow, setRow, isColumn, setColumn}) =>{

    let [checkRow, setCheckRow] = React.useState(2)


    let onChangeRow=(event)=>{setCheckRow(event.target.value);setRow(checkRow); console.log(checkRow)}
    let onChangeColumn=(event)=>{setColumn(event.target.value);}

    let [isClickShowTamplates, setClickShowTamplates] = React.useState(false)
    let clickBtnShowTamplates = () =>{setClickShowTamplates(!isClickShowTamplates)}

    return(
        <div key={count} className={isClickCreate ? 'show-creator-table' : 'hide-creator-table'}>
            <label>Строки</label><input className='row-input' type='number' defaultValue={isRow}  onChange={onChangeRow}></input>
            <label>Столбцы</label><input className='colunm-input' type='number' defaultValue={isColumn}  onChange={onChangeColumn}></input>
            {/*<button onClick={clickBtnShowTamplates}>Показать</button>*/}
            {/*<CreatorTables isClickShowTamplates={isClickShowTamplates} isRow={isRow} isColunm={isColunm} />*/}
        </div>
    )
}
export default SettingCreateTable