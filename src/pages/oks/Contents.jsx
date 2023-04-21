import React from 'react'
import TableItems from "../../components/oks/TableItems";
import './style.css';

const Contents = () => {
    let [items_p1, setItems_p1] = React.useState([])
    let [items_p2, setItems_p2] = React.useState([])

    let title_table = [
        '10Р-2№2 Протокол анализа №09-2021 PVT(К)',
        '10С-1№2  протокол № 05 - PVT(Г) от',
    ]

    React.useEffect( () => {
        getItemsP1()
        getItemsP2()
    }, [])

    let getItemsP1 = async () => {
        let response = await fetch('/oks/p1/get/')
        let data = await response.json()
        console.log(items_p1)
        setItems_p1(data)
    }

    let getItemsP2 = async () => {
        let response = await fetch('/oks/p2/get/')
        let data = await response.json()
        console.log(items_p2)
        setItems_p2(data)
    }


    return(

        <div className="conteiner-content">
            <TableItems key={items_p1.id} items={items_p1} title_table={title_table[0]}/>
            <TableItems key={items_p2.id} items={items_p2} title_table={title_table[1]}/>
        </div>
    )
}

export default Contents