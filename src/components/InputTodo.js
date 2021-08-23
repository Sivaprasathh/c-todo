import React from 'react';
import "../styles/index.css"
import { Button } from "react-bootstrap";
class InputTodo extends React.Component{
    constructor(){
        super();
        this.inputRef=React.createRef()
    }
    render(){
        let {addTodo} = this.props;
        return (
            <div className = "inp">
             <input type="text" placeholder="Add todo" ref={this.inputRef}></input>
             <Button className = "btn btn-success" onClick={()=>{
                 if(this.inputRef.current.value)
                 addTodo(this.inputRef.current.value);

             }}>
                 Add task</Button>
                 
            </div>
        )
    }
}
export default InputTodo;