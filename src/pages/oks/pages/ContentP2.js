import React from 'react'
import TableItems from "../../../components/oks/TableItems";
// import './style.css';

const ContentP2 = () => {
    let [items_p2, setItems_p2] = React.useState([])

    let title_table = [
        '10С-1№2  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP2()
    }, [])

    let getItemsP2 = async () => {
        let response = await fetch('/oks/p2/get/')
        let data = await response.json()
        console.log(items_p2)
        setItems_p2(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p2.id} items={items_p2} title_table={title_table[0]}/>
        </div>
    )
}

export default ContentP2