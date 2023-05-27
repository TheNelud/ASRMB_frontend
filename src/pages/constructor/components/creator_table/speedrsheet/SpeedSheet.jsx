import React from "react";
import Spreadsheet from "react-spreadsheet";


let SpeedSheet = ({key, isRow, isColumn}) =>{

    let [isDataTemp, setDataTemp] = React.useState([])

    let row_matrix_body = []
    let column_matrix_body = []

    let showColumn =()=>{
        for (let i=0; i < isColumn; i++){
            column_matrix_body.push({value:" "})
        }
        return column_matrix_body
    }

    let showRow =()=>{
        for (let i=0; i<isRow; i++){
        row_matrix_body.push(showColumn())
        }
        return row_matrix_body
    }


    const [data, setData] = React.useState([{value:""}]);

    // React.useEffect(()=>{
    //     setData(showRow)
    // },[])

    console.log(data)

    return (

        <Spreadsheet
            key={key}
            data={data}
            onChange={setData}

        />

    )
}

export default SpeedSheet