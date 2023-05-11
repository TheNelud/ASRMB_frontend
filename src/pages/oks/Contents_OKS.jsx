import React from 'react'
import Draggable from 'react-draggable';

import './style.css';
import {json} from "react-router-dom";
import TableItems from "../../components/oks/table/TableItems";
// import {ReactComponent as IconCreate} from "../../components/dock/assets/icon-create.svg";



const Contents_OKS = () => {

    const [p1, setP1] = React.useState([0,0])
    const [p2, setP2] = React.useState([0,0])
    const [p3, setP3] = React.useState([0,0])
    const [p4, setP4] = React.useState([0,0])
    const [p5, setP5] = React.useState([0,0])
    const [p6, setP6] = React.useState([0,0])
    const [p7, setP7] = React.useState([0,0])
    const [p8, setP8] = React.useState([0,0])
    const [p9, setP9] = React.useState([0,0])
    const [p10, setP10] = React.useState([0,0])

    const coordinate = {
        "p1":[p1[0],p1[1]], "p2":[p2[0],p2[1]], "p3":[p3[0],p3[1]], "p4":[p4[0],p4[1]], "p5":[p5[0],p5[1]],
        "p6":[p6[0],p6[1]], "p7":[p7[0],p7[1]], "p8":[p8[0],p8[1]], "p9":[p9[0],p9[1]], "p10":[p10[0],p10[1]],
    }

    const handleStopP1 = (event, dragElement) => {setP1([dragElement.x, dragElement.y]);coordinate["p1"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP2 = (event, dragElement) => {setP2([dragElement.x, dragElement.y]);coordinate["p2"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP3 = (event, dragElement) => {setP3([dragElement.x, dragElement.y]);coordinate["p3"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP4 = (event, dragElement) => {setP4([dragElement.x, dragElement.y]);coordinate["p4"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP5 = (event, dragElement) => {setP5([dragElement.x, dragElement.y]);coordinate["p5"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP6 = (event, dragElement) => {setP6([dragElement.x, dragElement.y]);coordinate["p6"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP7 = (event, dragElement) => {setP7([dragElement.x, dragElement.y]);coordinate["p7"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP8 = (event, dragElement) => {setP8([dragElement.x, dragElement.y]);coordinate["p8"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP9 = (event, dragElement) => {setP9([dragElement.x, dragElement.y]);coordinate["p9"] = [dragElement.x, dragElement.y];save_positions_oks()}
    const handleStopP10 = (event, dragElement) => {setP10([dragElement.x, dragElement.y]);coordinate["p10"] = [dragElement.x, dragElement.y];save_positions_oks()}

    // console.log(coordinate)

    React.useEffect(()=>{
        get_positions_oks()
    },[])

    let get_positions_oks = async ()=>{
            let response = await fetch('/setting/oks/')
            let data = await response.json()
            let str_data = data[0]['coordinate'].replace(/'/ig, '"')
            let json_data = JSON.parse(str_data)
            setP1([json_data['p1'][0],json_data['p1'][1]])
            setP2([json_data['p2'][0],json_data['p2'][1]])
            setP3([json_data['p3'][0],json_data['p3'][1]])
            setP4([json_data['p4'][0],json_data['p4'][1]])
            setP5([json_data['p5'][0],json_data['p5'][1]])
            setP6([json_data['p6'][0],json_data['p6'][1]])
            setP7([json_data['p7'][0],json_data['p7'][1]])
            setP8([json_data['p8'][0],json_data['p8'][1]])
            setP9([json_data['p9'][0],json_data['p9'][1]])
            setP10([json_data['p10'][0],json_data['p10'][1]])
        }

    let save_positions_oks = async ()=>{

        await fetch('/setting/oks/',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({coordinate})
        })
    }

    let [items_p1, setItems_p1] = React.useState([])
    let [items_p2, setItems_p2] = React.useState([])
    let [items_p3, setItems_p3] = React.useState([])
    let [items_p4, setItems_p4] = React.useState([])
    let [items_p5, setItems_p5] = React.useState([])
    let [items_p6, setItems_p6] = React.useState([])
    let [items_p7, setItems_p7] = React.useState([])
    let [items_p8, setItems_p8] = React.useState([])
    let [items_p9, setItems_p9] = React.useState([])
    let [items_p10, setItems_p10] = React.useState([])
    let title_table = [
        '10С-1№6  протокол № 05 - PVT(Г) от',
    ]


    return(
        <div className="conteiner-content">
            <div className='conteiner_all'>
                <Draggable  onStop={handleStopP1} position={{x:p1[0],y:p1[1]}}>
                    <div id='p1' className='conteiner_p'>
                        <TableItems key={items_p1.id} items={items_p1} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP2} position={{x:p2[0],y:p2[1]}}>
                    <div id='p2' className='conteiner_p'>
                        <TableItems key={items_p2.id} items={items_p2} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP3} position={{x:p3[0],y:p3[1]}}>
                    <div id='p3' className='conteiner_p'>
                        <TableItems key={items_p3.id} items={items_p3} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable  onStop={handleStopP4} position={{x:p4[0],y:p4[1]}}>
                    <div id='p4' className='conteiner_p'>
                        <TableItems key={items_p4.id} items={items_p4} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP5} position={{x:p5[0],y:p5[1]}}>
                    <div id='p5' className='conteiner_p'>
                        <TableItems key={items_p5.id} items={items_p5} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable  onStop={handleStopP6} position={{x:p6[0],y:p6[1]}}>
                    <div id='p6' className='conteiner_p'>
                        <TableItems key={items_p6.id} items={items_p6} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP7} position={{x:p7[0],y:p7[1]}}>
                    <div id='p7' className='conteiner_p'>
                        <TableItems key={items_p7.id} items={items_p7} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP8} position={{x:p8[0],y:p8[1]}}>
                    <div id='p8' className='conteiner_p'>
                        <TableItems key={items_p8.id} items={items_p8} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable  onStop={handleStopP9} position={{x:p9[0],y:p9[1]}}>
                    <div id='p9' className='conteiner_p'>
                        <TableItems key={items_p9.id} items={items_p9} title_table={title_table[0]}/>
                    </div>
                </Draggable>
                <Draggable onStop={handleStopP10} position={{x:p10[0],y:p10[1]}}>
                    <div id='p10' className='conteiner_p'>
                        <TableItems key={items_p10.id} items={items_p10} title_table={title_table[0]}/>
                    </div>
                </Draggable>
            </div>

        </div>

    )
}

export default Contents_OKS