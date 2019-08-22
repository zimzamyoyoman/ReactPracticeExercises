import React, { Component } from 'react'
import ToDo from './ToDo'
import NewToDoForm from './NewToDoForm'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
    }

    addToDo(todo) {
        this.setState(st => ({
            todos: [...st.todos, todo]
        }))
    }

    removeToDo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {

        const ToDos = this.state.todos.map(todo => (
            <ToDo
                key={todo.id}
                todo={todo.todo}
                id={todo.id}
                removeToDo={this.removeToDo}
            />
        ))

        return (
            <div>
                <h1> TO DO LIST </h1>
                <NewToDoForm addToDo={this.addToDo} />
                <ul>
                    {ToDos}
                </ul>

            </div>
        )
    }
}

export default ToDoList;