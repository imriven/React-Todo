import React from 'react';
import{ v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todos:[
        {
          task: 'Organize Garage',
          id: uuidv4(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: uuidv4(),
          completed: false
        }
      ],
      newToDo: "",
    }
  }

  addToDo = task => {
    const newItem = {
      task: task,
      id: uuidv4(),
      completed: false
    }
    this.setState({
      todos: this.state.todos.concat(newItem)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your TodoList App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm AddToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
