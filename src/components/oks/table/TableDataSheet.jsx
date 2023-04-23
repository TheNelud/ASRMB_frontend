import React from "react";
import './style-td.css'
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

function TableDataSheet (){
    const grid = [
        [{ value: 1 }, { value: 3 }, { value: 5 }, { value: 6 }],
        [{ value: 2 }, { value: 4 }],
]

    const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => console.log("New expression :" + value))

    return (
        <div className='table-content'>
            <ReactDataSheet
              data={grid}
              valueRenderer={(cell, i, j) => j == 4 ? cell.value.toDateString() : cell.value}
              dataRenderer={(cell, i, j) => j == 2 ? cell.value.toISOString() : cell.expr}
              onCellsChanged={onCellsChanged}
            />
        </div>
    )

}

export default TableDataSheet