import React from "react";
import './style.css'
import sett from './assets/sett.png'
import {ReactComponent as MagSVG} from "./assets/mag.svg";
import CheckBoxTable from "./tables/CheckBoxTable";
import Balance from "./tables/balance/Balance";
import Tech from "./tables/tech/Tech";

const Mag = () => {
    const [isCheckedTech, setIsCheckedTech] = React.useState(false)
    const [isCheckedBalance, setIsCheckedBalance] = React.useState(false)

    React.useEffect(()=>{
        setIsCheckedTech(isCheckedTech)
    })
    const checkHandlerTech = ()=>{
        setIsCheckedTech(!isCheckedTech)
        console.log(isCheckedTech)
    }

    const tableTech = ()=>{
        if (isCheckedTech === true){
            return (<Tech/>)
        }
    }

    const checkHandlerBalance = ()=>{
        setIsCheckedBalance(!isCheckedBalance)
        console.log(isCheckedBalance)
    }

    const tableBalance = ()=>{
        if (isCheckedBalance === true){
            return (<Balance/>)
        }
    }

    return(
        <div>

            <div className='mnemo-shema-mag'>
                <div className='title-mnemo-shema-mag'>Общая схема материального баланса МЭГ</div>
                <MagSVG/>

            </div>
            <div className='sett-mnemo-shema-mag'>
                <img className='img-sett' src={sett} />
            </div>
            <CheckBoxTable  isCheckedTech={isCheckedTech} checkHandlerTech={checkHandlerTech} checkHandlerBalance={checkHandlerBalance} isCheckedBalance={isCheckedBalance}/>

            {tableTech()}
            {tableBalance()}




        </div>
    )

}

export default Mag