import React from 'react'
import './style.css'
import TbCompMenu from "./component/TbCompMenu";
import CreatorTables from "../../creator_table/CreatorTables";

let MenuComponent = ({isShowListMenu, count, setCount, setTables}) => {

    let [isMenuComponents, setMenuComponents] =React.useState([])
    let arr_menu = Object.assign([], isMenuComponents);
    let [isTableComponents, setTableComponents] =React.useState([])
    let arr_table = Object.assign([], isTableComponents);

    let[isRow, setRow] = React.useState(2)
    let[isColumn, setColumn] = React.useState(2)



    let component_menu = <TbCompMenu
        key={`table_menu_${count}`}
        count={count}
        isShowListMenu={isShowListMenu}
        isRow={isRow}
        isColumn={isColumn}
        setRow={setRow}
        setColumn={setColumn}
    />


    let component_table = <CreatorTables
        key={`table_${count}`}
        count={count}
        isRow={isRow}
        isColumn={isColumn}
    />


    let onClickAddComponent = () => {
        arr_menu.push(component_menu)
        arr_table.push(component_table)
        setMenuComponents(arr_menu)
        setTableComponents(arr_table)

        console.log(isMenuComponents)
        console.log(isTableComponents)

        setTables(arr_table)
        setCount(count+1)
    }



    return (
        <div className={isShowListMenu ? 'show-menu' : 'hide-menu'}>
            <div className='style-menu-component'>
                {isMenuComponents}
                {/*{isTableComponents}*/}
            </div>
            <button className='style-btn-add-menu-table' onClick={onClickAddComponent}>+</button>
        </div>
    )
}
export default MenuComponent