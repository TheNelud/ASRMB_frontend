import React from "react";
import './style.css'
import TableSar from "../../components/raports/sar/TableSar";
import Dock from "../../components/dock/Dock";

const Sar = () => {
    let [items_sar_day, setItems_sar_day] = React.useState([])
    let [items_sar_month, setItems_sar_month] = React.useState([])

    React.useEffect(()=>{
        getItemsSar()
    },[])

    let getItemsSar = async () => {
        let response_day = await fetch('/raports/api/sar/day')
        let response_month = await fetch('/raports/api/sar/month')
        let data_day = await response_day.json()
        let data_month = await response_month.json()
        setItems_sar_day(data_day)
        setItems_sar_month(data_month)
    }

    let filterDate = async (date_update)=>{
        setItems_sar_day(items_sar_day = [])
        setItems_sar_month(items_sar_month = [])
        let response_day = await fetch('/raports/api/sar/day',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({'id':'filter_data' , date_update})
        })
        let response_month = await fetch('/raports/api/sar/month',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({'id':'filter_data' , date_update})
        })
        let data_day = await response_day.json()
        let data_month = await response_month.json()
        setItems_sar_day(data_day)
        setItems_sar_month(data_month)
    }

    let updateSar = async ()=>{
        fetch('/raports/api/sar/day',{
            method:'PUT',
            headers:{
            'Content-Type':'application/json'
            },body: JSON.stringify(items_sar_day)})
        fetch('/raports/api/sar/month',{
            method:'PUT',
            headers:{
            'Content-Type':'application/json'
            },body: JSON.stringify(items_sar_month)})
    }



    return(
        <div className="conteiner-content">

            <Dock click_filter={filterDate} click_save={updateSar} click_create={null} click_delete={null} />
            <TableSar items_sar_day={items_sar_day} items_sar_month={items_sar_month}/>

        </div>
    )
}
export default Sar