import React from 'react'
import './style.css'
import {ReactComponent as IconMenu} from "./assets/icon_menu.svg";
import {NavLink} from "react-router-dom";

const Navbar = ({setStateSidebar}) => {
    return(
            <ul className='navbar-content'>
                <li onClick={() => setStateSidebar(true)}><IconMenu /></li>
                <li>
                    <div className="dropdown">
                        <a href="#" className="text dropbtn">Расчет потерь газа</a>
                        <div className="dropdown-content">
                            <NavLink to='/oks' >Определение компонентного состава</NavLink>
                            <a path='/' >Расчет технологических потерь</a>
                            <a path='/' >Расчет массы</a>
                            <a path='/'>Коэффициенты сверживаемости</a>
                            <a path='/'>Потери газового конденсата через неплотности</a>
                        </div>
                    </div>
                </li>

                <li><a className="text" href="#">Суточный рапорт Киринского ГКМ</a></li>

                <li>
                    <div className='dropdown'>
                        <a href="#" className="text dropbtn">Отчеты</a>
                        <div className="dropdown-content">
                            <NavLink to="/sar">Суточный рапорт УКПГ</NavLink>
                            <a href="#">Ежемесячный эксплуатационный рапорт</a>
                            <a href="#">Материальный баланс МЭГ</a>
                        </div>
                    </div>
                </li>
            </ul>
    )
}

export default Navbar