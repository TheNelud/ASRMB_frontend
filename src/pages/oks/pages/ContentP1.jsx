import React from 'react'
import TableItems from "../../../components/oks/TableItems";
// import './style.css';

const ContentP1 = () => {
    let [items_p1, setItems_p1] = React.useState([])

    let title_table = [
        '10Р-2№2 Протокол анализа №09-2021 PVT(К)',
    ]

    React.useEffect( () => {
        getItemsP1()
    }, [])

    let getItemsP1 = async () => {
        let response = await fetch('/oks/p1/get/')
        let data = await response.json()
        console.log(items_p1)
        setItems_p1(data)
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p1.id} items={items_p1} title_table={title_table[0]}/>
        </div>
    )
}

export default ContentP1