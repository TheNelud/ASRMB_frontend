import React from "react";
import './style.css'

let ShowTable = ({row, column}) =>{

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
        console.log(row_matrix_body)
        for (let i=0; i< column; i++){
            column_matrix_body.push(<tr>{row_matrix_body}</tr>)
        }

        console.log(column_matrix_body)

        return column_matrix_body
    }

    return(
        <table>
            <thead>
                {showHead()}
            </thead>
            <tbody>
                {showBody()}
            </tbody>

        </table>
    )
}

export default ShowTable