import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP10 = () => {
    let [items_p10, setItems_p10] = React.useState([])

    let title_table = [
        '10С-1№10  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP10()
    }, [])

    let getItemsP10 = async () => {
        let response = await fetch('/oks/p10/get/')
        let data = await response.json()
        console.log(items_p10)
        setItems_p10(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p10.id} items={items_p10} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP10