import React from 'react'
import Draggable from 'react-draggable';

import './style.css';
import {ReactComponent as IconCreate} from "../../components/dock/assets/icon-create.svg";


const Contents_OKS = () => {


    const [coordinate , setCoordinate] = React.useState(0)

    const [x, setX]= React.useState(0)
    const [y, setY]= React.useState(0)

    const handleStop = (event, dragElement) => {
        setX(dragElement.x)
        setY(dragElement.y)
        console.log(x, y)
    };

    React.useEffect(()=>{
        get_positions_oks()
    })
    
    console.log(coordinate)

    let get_positions_oks = async ()=>{
        let response = await fetch('/setting/oks/')
        let data = await response.json()
        console.log(data)
        // setCoordinate(data)
    }

    // console.log(get_positions_oks())


    let save_positions_oks = async ()=>{
        let positions = [
            {'set_x':x, 'set_y':y}
        ]
        await fetch('/setting/oks/',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({positions})
        })

    }


    return(
        <div className="conteiner-content">
            <div className='dockpanel'>
                <button className='btnFunc' onClick={() => save_positions_oks()}><IconCreate/></button>
            </div>
            <div className='conteiner_all'>
                <Draggable onStop={handleStop} position={{x:x,y:y}}>
                    <div className='conteiner_p'>a</div>
                </Draggable>
                <Draggable >
                    <div className='conteiner_p'>b</div>
                </Draggable>
                <Draggable>
                    <div className='conteiner_p'>c</div>
                </Draggable>
                <Draggable>
                    <div className='conteiner_p'>d</div>
                </Draggable>
                <Draggable>
                    <div className='conteiner_p'>e</div>
                </Draggable>
            </div>

        </div>

    )
}

export default Contents_OKS