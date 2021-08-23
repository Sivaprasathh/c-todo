import React from 'react';
import { Button } from "react-bootstrap";
import "../styles/index.css"
class ListTodos extends React.Component{
    constructor(){
        super();
        this.state={
           
        }
    }
    render(){
        let {deleteTodo} = this.props; 
        let {updateTodo} = this.props;
        let {items} = this.props;
        return (
            <>
              <ul className = "lists" style={{padding: "10px"}} >
              {items.map((item)=>(
                <li>
                      <span style={{padding: "16px"}} 
                      onClick={()=>{
                          updateTodo(item)
                      }}
                      style={{textDecoration : !item.active?"none":"line-through"}}
                      >{item.title}</span>
                      <Button className="btn btn-danger"
                      onClick = {()=>{
                          deleteTodo(item)
                      }}
                      >Delete task</Button>
                </li>
              ))}
              </ul>
            </>
        )
    }
}
export default ListTodos;