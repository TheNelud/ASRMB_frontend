import {BiBarChart, BiGrid, BiHighlight} from "react-icons/bi";
import React from "react";
import ComponentMenuTable from "./components/menu_component/ComponentMenuTable";
import ComponentMenuLabel from "./components/menu_component/ComponentMenuLabel";
import ComponentMenuChart from "./components/menu_component/ComponentMenuChart";
import ComponentTable from "./components/creator_table/ComponentTable";

import './style.css'
import ComponentLabel from "./components/creator_label/ComponentLabel";


let Constructor = () =>{

    let [count, setCount] = React.useState(1); // порядковый номер таблицы
    let [count_label, setCountLabel] = React.useState(1)// порядковый номер строк
    let [count_chart, setCountChart] = React.useState(1)// порядковый номер графика

    // MenuComponent
    let [isMenuComponents, setMenuComponents] = React.useState([])
    let arr_menu_full = Object.assign([], isMenuComponents)

    // TableContent
    let [isTableComponents, setTableComponents] =React.useState([])
    let arr_table = Object.assign([], isTableComponents);

    // LableContent
    let [isLabelComponents, setLabelComponents] =React.useState([])
    let arr_label = Object.assign([], isLabelComponents);

    let onClickAddTable = () => {
        console.log('CLICK BUTTON ADD TABLE')
        // arr_menu_table.push(component_table_menu)
        arr_menu_full.push(component_table_menu)
        arr_table.push(component_table)
        setTableComponents(arr_table)
        setMenuComponents(arr_menu_full)
        setCount(count+1)
    }
    let onClickAddLabel = ()=>{
        console.log('CLICK BUTTON ADD LABEL')
        arr_menu_full.push(component_label_menu)
        arr_label.push(component_label)
        setMenuComponents(arr_menu_full)
        setLabelComponents(arr_label)
        setCountLabel(count_label+1)
    }

    let onClickAddChart = () =>{
        console.log('CLICK BUTTON ADD Chart')
        arr_menu_full.push(component_chart_menu)
        setMenuComponents(arr_menu_full)
        setCountChart(count_chart+1)
    }

    let component_table_menu = <ComponentMenuTable key={`component_${count}`} count={count} />
    let component_label_menu = <ComponentMenuLabel count_label={count_label}/>
    let component_chart_menu = <ComponentMenuChart count_chart={count_chart}/>

    let component_table =<ComponentTable key={`component_${count}`} count={count} />
    let component_label = <ComponentLabel ket={`label+${count_label}`} count_label={count_label}/>

    return (
        <div>
            <div className='style-menu-zone-components'>
                <button className='button-list-menu-component' >Список элементов</button>

                <div>
                    <button className='style-btn-add-menu-table' onClick={onClickAddTable}><BiGrid/></button>
                    <button className='style-btn-add-menu-table' onClick={onClickAddLabel}><BiHighlight/></button>
                    <button className='style-btn-add-menu-table' onClick={onClickAddChart}><BiBarChart/></button>
                </div>

                <hr/>
                <div className='style-menu-component-table'>
                    {isMenuComponents}
                </div>
                <hr/>


            </div>


            <div className='style-table-zone-components'>

                <div className='dotted'>
                    {isTableComponents}
                    {isLabelComponents}
                </div>


            </div>
        </div>
    )
}

export default Constructor