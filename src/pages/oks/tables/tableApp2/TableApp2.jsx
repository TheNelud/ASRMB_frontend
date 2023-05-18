import React from 'react'
import './style.css'


function TableApp2({title_table}) {
    let [items_p2, setItems_p2] = React.useState([])

    React.useEffect( () => {
        getItemsp2()
    }, [])

    let getItemsp2 = async () => {
        let response = await fetch('/oks/p2/api/')
            .then(response=>{
                if(!response.ok) throw new Error(`Ошибка: ${response.status}`)
                return response.json()
            })
            .then(data => console.log(data))
            .catch(error => console.error(error.message))
        let data = await response.json()
        setItems_p2(data)
    }

    return(

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
            {items_p2.map((item, key) => {
                 return(
                  <tr key={key}>
                      <td className='input-content'><input
                          onChange={(e) => {item['name'] = e.target.value}}
                          defaultValue={item.name}/>
                      </td>
                      <td className='input-content'><input
                          type='number'
                          className='js-mcc'
                          onChange={(e) => {item['molar_content_of_components'] = e.target.value}}
                          defaultValue={item.molar_content_of_components}/>
                      </td>
                      <td className='input-content'><input
                          type='number'
                          className='js-mmc'
                          onChange={(e) => {item['molar_mass_of_the_component'] = e.target.value}}
                          defaultValue={item.molar_mass_of_the_component}/>
                      </td>
                      <td className='input-content'><input
                          type='number'
                          className='js-tmm'
                          onChange={(e) => {item['total_molar_mass'] = e.target.value}}
                          defaultValue={item.total_molar_mass}/>
                      </td>
                      <td className='input-content'><input
                          type='number'
                          className='js-cm'
                          onChange={(e) => {item['chromatograph_mass'] = e.target.value}}
                          defaultValue={item.chromatograph_mass}/>
                      </td>
                      <td className='input-content'><input
                          type='number'
                          className='js-calcm'
                          onChange={(e) => {item['calculated_mass'] = e.target.value}}
                          defaultValue={item.calculated_mass}/>
                      </td>
                  </tr>)
            })}
                <tr>
                    <td className='input-content-footer' colSpan={6}><span> </span></td>
                </tr>
            </tbody>
        </table>

  )
}

export default TableApp2