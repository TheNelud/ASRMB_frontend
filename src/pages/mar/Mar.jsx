import React from "react";
import './style.css'
import TableMar from "../../components/raports/mar/TableMar";

const Mar = () => {
    let [items_mar, setItems_mar] = React.useState([])

    React.useEffect(()=>{
        getItemsMar()
    },[])

    let getItemsMar = async () => {
        let response = await fetch('/raports/api/mar')
        let data = await response.json()
        setItems_mar(data)
    }
    console.log(items_mar)
  return(
      <div className="conteiner-content">
          <TableMar items_mar={items_mar} />
      </div>
  )
}

export default Mar