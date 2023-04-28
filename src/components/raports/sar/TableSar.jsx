import React from "react";
import './style.css'

const TableSar = ({items_sar_day, items_sar_month}) => {

    return(
        <table className='table-content-sar'>
        <thead>
            <tr>
                <th className="table_content_th_header_left">№п/п</th>
                <th className="table_content_th_header_right" colSpan='4'>Форма №1</th>
            </tr>
                <tr className="table_content_th">
                <th className="table_content_th"></th>
                <th className="table_content_th" colSpan='4'>Cуточной рапорт УКПГ Киринского ГКМ</th>
            </tr>
            <tr>
                <th className="table_content_th"></th>
                <th className="table_content_th">Дата: </th>
                <th className="table_content_th">Ед.изм.</th>
                <th className="table_content_th">за сутки</th>
                <th className="table_content_th">за месяц</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th className="table_content_th" ></th>
                <th className="table_content_th" colSpan='4'>Газ горючий природный</th>
            </tr>
            <tr>
                <td className='table-content-td'>1</td>
                <td className='table-content-td'>Добыча ГГП</td>
                <td className='table-content-td'>тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_1'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_1}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_101'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_101}/></td>)
                })}

            </tr>
            <tr>
                <td className='table-content-td'>2</td>
                <td className='table-content-td'>Газ горючий природный, магистральный газопровод УКУГ</td>
                <td className='table-content-td'>тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_2'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_2}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_102'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_102}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >3</td>
                <td className='table-content-td' >Газ СН из добытых ресурсов *</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_3'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_3}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_103'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_103}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >4</td>
                <td className='table-content-td' >Газ СН из ресурсов, полученных обратным ходом на УКУГ **</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_4'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_4}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_104'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_104}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >5</td>
                <td className='table-content-td' >Потери газа при добыче</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_5'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_5}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_105'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_105}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >6</td>
                <td className='table-content-td' >Газ стабилищации в МГ после КУ</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_6'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_6}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_106'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_106}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >7</td>
                <td className='table-content-td' >Потери газа стабилизации при переработке</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_7'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_7}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_107'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_107}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >8</td>
                <td className='table-content-td' >Газ стабилизации в факельную систему</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_8'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_8}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_108'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_108}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >9</td>
                <td className='table-content-td' >Потери газа при проведении ремонтных работ на МГ ***</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_9'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_9}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_109'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_109}/></td>)
                })}
            </tr>
            <tr>
                <th className="table_content_th" ></th>
                <th className="table_content_th" colSpan='4'>Конденсат газовый</th>
            </tr>
            <tr>
                <td className='table-content-td' >10</td>
                <td className='table-content-td' >Добыча КГН</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_10'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_10}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_110'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_110}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >11</td>
                <td className='table-content-td' >Потери КГН при добыче</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_11'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_11}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_111'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_111}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >12</td>
                <td className='table-content-td' >Возврат КГН в переработку из 10Е3 в 10Р-2</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_12'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_12}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_112'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_112}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >13</td>
                <td className='table-content-td' >Производство КГС</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_13'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_13}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_113'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_113}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >14</td>
                <td className='table-content-td' >Потери КГН при переработке</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_14'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_14}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_114'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_114}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >15</td>
                <td className='table-content-td' >Переход КГН в другой вид продукции (Газ стабилизации)</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_15'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_15}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_115'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_115}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >16</td>
                <td className='table-content-td' >КГС переданный в СЭИК</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_16'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_16}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_116'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_116}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >17</td>
                <td className='table-content-td' >КГС в 50Р-1 №1</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_17'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_17}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_117'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_117}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >18</td>
                <td className='table-content-td' >КГС в 50Р-1 №2</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_18'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_18}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_118'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_118}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >19</td>
                <td className='table-content-td' >Возврат КГС из ВТК в 10Р-2 ***</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_19'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_19}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_119'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_119}/></td>)
                })}
            </tr>
            <tr>
                <td className='table-content-td' >20</td>
                <td className='table-content-td' >Потери КГС при проведении ремонтных работ на ВТК ***</td>
                <td className='table-content-td' >тыс.м3</td>
                {items_sar_day.map((items_day, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_day['ser_20'] = e.target.value}}
                        className='input-content' defaultValue={items_day.ser_20}/></td>)
                })}
                {items_sar_month.map((items_month, index)=>{
                    return (<td className='table-content-td' key={index}><input
                        onChange={(e) =>{items_month['ser_120'] = e.target.value}}
                        className='input-content' defaultValue={items_month.ser_120}/></td>)
                })}
            </tr>
            <tr>
                <td className='input-content-footer' colSpan={5}><span> </span></td>
            </tr>
        </tbody>
        </table>

    )
}
export default TableSar