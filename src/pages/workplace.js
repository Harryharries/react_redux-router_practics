import React from 'react'
import {Route, Link} from 'react-router-dom'
import Money from './workplace/Money'
import Getup from './workplace/Getup'
//import './index.css'

function Video(){
    return (
        <div>
            <div className = "topNav">
                <ul>
                    <li><Link to="/workplace/Money">more salary</Link></li>
                    <li><Link to="/workplace/Getup">learning</Link></li>
                </ul>
            </div>
            <div className = "videoContent">
                <div><h3>my soft skill</h3></div>
                <Route path="/workplace/Money/" component={Money}/>
                <Route path="/workplace/Getup/" component={Getup}/>
            </div>
        </div>
    )
}

export default Video