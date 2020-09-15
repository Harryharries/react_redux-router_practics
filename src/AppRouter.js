import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import Vedio from './pages/video'
import './index.css'
// import Index from './pages/index'
// import List from './pages/List'
// import Home from './pages/Home'

function AppRouter(){
    return (
            <Router>
                {/* <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/list/">list</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/:id" component={List}></Route>
                <Route path="/home/" exact component={Home}/> */}
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>Navi</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/video">Vedio</Link></li>
                            <li><Link to="/">Resume</Link></li>
                        </ul>
                    </div>
                    <div className="rightMain">
                        <Route path="/" exact component={Index}></Route>
                        <Route path="/video/" component={Vedio}></Route>
                    </div>
                </div>
            </Router>
        
    )
}

export default AppRouter