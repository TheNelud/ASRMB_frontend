import React from "react";
import './style.css'
import sett from './assets/sett.png'
import CheckBoxTable from "./tables/CheckBoxTable";
import Tech from "./tables/tech/Tech";
import {ReactComponent as MagSVG} from "./assets/mag.svg";

const Mag = () => {
    const [isCheckedTech, setIsCheckedTech] = React.useState(false)
    React.useEffect(()=>{
        setIsCheckedTech(isCheckedTech)
    })
    const checkHandler = ()=>{
        setIsCheckedTech(!isCheckedTech)
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
            <CheckBoxTable  isCheckedTech={isCheckedTech} checkHandler={checkHandler}/>
            {()=>{
                if (isCheckedTech === true){
                    return (<Tech />)

                }
            }}





        </div>
    )

}

export default Mag