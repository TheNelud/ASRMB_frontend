import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/dock/Dock";
// import './style.css';

const ContentP5 = () => {
    let [items_p5, setItems_p5] = React.useState([])

    let title_table = [
        '10С-1№5  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP5()
    }, [])

    let getItemsP5 = async () => {
        let response = await fetch('/oks/p5/get/')
        let data = await response.json()
        console.log(items_p5)
        setItems_p5(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p5.id} items={items_p5} title_table={title_table[0]}/>
            <Dock/>
        </div>
    )
}

export default ContentP5