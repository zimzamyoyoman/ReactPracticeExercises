import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {todo: ""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({todo: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newToDo = {...this.state, id: uuid()}
        this.props.addToDo(newToDo);
        this.setState({todo: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo"> New ToDo</label>
                <input 
                    type="text"
                    name="todo"
                    id="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    />
                    <button> Add ToDo </button>
            </form>
        )
    }
}

export default NewToDoForm;