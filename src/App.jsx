import './App.css';
import Navbar from "./components/navbar/Navbar"
import Contents from "./pages/oks/Contents";
import Sidebar from "./components/sidebar/Sidebar";
import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ContentP1 from "./pages/oks/pages/ContentP1";
import ContentP2 from "./pages/oks/pages/ContentP2";
import Clock from './components/clock/Clock';

function App() {
    let [state_sidebar, setStateSidebar] = React.useState(false)

  return (
    <div className="App">
        <Router>
            <Navbar setStateSidebar={setStateSidebar} />
            <Sidebar state_sidebar={state_sidebar} setStateSidebar={setStateSidebar}/>
            <Routes>
                <Route path='/' element= {<Clock/>}/>
                <Route path='/oks' element={<Contents />}/>
                <Route path='/oks/p1' element={<ContentP1/>}/>
                <Route path='/oks/p2' element={<ContentP2/>}/>
            </Routes>

        </Router>
    </div>
  );
}

export default App;
