import React from 'react'
import './style.css'
import {ReactComponent as IconMenu} from "./assets/icon_menu.svg";
import {NavLink} from "react-router-dom";
import Personal from "../personal/Personal";
import {ReactComponent as IconUser} from "./assets/icon-user.svg";
import {ReactComponent as IconChevron} from "./assets/chevron.svg";


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

                <li><NavLink to='/srk' >Суточный рапорт Киринского ГКМ</NavLink></li>

                <li>
                    <div className='dropdown'>
                        <a href="#" className="text dropbtn">Отчеты</a>
                        <div className="dropdown-content">
                            <NavLink to="/sar">Суточный рапорт УКПГ</NavLink>
                            <NavLink to="/mar">Ежемесячный эксплуатационный рапорт</NavLink>
                            <NavLink to="/mag">Материальный баланс МЭГ</NavLink>
                        </div>
                    </div>
                </li>

                <li>
                    <div className='dropdown nav-personal'>
                        <a href='#' className='text dropbtn nav-personal-a'>
                            <IconUser/>
                            <label className='nav-name-personal'>Родованов П.В.</label>
                            <IconChevron className='chevron'/>
                        </a>
                        <div className="dropdown-content">
                            <Personal/>
                        </div>
                    </div>
                </li>
            </ul>
    )
}

export default Navbar