import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP3 = () => {
    let [items_p3, setItems_p3] = React.useState([])

    let title_table = [
        '10С-1№3  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP3()
    }, [])

    let getItemsP3 = async () => {
        let response = await fetch('/oks/p3/get/')
        let data = await response.json()
        console.log(items_p3)
        setItems_p3(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p3.id} items={items_p3} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP3