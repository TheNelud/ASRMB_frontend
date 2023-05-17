import React from 'react'
// import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP9 = () => {
    let [items_p9, setItems_p9] = React.useState([])

    let title_table = [
        '10С-1№9  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP9()
    }, [])

    let getItemsP9 = async () => {
        let response = await fetch('/oks/p9/get/')
        let data = await response.json()
        console.log(items_p9)
        setItems_p9(data)
    }

    return(

        <div className="conteiner-content">
            {/*<TableItems key={items_p9.id} items={items_p9} title_table={title_table[0]}/>*/}
            {/*<Dock/>*/}
        </div>
    )
}

export default ContentP9