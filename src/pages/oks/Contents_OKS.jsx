import React from 'react'
import Draggable from 'react-draggable';

import './style.css';
import BtnFilterGrid from "../../components/filter_grid/BtnFilterGrid";
import CheckBoxTable from "./tables/CheckBoxTable";
import TableApp1 from "./tables/tableApp1/TableApp1";





const Contents_OKS = () => {


    //Select checkbox table
    const [isClickBtnTableOks, setClickBtnTableOks] = React.useState(false)

    const [isCheckBoxP1, setCheckBoxP1] = React.useState(false)
    const [isCheckBoxP2, setCheckBoxP2] = React.useState(false)
    const [isCheckBoxP3, setCheckBoxP3] = React.useState(false)
    const [isCheckBoxP4, setCheckBoxP4] = React.useState(false)
    const [isCheckBoxP5, setCheckBoxP5] = React.useState(false)
    const [isCheckBoxP6, setCheckBoxP6] = React.useState(false)
    const [isCheckBoxP7, setCheckBoxP7] = React.useState(false)
    const [isCheckBoxP8, setCheckBoxP8] = React.useState(false)
    const [isCheckBoxP9, setCheckBoxP9] = React.useState(false)
    const [isCheckBoxP10, setCheckBoxP10] = React.useState(false)

    const checkBtnHendler = () => {setClickBtnTableOks(!isClickBtnTableOks);save_positions_oks();}
    const checkHandelerP1 = () => {setCheckBoxP1(!isCheckBoxP1);save_positions_oks();}
    const checkHandelerP2 = () => {setCheckBoxP2(!isCheckBoxP2);save_positions_oks();}
    const checkHandelerP3 = () => {setCheckBoxP3(!isCheckBoxP3);save_positions_oks();}
    const checkHandelerP4 = () => {setCheckBoxP4(!isCheckBoxP4);save_positions_oks();}
    const checkHandelerP5 = () => {setCheckBoxP5(!isCheckBoxP5);save_positions_oks();}
    const checkHandelerP6 = () => {setCheckBoxP6(!isCheckBoxP6);save_positions_oks();}
    const checkHandelerP7 = () => {setCheckBoxP7(!isCheckBoxP7);save_positions_oks();}
    const checkHandelerP8 = () => {setCheckBoxP8(!isCheckBoxP8);save_positions_oks();}
    const checkHandelerP9 = () => {setCheckBoxP9(!isCheckBoxP9);save_positions_oks();}
    const checkHandelerP10 = () => {setCheckBoxP10(!isCheckBoxP10);save_positions_oks();}

    const show_tables = {'p1':isCheckBoxP1,'p2':isCheckBoxP2,'p3':isCheckBoxP3,'p4':isCheckBoxP4,'p5':isCheckBoxP5,
    'p6':isCheckBoxP6,'p7':isCheckBoxP7,'p8':isCheckBoxP8,'p9':isCheckBoxP9,'p10':isCheckBoxP10}

    let showSelectCheckBox =()=>{
        return(
            <CheckBoxTable
                    isClickBtnTableOks={isClickBtnTableOks}
                    isCheckBoxP1={isCheckBoxP1}
                    isCheckBoxP2={isCheckBoxP2}
                    isCheckBoxP3={isCheckBoxP3}
                    isCheckBoxP4={isCheckBoxP4}
                    isCheckBoxP5={isCheckBoxP5}
                    isCheckBoxP6={isCheckBoxP6}
                    isCheckBoxP7={isCheckBoxP7}
                    isCheckBoxP8={isCheckBoxP8}
                    isCheckBoxP9={isCheckBoxP9}
                    isCheckBoxP10={isCheckBoxP10}
                    checkBtnHendler={checkBtnHendler}
                    checkHandelerP1={checkHandelerP1}
                    checkHandelerP2={checkHandelerP2}
                    checkHandelerP3={checkHandelerP3}
                    checkHandelerP4={checkHandelerP4}
                    checkHandelerP5={checkHandelerP5}
                    checkHandelerP6={checkHandelerP6}
                    checkHandelerP7={checkHandelerP7}
                    checkHandelerP8={checkHandelerP8}
                    checkHandelerP9={checkHandelerP9}
                    checkHandelerP10={checkHandelerP10}

            />
        )
    }


    //Position table in area
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

    const onClickGridHorizonal = () => {
        setP1([15,10]);
        setP2([1220,10]);
        setP3([15,520]);
        setP4([1220,520]);
        setP5([15,1040]);
        setP6([1220,1040]);
        setP7([15,1560]);
        setP8([1220,1560]);
        setP9([15, 2080]);
        setP10([1220,2080]);
        save_positions_oks()
    }
    
    const onClickGridVertical = () => {
        setP1([400,10]);
        setP2([400,520]);
        setP3([400,1040]);
        setP4([400,1560]);
        setP5([400,2080]);
        setP6([400,2600]);
        setP7([400,3120]);
        setP8([400,3640]);
        setP9([400,4160]);
        setP10([400,4680]);
        save_positions_oks()
    }
    // console.log(coordinate)

    React.useEffect(()=>{
        get_positions_oks()
    },[])

    let get_positions_oks = async ()=>{
            let response = await fetch('/setting/oks/')
            let data = await response.json()
            console.log(data)
            let str_data_coordinate = data[0]['coordinate'].replace(/'/ig, '"')
            let str_data_show_table = data[0]['show_tables'].replace(/'/ig, '"').toLowerCase()
            console.log(str_data_coordinate)
            console.log(str_data_show_table)
            let json_data_coordinate = JSON.parse(str_data_coordinate)
            let json_data_show_table = JSON.parse(str_data_show_table)
            console.log(json_data_show_table)


            setP1([json_data_coordinate['p1'][0],json_data_coordinate['p1'][1]])
            setP2([json_data_coordinate['p2'][0],json_data_coordinate['p2'][1]])
            setP3([json_data_coordinate['p3'][0],json_data_coordinate['p3'][1]])
            setP4([json_data_coordinate['p4'][0],json_data_coordinate['p4'][1]])
            setP5([json_data_coordinate['p5'][0],json_data_coordinate['p5'][1]])
            setP6([json_data_coordinate['p6'][0],json_data_coordinate['p6'][1]])
            setP7([json_data_coordinate['p7'][0],json_data_coordinate['p7'][1]])
            setP8([json_data_coordinate['p8'][0],json_data_coordinate['p8'][1]])
            setP9([json_data_coordinate['p9'][0],json_data_coordinate['p9'][1]])
            setP10([json_data_coordinate['p10'][0],json_data_coordinate['p10'][1]])

            setCheckBoxP1(json_data_show_table['p1'])
            setCheckBoxP1(json_data_show_table['p2'])
            setCheckBoxP2(json_data_show_table['p3'])
            setCheckBoxP3(json_data_show_table['p4'])
            setCheckBoxP4(json_data_show_table['p5'])
            setCheckBoxP5(json_data_show_table['p5'])
            setCheckBoxP6(json_data_show_table['p6'])
            setCheckBoxP7(json_data_show_table['p7'])
            setCheckBoxP8(json_data_show_table['p8'])
            setCheckBoxP9(json_data_show_table['p9'])
            setCheckBoxP10(json_data_show_table['p10'])
        }

    let save_positions_oks = async ()=>{

        await fetch('/setting/oks/',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({coordinate, show_tables})
        })
    }


    let title_table = [
        'Протокол анализа №09-2021 PVT(К)',
        'протокол № 05 - PVT(Г)',
        'п.34 паспорт качества №3',
        'протокол № 07-PVT(Г)',
        'протокол № 06 - PVT(Г)',
        'выход газа п.35 ПРОТОКОЛ №08 - PVT(Г)',
        '10С-4№2',
        '№8 10С-1№6  протокол № 05 - PVT(Г) от',
        '№9 10С-1№6  протокол № 05 - PVT(Г) от',
        'КГН Протокол 09-2021 PVT (К)'
    ]

    let showTableP1 = () => {
        if (isCheckBoxP1){
            return(
                <Draggable  onStop={handleStopP1} position={{x:p1[0],y:p1[1]}}>
                    <div id='p1' className='conteiner_p'>
                        <TableApp1 title_table={title_table[0]}/>
                    </div>
                </Draggable>
            )
        }
    }



    return(
        <div className="conteiner-content">

            <div className='conteiner_all'>
                <BtnFilterGrid onClickGridHorizonal={onClickGridHorizonal} onClickGridVertical={onClickGridVertical} />
                {showSelectCheckBox()}

                {showTableP1()}

            </div>

        </div>

    )
}

export default Contents_OKS