import React from 'react'
import {NavLink} from "react-router-dom";
import './style.css'

import ContentP1 from "./pages/ContentP1";
import ContentP2 from "./pages/ContentP2";
import ContentP3 from "./pages/ContentP3";
import ContentP4 from "./pages/ContentP4";
import ContentP5 from "./pages/ContentP5";
import ContentP6 from "./pages/ContentP6";
import ContentP7 from "./pages/ContentP7";
import ContentP8 from "./pages/ContentP8";
import ContentP9 from "./pages/ContentP9";
import ContentP10 from "./pages/ContentP10";

import Contents_OKS from "./Contents_OKS";
import {ReactComponent as IconTable} from "./icon_table.svg";
const SidebarOks = () => {

    return (
        <div className='menu'>
            <NavLink to='/oks' element={<Contents_OKS/>}><span className='link-text'>Определение компонентного состава</span></NavLink>
            <NavLink to='/oks/p1' element={<ContentP1/>}><span className='link-text'>Приложение 1 протокол анализа №09-2021 PVT(К)</span></NavLink>
            <NavLink to='/oks/p2' element={<ContentP2/>}><span className='link-text'>Приложение 2 протокол № 05 - PVT(Г)</span></NavLink>
            <NavLink to='/oks/p3' element={<ContentP3/>}><span className='link-text'>Приложение 3 п.34 паспорт качества №3 </span></NavLink>
            <NavLink to='/oks/p4' element={<ContentP4/>}><span className='link-text'>Приложение 4 протокол № 07-PVT(Г)</span></NavLink>
            <NavLink to='/oks/p5' element={<ContentP5/>}><span className='link-text'>Приложение 5 протокол № 06 - PVT(Г)</span></NavLink>
            <NavLink to='/oks/p6' element={<ContentP6/>}><span className='link-text'>Приложение 6 выход газа п.35 ПРОТОКОЛ №08 - PVT(Г)</span></NavLink>
            <NavLink to='/oks/p7' element={<ContentP7/>}><span className='link-text'>Приложение 7 10С-4№2</span> </NavLink>
            <NavLink to='/oks/p8' element={<ContentP8/>}><span className='link-text'>Приложение 8</span></NavLink>
            <NavLink to='/oks/p9' element={<ContentP9/>}><span className='link-text'>Приложение 9 отчета по договору №ГДШ 777/1.08.12</span></NavLink>
            <NavLink to='/oks/p10' element={<ContentP10/>}><span className='link-text'>Приложение 10</span></NavLink>
        </div>
    )
}
export default SidebarOks
