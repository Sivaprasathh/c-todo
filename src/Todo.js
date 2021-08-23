import React from "react";
import InputTodo from "./components/InputTodo";
import FilterTodo from "./components/FilterTodos";
import ListTodos from "./components/ListTodos";
import "../src/styles/index.css"
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        
      ],
      alltodo :[]
    };
  }
  deleteTodo = (todo) => {
    let delIndex = this.state.todos.indexOf(todo);
    let prevArray = [...this.state.todos]
    let delArr = this.state.todos.filter((todo, index) => {
      return index !== delIndex;
    });
    this.setState({
      todos: delArr,
      alltodo:prevArray
    });
  };

  updateTodo =(todo)=>{
    let updateIndex = this.state.todos.indexOf(todo);
    let prevArr = [...this.state.todos];
    prevArr[updateIndex].active =  !prevArr[updateIndex].active
    
    this.setState({
        todos:prevArr,
        alltodo:prevArr
    })
  }

  addTodo = (title) => {
    let todo = {
      title,
      status:1,
    };
    let newArr = [...this.state.todos, todo];
    this.setState({
      todos: newArr,
      alltodo:newArr
    });
    title = '';
  };
   filterTodos = (filter) =>{
       switch(filter){
           case "active":
               let activetodos = this.state.todos.filter((todo)=> !todo.active)
               this.setState({
                   todos:activetodos
               })
               break;
               case "completed":
                let completedtodos = this.state.alltodo.filter((todo)=> todo.active)
                this.setState({
                    todos:completedtodos
                })
                break;
                default:
                    this.setState({
                        todos:[...this.state.alltodo]
                    })

       }
   }

  render() {
    return (
      <div className = "home">
        <InputTodo addTodo={this.addTodo} />
        <ListTodos items={this.state.todos} deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo} />
        <FilterTodo filterButtons = {["All","active","completed"]}
                    filterTodos = {this.filterTodos}
        />
      </div>
    );
  }
}
export default Todo;
