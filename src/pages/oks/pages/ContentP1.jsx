import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/oks/dock/Dock";


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
        setItems_p1(data)
    }

    let filterDate = async (date_filter)=>{

        fetch(`/oks/p1/get/`,{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({date_filter})
        })
    }

    return(

        <div className="conteiner-content">
            <TableItems key={items_p1.id} items={items_p1} title_table={title_table[0]}/>
            <Dock click_filter={filterDate}/>
        </div>
    )
}

export default ContentP1