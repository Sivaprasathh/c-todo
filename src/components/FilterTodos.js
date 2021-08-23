import React from 'react';
import { Button } from "react-bootstrap";
import "../styles/index.css"
class FilterTodo extends React.Component{
    render(){
        let {filterTodos} = this.props;
        let {filterButtons} = this.props;
        return(
            <div className = "filterbtn">
            {filterButtons.map((filterButton)=>{
                return <Button className="btn-filter" onClick = {()=>{
                    filterTodos(filterButton)
                }}>
                { filterButton }</Button>
            })}
            </div>
        )
    }
}

export default FilterTodo