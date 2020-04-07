import React from "react"
import "./Todo.css";
import Styled from "styled-components"

/***Styles***/
const ItemP = Styled.p`
padding: 1% 0;
font-family: 'Comic Neue', cursive;

`
/********/

class Todo extends React.Component {
    render() {
        return(
        <ItemP onClick={() => this.props.toggleComplete(this.props.todo.id) } className={this.props.todo.completed ? "strike" : "" }>{this.props.todo.task}</ItemP>
        )
    }
}
export default Todo;