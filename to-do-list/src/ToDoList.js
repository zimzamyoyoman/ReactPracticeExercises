import React, { Component } from 'react'
import ToDo from './ToDo'
import NewToDoForm from './NewToDoForm'
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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

    updateToDo(id, newToDo) {
        const updateToDos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todo: newToDo }
            }

            else return todo;
        });

        this.setState({ todos: updateToDos });
    }

    toggleCompletion(id) {
        const updateToDos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }

            else return todo;
        });

        this.setState({ todos: updateToDos });
    }

    render() {

        const ToDos = this.state.todos.map(todo => (
            <ToDo
                key={todo.id}
                todo={todo.todo}
                id={todo.id}
                removeToDo={this.removeToDo}
                updateToDo={this.updateToDo}
                completed={todo.completed}
                toggleToDo={this.toggleCompletion}
            />
        ))

        return (
            <div className="ToDoList">
                <h1>
                    ToDo List! <span> A Simple React ToDo List App. </span>
                </h1>
                <ul>
                    {ToDos}
                </ul>
                <NewToDoForm addToDo={this.addToDo} />

            </div>
        )
    }
}

export default ToDoList;