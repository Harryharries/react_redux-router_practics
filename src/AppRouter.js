import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import List from './pages/List'

function AppRouter(){
    return (
            <Router>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/list/">list</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}></Route>
            </Router>
        
    )
}

export default AppRouter