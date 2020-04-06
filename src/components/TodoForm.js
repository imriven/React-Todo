import React from  "react"

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

        render() {
        return(
            <>
                   <input
          type="text"
          name="item"
          placeholder="Add Your Todo's!!"
          value={this.state.newToDo}
          onChange={this.handleChanges}
        />
        <button onClick={(e) => this.props.AddToDo(this.state.newToDo)}>Add Todo</button>
        <button onClick={this.handleClear}>Clear Completed</button>
        
      </>
          
        )
    }
}


export default TodoForm;