import React from "react";
import './style.css'

const Balance = () => {
    return(
        <div className='table-balance-modal' >
            <table className='table-balance'>
                <thead>
                    <tr>
                        <th className='table_balance_th' colSpan={5}>Расчет материального баланса</th>
                    </tr>
                    <tr>
                        <th className="table_balance_th">№</th>
                        <th className="table_balance_th" colSpan={2}>Параметр баланса</th>
                        <th className="table_balance_th">Размерность</th>
                        <th className="table_balance_th">Значение</th>
                    </tr>

                </thead>
                <tbody>
                <tr>
                    <th className="table_balance_td">a</th>
                    <td className="table_balance_td" colSpan="2">наличие оборотного рмэг на начало смены</td>
                    <td className="table_balance_td"> тонны</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr>
                    <th className="table_balance_td">b</th>
                    <td className="table_balance_td" colSpan="2">наличие факт. товарного мэг 100% на складе
                        (поз.20)
                    </td>
                    <td className="table_balance_td"> тонны</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr>
                    <th className="table_balance_td">c</th>
                    <td className="table_balance_td" colSpan="2">наличие на начало суток на складе пб</td>
                    <td className="table_balance_td"> тонны</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">d</th>
                    <td className="table_balance_td" colSpan="2">приход товарного мэг (100% мас.) на склад фкгду
                        (поз.6)
                    </td>
                    <td className="table_balance_td"></td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">e</th>
                    <td className="table_balance_td" colSpan="2">приход товарного мэг 100% со склада пб на склад
                        укпг (поз.20)
                    </td>
                    <td className="table_balance_td"></td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">f</th>
                    <td className="table_balance_td" colSpan="2">вовлечение товарного мэг со склада укпг (поз.20)
                    </td>
                    <td className="table_balance_td"></td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <th className="table_balance_td" rowSpan="3">g</th>
                    <td className="table_balance_td" rowSpan="3">концентрация мэг</td>
                    <td className="table_balance_td">нмэг</td>
                    <td className="table_balance_td">% (масс.)</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <td className="table_balance_td">рмэг 30и-1</td>
                    <td className="table_balance_td">% (масс.)</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <td className="table_balance_td">рмэг 60е-1</td>
                    <td className="table_balance_td">% (масс.)</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">h</th>
                    <td className="table_balance_td">плотность рмэг</td>
                    <td className="table_balance_td">рмэг 60е-1</td>
                    <td className="table_balance_td">т/м3</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">i</th>
                    <td className="table_balance_td" colSpan="2">приход нмэг (30и-1)</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr>
                    <th className="table_balance_td">j</th>
                    <td className="table_balance_td" colSpan="2">регенерация рмэга из урм</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr>
                    <th className="table_balance_td">k</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на пдк (всего)</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">l</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на cкважину p1</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">m</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p2</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">n</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p3</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">o</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p4-бис</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">p</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p5</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">q</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p6</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">r</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на скважину p7</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">s</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на манифольд</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">t</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на технологию</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">u</th>
                    <td className="table_balance_td" colSpan="2">подача рмэг на площадку факельных сепараторов</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">v</th>
                    <td className="table_balance_td" colSpan="2">потери мэг на рэн</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>


                </tr>
                <tr className="local_area">
                    <th className="table_balance_td">w</th>
                    <td className="table_balance_td" colSpan="2">кгс после уск</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>


                </tr>
                <tr>
                    <th className="table_balance_td">x</th>
                    <td className="table_balance_td" colSpan="2">унос мэг с кгс (норма расхода 0.9495 кг/тонн)</td>
                    <td className="table_balance_td">т/сут.</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">aa</th>
                    <td className="table_balance_td" colSpan="2">остаток оборотного рмэг на конец суток</td>
                    <td className="table_balance_td">тонны</td>
                    <td className="table_balance_td"></td>
                </tr>
                <tr>
                    <th className="table_balance_td">bb</th>
                    <td className="table_balance_td" colSpan="2">остаток товарного мэг на поз.20 (100% мас.)</td>
                    <td className="table_balance_td">тонны</td>
                    <td className="table_balance_td"></td>

                </tr>
                <tr>
                    <th className="table_balance_td">cc</th>
                    <td className="table_balance_td" colSpan="2">остаток на конец суток на складе пб (100% мас.)
                    </td>
                    <td className="table_balance_td">тонны</td>
                    <td className="table_balance_td"></td>

                </tr>
                </tbody>
            </table>
        </div>
  )
}
export default Balance