import React from 'react';
// import store from './store'
import {connect} from 'react-redux'


const TodoList = (props) => {
    let {inputValue , inputChange, clickButton} = props
    return ( 
        <div>
            <div>
                <input value = {inputValue} 
                onChange={inputChange}/>
                <button onClick={clickButton}>submit</button>
            </div>
            <ul>
                {
                    props.list.map((item,index)=>{
                    return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
     );
}

// class TodoList extends Component {

//     render() { 
//         let {inputValue , inputChange, clickButton} = this.props
//         return ( 
//             <div>
//                 <div>
//                     <input value = {inputValue} 
//                     onChange={inputChange}/>
//                     <button onClick={clickButton}>submit</button>
//                 </div>
//                 <ul>
//                     {
//                         this.props.list.map((item,index)=>{
//                         return (<li key={index}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
// }

const stateToProps =(state) =>{
    return{
        inputValue: state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value: e.target.value
            }
            dispatch(action)
        },

        clickButton(e){
            let action = {type:'add_item'}
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);