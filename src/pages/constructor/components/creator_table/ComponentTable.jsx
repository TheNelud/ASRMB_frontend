import React from "react";
import Draggable from "react-draggable";
import Table from "./spreadsheet-component/Table";

import {ContextMenu, ContextMenuTrigger, MenuItem} from "react-contextmenu";
import {RiDeleteBin6Line} from "react-icons/ri";




let ComponentTable = ({ count }) =>{

    let [isPosition, setPosition] = React.useState([0,0])
    let handleStop = (event, dragElement) => {setPosition([dragElement.x, dragElement.y]);}

    let[isRow, setRow] = React.useState(2)
    let[isCell, setCell] = React.useState(2)

    let onChangeRow=(event)=>{setRow(event.target.value)}
    let onChangeCell=(event)=>{setCell(event.target.value)}

    let [showContextMenu, setShowContextMenu] = React.useState(false)


    let onContextMenu = (event) => {
        event.preventDefault();
        console.log(`CLick context menu x:${event.clientX}, y: ${event.clientY}`)
        setShowContextMenu(!showContextMenu)
    }


    return(
        <div >

                <Draggable onStop={handleStop} position={{x:isPosition[0],y:isPosition[1]}}>
                    <div onContextMenu={onContextMenu} className='style-creator-tables' style={{position:'absolute'}}>
                        <label>Table_{count}</label>
                        <Table x={Number(isCell)} y={Number(isRow)} id={count} />
                    </div>
                </Draggable>



             <div className={showContextMenu ? 'show-context-menu' : 'hide-context-menu'} >

                 <div className='style-setting-table'>
                   <table className='component-setting-table'>
                       <tr><label>Table_{count}</label></tr>
                       <tr>
                        <td><label>Строки</label></td>
                        <td><label>Столбцы</label></td>
                       </tr>
                        <tr>
                            <td><input className='row-input' type='number' defaultValue={isRow}  onChange={onChangeRow}></input></td>
                            <td><input className='colunm-input' type='number' defaultValue={isCell}  onChange={onChangeCell}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className='style-button-save' >Сохранить таблицу</button></td>
                        </tr>
                   </table>
                </div>

            </div>

        </div>

    )
}
export default ComponentTable