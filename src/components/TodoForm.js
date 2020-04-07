import React from  "react"
import Styled from "styled-components"

/**** Styles ****/

const AwesomeInput = Styled.input `
display:flex;
justify-content:center;
text-align: center;
font-family: 'Comic Neue', cursive;
color:black;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px solid black;
padding: .5% 3%;
width: 20%;
height: 15%;
margin-top: 1.5%;
text-shadow: 2px 2px 2px lightGray;
outline:none;
`

const ContainerDiv = Styled.div`
display:flex;
justify-content: center;
text-align: center;
width: 95%;
margin: 2%;
`

const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px gray;
height: 40%;
border-radius: 15px;
font-size: .7em;
margin: 1% 1%;
`


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDo:""
        }
    }
        handleChanges = e => {
            e.preventDefault();
            this.setState({newToDo: e.target.value})
        }

        handleAdd = e => {
            this.props.AddToDo(this.state.newToDo)
            this.setState({newToDo:""})
        }

        handleKeyDown = e => {
            if (e.key === 'Enter') {
                this.props.AddToDo(this.state.newToDo)
                this.setState({newToDo:""})
            }
        }

        render() {
        return(
            <ContainerDiv>
                   <AwesomeInput
          type="text"
          name="item"
          placeholder="Add Your Todo's!!"
          value={this.state.newToDo}
          onChange={this.handleChanges}
          onKeyDown={this.handleKeyDown}
        />
        <AwesomeButton onClick={this.handleAdd}>Add Todo</AwesomeButton>
        <AwesomeButton onClick={() => this.props.clearComplete()}>Clear Completed</AwesomeButton>
        
      </ContainerDiv>
          
        )
    }
}


export default TodoForm;