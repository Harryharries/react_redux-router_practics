import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import Vedio from './pages/video'
import Workplace from './pages/workplace'
import './index.css'
// import Index from './pages/index'
// import List from './pages/List'
// import Home from './pages/Home'

function AppRouter(){

    let routeConfig = [
        {path:'/',title:'home',exact:true,component:Index},
        {path:'/video',title:'Vedio',exact:false,component:Vedio},
        {path:'/workplace',title:'Resume',exact:false,component:Workplace},
    ]
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
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to="/video">Vedio</Link></li>
                            <li><Link to="/workplace">Resume</Link></li> */}
                            {
                                routeConfig.map((item,index)=>{
                                return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="rightMain">
                            {
                                routeConfig.map((item,index)=>{
                                    return (<Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>)
                                })
                            }
                        {/* <Route path="/" exact component={Index}></Route>
                        <Route path="/video/" component={Vedio}></Route>
                        <Route path="/workplace/" component={Workplace}></Route> */}
                    </div>
                </div>
            </Router>
        
    )
}

export default AppRouter