import React from 'react'
import './style.css'
import {ReactComponent as IconClose} from "./assets/icon_close.svg";
import {ReactComponent as IconHome} from "./assets/icon_home.svg";
import {NavLink, Route, Router, Routes} from "react-router-dom";
import SidebarOks from "../../pages/oks/SidebarOks";




const Sidebar = ({state_sidebar, setStateSidebar}) => {

    return (
        <>
            <div className={`sidebar ${state_sidebar ? 'show' : 'hide'}`}>
                <IconClose className='close-icon' href='#' onClick={() => setStateSidebar(false)}/>
                <NavLink to='/'><IconHome className='house-icon'/></NavLink>
                <hr/>
                <Routes>
                    <Route path='/oks' element={<SidebarOks/>}/>
                    <Route path='/oks/p1' element={<SidebarOks/>}/>
                    <Route path='/oks/p2' element={<SidebarOks/>}/>
                    <Route path='/oks/p3' element={<SidebarOks/>}/>
                    <Route path='/oks/p4' element={<SidebarOks/>}/>
                    <Route path='/oks/p5' element={<SidebarOks/>}/>
                    <Route path='/oks/p6' element={<SidebarOks/>}/>
                    <Route path='/oks/p7' element={<SidebarOks/>}/>
                    <Route path='/oks/p8' element={<SidebarOks/>}/>
                    <Route path='/oks/p9' element={<SidebarOks/>}/>
                    <Route path='/oks/p10' element={<SidebarOks/>}/>

                </Routes>

            </div>
        </>
    )
}
export default Sidebar
