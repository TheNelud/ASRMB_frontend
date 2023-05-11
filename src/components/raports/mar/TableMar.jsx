import React from "react";
import './style.css'
const TableMar = ({items_mar}) => {
    return(
        <table className='table-content-mar'>
            <thead>
                <tr>
                    <th className='table_content_th_header' colSpan="3">Ежемесячный эксплутационный рапорт по добыче,
                        переработке газа и газового конденсата
                        по Киринскому газоконденсатному месторождению за
                    </th>
                </tr>
                <tr>
                    <th className='table_content_th' >Наименование</th>
                    <th className='table_content_th' >Еденица измерения</th>
                    <th className='table_content_th'>факт</th>
                </tr>
            </thead>
            {items_mar.map((item, index)=>{ return(
            <tbody className='table-content-body'>
                <tr>
                    <th className='table_content_th' colSpan="3">Газ горючий природный</th>
                </tr>
                <tr>
                    <td className='table-content-td' >1. Добыча (извлечение) из недр Киринского ГКМ на земную поверхность</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_1}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >в т.ч. Технологические потери при Добыче Газа горючего природного</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_2}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: - нормотивные технологические потери (утверженный норматив тех.потерь на 2021г - 0,0608%)</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_3}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >2. Газ горючий природный, подаваемый в магистральный газопровод переданный ПАО "Газпром"</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_4}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >в том числе: Газ горючий природный (Газ стабилизации) в составе Газа горючего природного, подаваемого в магистральный газопровод</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_5}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: - технологические потери Газа горючего природного (Газа стабилизации) при Переработке</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_6}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >2.1 замерено на Узле Коммерческого Учета газа на выходе с УКПГ БТК Киринского ГКМ</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_7}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >2.2 замерено на узле технологических измерений УПТИГ УКПГ БТК Киринского ГКМ</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_8}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >2.3 Технологические потери Газа горючего природного, подаваемого в магистральный гозопровод</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_9}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3 Покупка Газа горючего природного, подаваемого в магистральный трубопровод у ПАО "Газпром" по договору от 23.07.2013 № ГДШсн-2012, в том числе:</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_10}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3.1 из ресурсов, добытых ООО "Газпром доча шельф Южно-Сахалинск" на Киринском ГКМ</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_11}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3.2 из ресурсов, полученных обратным ходом из МГ "БТК Киринского ГКМ - ГКС Сахалин"</td>
                    <td className='table-content-td' >тыс.м3</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_12}/></td>
                </tr>

                <tr>
                    <th className='table_content_th' colSpan="3">Конденсат газовый</th>
                </tr>
                <tr>
                    <td className='table-content-td' >1 Добыча (извлечение) из недр Киринского ГКМ</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_13}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >в т.ч. Технологические при Добыче Конденсата газового нестабильного</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_14}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: - нормотивные технологические потери (утверженный норматив тех.потерь на 2021г - 0,0608%)</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_15}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >2. Конденсат газовый нестабильный, переданный в Переработку</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_16}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: Возврат в Переработку Конденсата газового нестабильного</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_17}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3. Остаток Конденсата газового нестабильного, переданного в переработку на начало месяца,в том числе:</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_18}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3.1 технологический</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_19}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >3.2 товарный</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_20}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >4. Переработано Конденсата газового нестабильного</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_21}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >в т.ч. Технологические потери Конденсата газового нестабильного на этапе Переработки (стабилицазии)</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_22}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >в т.ч. Переход конденсата в другой вид продукции(Газ стабилизации в МГ)</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_23}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >5. Конденсат газовый стабильный переданный ПАО "Газпром", масса нетто</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_24}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: масса брутто</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_25}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >5.1 Конденсат газовый стабильный, замеренный на Узле коммерческого учета конденсата газового стабильного , масса нетто</td>
                    <td className='table-content-td' className="objCellsar front-rap">тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_26}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >справочно: масса брутто</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_27}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >5.2 Технологические потери Конденсата газового стабильного на этапе Переработки (стабилизации)</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_28}/></td>
                </tr>
                <tr>
                    <td className='table-content-td'>5.3 Возврат в Переработку Конденсата газового стабильного</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_29}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >6. Остаток Конденсата газового нестабильного, переданного в переработку на конец месяц, в том числе:</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_30}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >6.1 технологический</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_31}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' >6.2 товарный</td>
                    <td className='table-content-td' >тонн</td>
                    <td className='table-content-td' key={index}><input className='input-content' defaultValue={item.mer_32}/></td>
                </tr>
                <tr>
                    <td className='table-content-td' className='input-content-footer' colSpan={3}><span> </span></td>
                </tr>

            </tbody>
            )})}
        </table>

    )

}

export default TableMar