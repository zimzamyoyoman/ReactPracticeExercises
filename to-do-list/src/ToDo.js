import React, { Component } from 'react'
import "./ToDo.css"

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = { isEditing: false, newToDo: this.props.todo };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeToDo(this.props.id);
    }

    handleClick() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleEdit(evt) {
        evt.preventDefault();
        this.props.updateToDo(this.props.id, this.state.newToDo);
        this.setState({ isEditing: false });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleToggle() {
        this.props.toggleToDo(this.props.id);
    }

    render() {

        let result;

        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleEdit} >
                        <input type="text" name="newToDo" value={this.state.newToDo} onChange={this.handleChange} />
                        <button> Save </button>
                    </form>

                </div>
            )
        }

        else result = (
            <div className="Todo">
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}> {this.props.todo} </li>
                <div className="Todo-buttons">
                    <button onClick={this.handleClick}> <i class="fas fa-pen" /> </button>
                    <button onClick={this.handleRemove}> <i class="fas fa-trash" /> </button>
                </div>
            </div>
        )

        return result;
    }
}

export default ToDo;