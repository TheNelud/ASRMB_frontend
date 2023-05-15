import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar/Navbar"

import Sidebar from "./components/sidebar/Sidebar";
import BaseContent from "./pages/base/BaseContent";
import Contents_OKS from "./pages/oks/Contents_OKS";
import ContentP1 from "./pages/oks/pages/ContentP1";
import ContentP2 from "./pages/oks/pages/ContentP2";
import ContentP3 from "./pages/oks/pages/ContentP3";
import ContentP4 from "./pages/oks/pages/ContentP4";
import ContentP5 from "./pages/oks/pages/ContentP5";
import ContentP6 from "./pages/oks/pages/ContentP6";
import ContentP7 from "./pages/oks/pages/ContentP7";
import ContentP8 from "./pages/oks/pages/ContentP8";
import ContentP9 from "./pages/oks/pages/ContentP9";
import ContentP10 from "./pages/oks/pages/ContentP10";
import Sar from "./pages/sar/Sar";
import Mar from "./pages/mar/Mar";
import Mag from "./pages/mag/Mag";


function App() {
    let [state_sidebar, setStateSidebar] = React.useState(false)

  return (
    <div className="App">
        <Router>
            <Navbar setStateSidebar={setStateSidebar} />
            <Sidebar state_sidebar={state_sidebar} setStateSidebar={setStateSidebar}/>
            <Routes>
                <Route path='/' element= {<BaseContent/>}/>
                <Route path='/oks' element={<Contents_OKS/>}/>
                <Route path='/oks/p1' element={<ContentP1/>}/>
                <Route path='/oks/p2' element={<ContentP2/>}/>
                <Route path='/oks/p3' element={<ContentP3/>}/>
                <Route path='/oks/p4' element={<ContentP4/>}/>
                <Route path='/oks/p5' element={<ContentP5/>}/>
                <Route path='/oks/p6' element={<ContentP6/>}/>
                <Route path='/oks/p7' element={<ContentP7/>}/>
                <Route path='/oks/p8' element={<ContentP8/>}/>
                <Route path='/oks/p9' element={<ContentP9/>}/>
                <Route path='/oks/p10' element={<ContentP10/>}/>

                <Route path='/sar' element={<Sar/>}/>
                <Route path='/mar' element={<Mar/>}/>
                <Route path='/mag' element={<Mag/>}/>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
