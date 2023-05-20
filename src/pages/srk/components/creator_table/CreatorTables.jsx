import React from "react";
import Draggable from 'react-draggable';
import SpeedSheet from "./speedrsheet/SpeedSheet";
import './style.css'




let CreatorTables = ({key,count, isRow, isColumn}) =>{

    let [isPosition, setPosition] = React.useState([100,100])
    let handleStop = (event, dragElement) => {setPosition([dragElement.x, dragElement.y]);}

    return(
        <div key={count} id={`div-table-${count}`}>
            <Draggable onStop={handleStop} position={{x:isPosition[0],y:isPosition[1]}}>
                <div className='style-creator-tables'>
                    <SpeedSheet  key={count} row={isRow} column={isColumn}/>
                </div>
            </Draggable>
        </div>

    )
}

export default CreatorTables