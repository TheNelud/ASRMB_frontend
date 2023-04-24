import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/oks/dock/Dock";
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
        let response = await fetch('/oks/p2/api/')
        let data = await response.json()
        setItems_p2(data)
    }
    let filterDate = async (date_update)=>{
        setItems_p2(items_p2 = [])
        let response = await fetch(`/oks/p2/api/`,{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({'id':'filter_data' , date_update})
        })
        let data = await response.json()
        setItems_p2(data)
    }

    let createItemsP2 = async (date_filter) => {
        setItems_p2(items_p2 = [])
        let create_items_p2 = [
            {"name":"C1", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"C2", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"C3", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"i-C4", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"n-C4", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"i-C5", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"n-C5", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"C6+", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"N2", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"CO2", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"O2", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
            {"name":"Сумма", "molar_content_of_components": 0,"molar_mass_of_the_component": 0,"total_molar_mass": 0,"chromatograph_mass":0, "calculated_mass":0, "date_create":date_filter, 'date_update': date_filter},
        ]
        await fetch(`/oks/p2/api/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': 'create_data', create_items_p2})
        })
        await filterDate(date_filter)
    }

    let updateItemsP2 = async () => {
        fetch(`/oks/p2/api/`, {
        method: "PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(items_p2)
      })
    }

    let deleteItemsP2 = async (date_filter) => {
        fetch(`/oks/p2/api/`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items_p2)
        })
        await filterDate(date_filter)
    }
    return(

        <div className="conteiner-content">
            <TableItems key={items_p2.id} items={items_p2} setItems_p1={setItems_p2} title_table={title_table[0]}/>
            <Dock click_filter={filterDate} click_save={updateItemsP2} click_create={createItemsP2} click_delete={deleteItemsP2}/>
        </div>
    )
}

export default ContentP2