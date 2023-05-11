import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP6 = () => {
    let [items_p6, setItems_p6] = React.useState([])

    let title_table = [
        '10С-1№6  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP6()
    }, [])

    let getItemsP6 = async () => {
        let response = await fetch('/oks/p6/get/')
        let data = await response.json()
        console.log(items_p6)
        setItems_p6(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p6.id} items={items_p6} title_table={title_table[0]}/>
            {/*<Dock/>*/}
        </div>
    )
}

export default ContentP6