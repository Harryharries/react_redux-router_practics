import React from 'react'
import {Route, Link} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'
//import './index.css'

function Video(){
    return (
        <div>
            <div className = "topNav">
                <ul>
                    <li><Link to="/video/reactpage/">React Tutorial</Link></li>
                    <li><Link to="/video/flutter/">flutter Tutorial</Link></li>
                    <li><Link to="/video/vue/">Vue Tutorial</Link></li>
                </ul>
            </div>
            <div className = "videoContent">
                <div><h3>videos</h3></div>
                <Route path="/video/reactpage/" component={ReactPage}/>
                <Route path="/video/flutter/" component={Flutter}/>
                <Route path="/video/vue/" component={Vue}/>
            </div>
        </div>
    )
}

export default Video