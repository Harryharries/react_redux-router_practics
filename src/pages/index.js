import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'personal blog-123'},
                {cid:223,title:'personal blog-223'},
                {cid:233,title:'personal blog-233'},
            ]
         }
        //  this.props.history.push("/home/")
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to="/home/"></Redirect> */}

            <h2>home</h2>
            {/* <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (<li key={index}>
                            <Link to={'/list/'+item.cid}>{item.title}</Link>
                            </li>)
                    })
                }
            </ul> */}
            </div>
            );
    }
}
 
export default Index;