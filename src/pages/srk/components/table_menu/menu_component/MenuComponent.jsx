import React from 'react'
import './style.css'
import TbCompMenu from "./component/TbCompMenu";



let MenuComponent = () =>{

    const [count, setCount] = React.useState(0);
    const [isMenuComponents, setMenuComponents] =React.useState([])
    let arr = Object.assign([], isMenuComponents);

    let component = <TbCompMenu key={count} count={count}/>

    let onClickAddComponent = () => {
        setCount(count+1)
        arr.push(component)
        setMenuComponents(arr)
        console.log(isMenuComponents)
    }



    return (
        <div>
            <div className='style-menu-component'>
                {isMenuComponents}
            </div>
            <button className='style-btn-add-menu-table' onClick={onClickAddComponent}>+</button>
        </div>
    )
}
export default MenuComponent