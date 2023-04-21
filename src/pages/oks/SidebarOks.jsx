import React from 'react'
import {NavLink} from "react-router-dom";
import ContentP1 from "./pages/ContentP1";
import ContentP2 from "./pages/ContentP2";

const SidebarOks = () => {

    return (
        <div className='menu'>
            <NavLink to='/oks/p1' element={<ContentP1/>}>Приложение 1 протокол анализа №09-2021 PVT(К)</NavLink>
            <NavLink to='/oks/p2' element={<ContentP2/>}>Приложение 2 протокол № 05 - PVT(Г)</NavLink>
            <NavLink to='/oks/p3'>Приложение 3 п.34 паспорт качества №3 </NavLink>
            <NavLink to='/oks/p4'>Приложение 4 протокол № 07-PVT(Г)</NavLink>
            <NavLink to='/oks/p5'>Приложение 5 протокол № 06 - PVT(Г)</NavLink>
            <NavLink to='/oks/p6'>Приложение 6 выход газа п.35 ПРОТОКОЛ №08 - PVT(Г)</NavLink>
            <NavLink to='/oks/p7'>Приложение 7 10С-4№2 </NavLink>
            <NavLink to='/oks/p8'>Приложение 8</NavLink>
            <NavLink to='/oks/p9'>Приложение 9 отчета по договору №ГДШ 777/1.08.12</NavLink>
            <NavLink to='/oks/p10'>Приложение 10</NavLink>
        </div>
    )
}
export default SidebarOks
