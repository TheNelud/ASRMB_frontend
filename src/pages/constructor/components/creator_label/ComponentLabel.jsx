import React from "react";
import Draggable from "react-draggable";
import './style.css'
let ComponentLabel = ({count_label}) =>{

    // ===============================================================================>  Позиция

    let [isPosition, setPosition] = React.useState([0,0])
    let handleStop = (event, dragElement) => {setPosition([dragElement.x, dragElement.y]);}

    // ===============================================================================>  Фунционал

    // Текст
    let [isText, setText] = React.useState()
    let onChangeText = (event) =>{setText(event.target.value)}
    // Размер шрифта
    let [isFontSize, setFontSize] = React.useState()
    let onChangeFontSize = (event) => {setFontSize(event.target.value)}
    // Цвет шрифта
    let [isColor, setColor] = React.useState()
    let onChangeColor = (event) => {setColor(event.target.value)}
    // Цвет фона
    let [isBackgraund, setBackgraund] = React.useState()
    let onChangeBackgraund = (event) => {setBackgraund(event.target.value)}


    // ===============================================================================>  Контекстное меню
    let [showContextMenu, setShowContextMenu] = React.useState(false)
    let onContextMenu = (event) => {
        event.preventDefault();
        console.log(`CLick context menu x:${event.clientX}, y: ${event.clientY}`)
        setShowContextMenu(!showContextMenu)
    }


    return(
        <div>
            <Draggable onStop={handleStop} position={{x:isPosition[0],y:isPosition[1]}}>
                <div onContextMenu={onContextMenu} style={{position:'absolute'}}>
                    <label defaultValue='Новая строка'
                           style={{fontSize:`${isFontSize}px`,
                                    color:`${isColor}`,
                                    background:`${isBackgraund}`
                           }
                    }>
                        {isText ? isText: `Новыя строка_${count_label}`}
                    </label>
                </div>
            </Draggable>

            <div className={showContextMenu ? 'show-context-menu' : 'hide-context-menu'} >
                <div className='context-label-menu'>
                    <div>
                        <label htmlFor={`label_content_${count_label}`}>Текст</label>
                        <input className={`input-content-label`} id={`label_content_${count_label}`} name={`label_content_${count_label}`} type='text' placeholder='Ввод' onChange={onChangeText}/>
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor={`label_fontsize_${count_label}`}>Размер шрифта</label>
                        <input className={`input-fontsize-label`} id={`label_fontsize_${count_label}`} name={`label_fontsize_${count_label}`} type='number' defaultValue='0' onChange={onChangeFontSize} />
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor={`label_color_${count_label}`}>Цвет шрифта</label>
                        <input className={`input-color-label`} id={`label_color_${count_label}`} name={`label_color_${count_label}`} type='color' onChange={onChangeColor}></input>
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor={`label_background_${count_label}`}>Цвет фона</label>
                        <input className={`input-background-label`} id={`label_background_${count_label}`} name={`label_background_${count_label}`} type='color' onChange={onChangeBackgraund}></input>
                    </div>
                    <hr/>

                </div>


            </div>



        </div>
    )
}

export default ComponentLabel