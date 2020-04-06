import React from "react"
import "./Todo.css";


class Todo extends React.Component {
    render() {
        return(
        <p onClick={() => this.props.toggleComplete(this.props.todo.id) } className={this.props.todo.completed ? "strike" : "" }>{this.props.todo.task}</p>
        )
    }
}
export default Todo;