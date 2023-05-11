import React from 'react'
import './style.css'
import Plotly from "../plotly/Plotly";

function TableItems({ items, title_table}) {

    let in_mcc = document.querySelectorAll('.js-mcc');
    let in_mmc = document.querySelectorAll('.js-mmc');
    let in_tmm = document.querySelectorAll('.js-tmm');
    let in_cm = document.querySelectorAll('.js-cm');
    let in_calcm = document.querySelectorAll('.js-calcm');

    // let [stateItem, setState] = React.useState(items)


    // React.useEffect(() => {
    //     for (let i=0; i<in_mcc.length-1; i++){
    //         in_mcc[i].addEventListener('input', function (){update_result()});
    //     }
    //     for (let i=0; i<in_mmc.length-1; i++){
    //         in_mmc[i].addEventListener('input', function (){update_result()});
    //     }
    //     for (let i=0; i<in_cm.length-1; i++){
    //         in_cm[i].addEventListener('input', function (){update_result()});
    //     }
    //     function update_result(){
    //         summa_mcc();
    //         summa_mmc();
    //         summa_cm();
    //         calculated_tmm();
    //         calculated_calc();
    //     }
    //
    //     function summa_mcc() {
    //     in_mcc[11].value = Number(in_mcc[0].value) + Number(in_mcc[1].value) + Number(in_mcc[2].value) + Number(in_mcc[3].value) + Number(in_mcc[4].value) + Number(in_mcc[5].value) + Number(in_mcc[6].value) + Number(in_mcc[7].value) + Number(in_mcc[8].value) + Number(in_mcc[9].value) + Number(in_mcc[10].value);
    // }
    //
    //     function summa_mmc() {
    //         in_mmc[11].value = Number(in_mmc[0].value) + Number(in_mmc[1].value) + Number(in_mmc[2].value) + Number(in_mmc[3].value) + Number(in_mmc[4].value) + Number(in_mmc[5].value) + Number(in_mmc[6].value) + Number(in_mmc[7].value) + Number(in_mmc[8].value) + Number(in_mmc[9].value) + Number(in_mmc[10].value);
    //     }
    //
    //     function summa_cm() {
    //         in_cm[11].value = Number(in_cm[0].value) + Number(in_cm[1].value) + Number(in_cm[2].value) + Number(in_cm[3].value) + Number(in_cm[4].value) + Number(in_cm[5].value) + Number(in_cm[6].value) + Number(in_cm[7].value) + Number(in_cm[8].value) + Number(in_cm[9].value) + Number(in_cm[10].value);
    //     }
    //
    //     function calculated_tmm(){
    //         for (let i=0; i<in_tmm.length-1; i++){
    //             in_tmm[i].value = (Number(in_mcc[i].value) * Number(in_mmc[i].value))/100;
    //         }
    //         in_tmm[11].value = Number(in_tmm[0].value) + Number(in_tmm[1].value) + Number(in_tmm[2].value) + Number(in_tmm[3].value) + Number(in_tmm[4].value) + Number(in_tmm[5].value) + Number(in_tmm[6].value) + Number(in_tmm[7].value) + Number(in_tmm[8].value) + Number(in_tmm[9].value) + Number(in_tmm[10].value);
    //         return in_tmm[11].value
    //     }
    //
    //     function calculated_calc (){
    //         for (let i=0; i<in_calcm.length-1; i++){
    //             in_calcm[i].value = Number(in_tmm[i].value)/ Number(in_tmm[11].value) * 100;
    //         }
    //         in_calcm[11].value = Number(in_calcm[0].value) + Number(in_calcm[1].value) + Number(in_calcm[2].value) + Number(in_calcm[3].value) + Number(in_calcm[4].value) + Number(in_calcm[5].value) + Number(in_calcm[6].value) + Number(in_calcm[7].value) + Number(in_calcm[8].value) + Number(in_calcm[9].value) + Number(in_calcm[10].value);
    //     }
    // })




    return(
        <div>
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
                {items.map((item, key) => {
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

            {/*<Plotly values={items}/>*/}

        </div>
  )
}

export default TableItems