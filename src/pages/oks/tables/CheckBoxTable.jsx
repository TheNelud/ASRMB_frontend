import './style.css'
import React from "react";
const CheckBoxTable = ({
    isClickBtnTableOks,isCheckBoxP1,isCheckBoxP2,isCheckBoxP3,isCheckBoxP4,isCheckBoxP5,
    isCheckBoxP6,isCheckBoxP7,isCheckBoxP8,isCheckBoxP9,isCheckBoxP10,
    checkBtnHendler,checkHandelerP1,checkHandelerP2,checkHandelerP3,checkHandelerP4,checkHandelerP5,
    checkHandelerP6,checkHandelerP7,checkHandelerP8,checkHandelerP9,checkHandelerP10
                       }) => {


    const showSelectCheckBox = () =>{
        if(isClickBtnTableOks){
            return(
                <div className='checkbox-group-oks'>
                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox-input" checked={isCheckBoxP1} onChange={checkHandelerP1} />
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 1</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP2} onChange={checkHandelerP2} />
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 2</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP3} onChange={checkHandelerP3} />
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 3</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP4} onChange={checkHandelerP4}  />
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 4</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP5} onChange={checkHandelerP5}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 5</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP6} onChange={checkHandelerP6}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 6</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP7} onChange={checkHandelerP7}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 7</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP8} onChange={checkHandelerP8}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 8</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP9} onChange={checkHandelerP9}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 9</span>
                        </span>
                    </label>
                </div>

                <div className="checkbox">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckBoxP10} onChange={checkHandelerP10}/>
                        <span className="checkbox-tile">
                            <span className="checkbox-label">Приложение 10</span>
                        </span>
                    </label>
                </div>
            </div>
            )
        }}

    return(

        <div className='select-modal-checkbox'>
            <button onClick={checkBtnHendler}>Таблицы</button>
            {showSelectCheckBox()}
        </div>

    )
}
export default CheckBoxTable