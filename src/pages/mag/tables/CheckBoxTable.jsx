import React from "react";
import './style.scss'

const CheckBoxTable = ( {checkHandlerTech, isCheckedTech, checkHandlerBalance,
                        isCheckedBalance} ) => {


    return(

        <div className='checkbox-group'>
            <div className="checkbox">
                <label className="checkbox-wrapper">
                    <input type="checkbox" className="checkbox-input" checked={isCheckedBalance} onChange={checkHandlerBalance}/>
                    <span className="checkbox-tile">
				    <span className="checkbox-label">Материальный баланс</span>
			    </span>
                </label>
            </div>

            <div className="checkbox">
                <label className="checkbox-wrapper">
                    <input type="checkbox" id='checkTech' className="checkbox-input" checked={isCheckedTech} onChange={checkHandlerTech}/>
                    <span className="checkbox-tile">
				    <span className="checkbox-label">Датчиковое оборудование</span>
			    </span>
                </label>
            </div>
        </div>
    )

}
export default CheckBoxTable