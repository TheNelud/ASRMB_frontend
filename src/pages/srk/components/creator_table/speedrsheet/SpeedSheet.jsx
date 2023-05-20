import React from "react";
import Spreadsheet from "react-spreadsheet";


let SpeedSheet = ({key, row, column}) =>{

    let [isDataTemp, setDataTemp] = React.useState([])

    let row_matrix_body = []
    let column_matrix_body = []


    for (let i=0; i < column; i++){
        column_matrix_body.push({value:" "})
    }


    for (let i=0; i<row; i++){
        row_matrix_body.push(column_matrix_body)

    }

    const [data, setData] = React.useState(row_matrix_body);


    return (

        <Spreadsheet
            key={key}
            data={data}
            onChange={setData}

        />

    )
}

export default SpeedSheet