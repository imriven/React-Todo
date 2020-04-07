import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Styled from "styled-components"
import './App.css'
import Background from "./images/postit-scrabble-to-do-todo-3299.jpg"

/****Styles****/

const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background});
background-size:cover;
height: 100vh;
`
const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
text-align: center;
width: 80%;
`

const ExcellentHeader = Styled.h1 `
font-family: 'Poppins', sans-serif;
padding: 2%;
margin-top: 30%;
color: black;
font-size: 1.5em;
`

/************/

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: uuidv4(),
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: uuidv4(),
          completed: true,
        },
      ]
    };
  }

  addToDo = (task) => {
    const newItem = {
      task: task,
      id: uuidv4(),
      completed: false,
    };
    this.setState({
      todos: this.state.todos.concat(newItem),
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      }),
    });
  };

  clearComplete = () => {
    const unfinishedItems = this.state.todos.filter(todo => !todo.completed )
    this.setState({todos: unfinishedItems})
  }

  render() {
    return (
      <ImageBackground>
        <ContainerDiv>
        <ExcellentHeader>Welcome To The TodoList App!</ExcellentHeader>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm AddToDo={this.addToDo} clearComplete={this.clearComplete} />
      </ContainerDiv>
      </ImageBackground>
    );
  }
}

export default App;
