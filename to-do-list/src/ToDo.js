import React, { Component } from 'react'
import "./ToDo.css"

class ToDo extends Component {
    
    constructor(props) {
        super(props);
        this.handleRemove=this.handleRemove.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
    }

    handleRemove() {
        this.props.removeToDo(this.props.id);
    }

    handleEdit() {

    }


    render() {
        return (
            <div className="ToDo"> 
                <li> {this.props.todo} </li>
                <button onClick={this.handleEdit}> EDIT </button>
                <button onClick={this.handleRemove}> X </button>
            </div>
        )
    }
}

export default ToDo;