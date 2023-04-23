import React from 'react'
import TableItems from "../../../components/oks/table/TableItems";
import Dock from "../../../components/oks/dock/Dock";
// import TableDataSheet from "../../../components/oks/table/TableDataSheet";


const ContentP1 = () => {
    let [items_p1, setItems_p1] = React.useState([])

    let title_table = [
        '10Р-2№2 Протокол анализа №09-2021 PVT(К)',
    ]

    React.useEffect( () => {
        getItemsP1()
    }, [])

    let getItemsP1 = async () => {
        let response = await fetch('/oks/p1/api/')
        let data = await response.json()
        setItems_p1(data)
    }

    let filterDate = async (date_update)=>{
        setItems_p1(items_p1 = [])
        let response = await fetch(`/oks/p1/api/`,{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({'id':'filter_data' , date_update})
        })
        let data = await response.json()
        setItems_p1(data)

    }

    let createItemsP1 = async (date_filter) => {
        setItems_p1(items_p1 = [])
        let create_items_p1 = [
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
        await fetch(`/oks/p1/api/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': 'create_data', create_items_p1})
        })
        filterDate(date_filter)
        // setItems_p1(create_items_p1)

    }

    let updateItemsP1 = async () => {
        fetch(`/oks/p1/api/`, {
        method: "PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(items_p1)
      })
    }
    console.log(items_p1)
    return(

        <div className="conteiner-content">
            <TableItems key={items_p1.id} items={items_p1} setItems_p1={setItems_p1} title_table={title_table[0]} />
            <Dock click_filter={filterDate} click_save={updateItemsP1} click_create={createItemsP1}/>
        </div>
    )
}

export default ContentP1

Array(0)
