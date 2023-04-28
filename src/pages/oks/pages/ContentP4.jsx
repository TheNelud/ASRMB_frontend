import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP4 = () => {
    let [items_p4, setItems_p4] = React.useState([])

    let title_table = [
        '10С-1№4  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP4()
    }, [])

    let getItemsP4 = async () => {
        let response = await fetch('/oks/p4/get/')
        let data = await response.json()
        console.log(items_p4)
        setItems_p4(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p4.id} items={items_p4} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP4