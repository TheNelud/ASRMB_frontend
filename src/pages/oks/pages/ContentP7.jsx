import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP7 = () => {
    let [items_p7, setItems_p7] = React.useState([])

    let title_table = [
        '10С-1№7  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP7()
    }, [])

    let getItemsP7 = async () => {
        let response = await fetch('/oks/p7/get/')
        let data = await response.json()
        console.log(items_p7)
        setItems_p7(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p7.id} items={items_p7} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP7