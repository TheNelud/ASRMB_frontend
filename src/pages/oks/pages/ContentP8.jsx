import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/oks/dock/Dock";
// import './style.css';

const ContentP8 = () => {
    let [items_p8, setItems_p8] = React.useState([])

    let title_table = [
        '10С-1№8  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP8()
    }, [])

    let getItemsP8 = async () => {
        let response = await fetch('/oks/p8/get/')
        let data = await response.json()
        console.log(items_p8)
        setItems_p8(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p8.id} items={items_p8} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP8