import React from 'react'
import './style.css'
// import {Link} from 'react-router-dom'
function TableItems({ key, items, title_table}) {
    return (
          <table className='table-content'>
                <thead>
                    <tr>
                      <th className="table_content_th_header" colSpan="6">Определение компонентного состава конденсата
                          нестабильного
                      </th>
                    </tr>
                    <tr>
                      <th className="table_content_th" colSpan="6">{title_table}</th>
                    </tr>
                    <tr>
                      <th className="table_content_th">Наименование</th>
                      <th className="table_content_th">Мольное содержание компонентов, %</th>
                      <th className="table_content_th">Молярная масса компонента</th>
                      <th className="table_content_th">Молярная масса общая, гр/моль</th>
                      <th className="table_content_th">Масс, % (хрома-тограф)</th>
                      <th className="table_content_th">Масс, % (расчетная)</th>
                    </tr>
                    </thead>
                    <tbody>

                    {items.map((item, index) => {
                         return(
                          <tr key={index}>
                              <td className='input-content'><input defaultValue={item.name}/></td>
                              <td className='input-content'><input defaultValue={item.molar_content_of_components}/></td>
                              <td className='input-content'><input defaultValue={item.molar_mass_of_the_component}/></td>
                              <td className='input-content'><input defaultValue={item.total_molar_mass}/></td>
                              <td className='input-content'><input defaultValue={item.chromatograph_mass}/></td>
                              <td className='input-content'><input defaultValue={item.calculated_mass}/></td>
                          </tr>)
                    })}
                        <tr>
                            <td className='input-content-footer' colSpan={6}><span> </span></td>
                        </tr>
                    </tbody>
          </table>
        
      
    
    
  )
}

export default TableItems