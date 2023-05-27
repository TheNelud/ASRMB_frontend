import React from "react";
import Draggable from "react-draggable";
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import './style.css'

Chart.register(CategoryScale);




let ComponentChart = ({count_chart}) =>{
    // ===============================================================================>  Позиция

    let [isPosition, setPosition] = React.useState([0,0])
    let handleStop = (event, dragElement) => {setPosition([dragElement.x, dragElement.y]);}

    // ===============================================================================>  Конфигурация
    const lineChartData = {
        labels: ["October", "November", "December"],
        datasets: [{
                data: [8137119, 9431691, 10266674],
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
                lineTension: 0.5
            },{
                data: [1216410, 1371390, 1477380],
                label: "Deaths",
                borderColor: "#ff3333",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
                lineTension: 0.5
            }]
    };

    // ===============================================================================>  Контекстное меню

    let [showContextMenu, setShowContextMenu] = React.useState(false)
    let onContextMenu = (event) => {
        event.preventDefault();
        console.log(`CLick context menu x:${event.clientX}, y: ${event.clientY}`)
        setShowContextMenu(!showContextMenu)
    }
    // ===============================================================================>  Фунционал


    return(
        <div>
            <Draggable onStop={handleStop} position={{x:isPosition[0],y:isPosition[1]}}>
                <div onContextMenu={onContextMenu} >
                    <Line type="line" width={160} height={60} data={lineChartData}
                        options={{
                            title: {
                            display: true,
                            text: "COVID-19 Cases of Last 6 Months",
                            fontSize: 20
                        }, legend: {
                            display: true, //Is the legend shown?
                            position: "top" //Position of the legend.
                        }}}/>
                </div>
            </Draggable>

            <div className={showContextMenu ? 'show-context-menu' : 'hide-context-menu'} >
                <div className='context-chart-menu'>
                    <div>
                        <label>Название</label><input></input>
                    </div>
                    <div>
                        <label>Тип</label><input></input>
                    </div>
                    <div>
                        <label>Размер</label><input></input>
                    </div>
                    <div>
                        <label>Тип</label><input></input>
                    </div>

                </div>
            </div>

        </div>




    )

}

export default ComponentChart