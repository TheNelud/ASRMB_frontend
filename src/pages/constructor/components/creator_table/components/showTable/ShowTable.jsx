import React from "react";
import './style.css'
import ContextMenu from "../../../menu_context/ContextMenu";

let ShowTable = ({count, row, column}) =>{



    let row_matrix_head = []
    let column_matrix_head = []

    let row_matrix_body = []
    let column_matrix_body = []

    let showHead = ()=>{
        for (let j = 0; j < row; j++){
            row_matrix_head.push(<th><input type='text'></input></th>)
        }
        return row_matrix_head
    }


    let showBody = () =>{
        for (let j=0; j < row; j++){
            row_matrix_body.push(<td><input type='number'></input></td>)
            }

        for (let i=0; i< column; i++){
            column_matrix_body.push(<tr>{row_matrix_body}</tr>)
        }
        return column_matrix_body
    }


    return(
        <div>
            <table className='style-table-creator' key={count}>
                <thead>
                    <tr>Table_{count}</tr>
                    {showHead()}
                </thead>
                <tbody>
                    {showBody()}
                </tbody>
            </table>
        </div>



    )
}

export default ShowTable