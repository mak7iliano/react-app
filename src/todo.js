import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    addTrack() {
        if (this.refs.todoInput.value) {
            this.props.onAddTodoElement(this.refs.todoInput.value);
            this.refs.todoInput.setAttribute('placeholder', 'Todo');
        } else {
            this.refs.todoInput.setAttribute('placeholder', 'Specify name');
        }
        this.refs.todoInput.value = '';
        this.refs.todoInput.focus();
    }

    deleteTrack(event) {
        this.props.onDeleteTodoElement(event.target.getAttribute('name'));
    }

    editTrack (event) {
        let newName= prompt("Edit name", event.target.getAttribute('name'));
        if (newName && newName !== event.target.getAttribute('name')) {
            this.props.onEditTodoElement(event.target.getAttribute('name'), newName);
        }

    }

    render() {
        return (
            <div>
                <div className="app-todo-form">
                    <input type="text" placeholder="Todo" ref="todoInput" />
                    <button onClick={this.addTrack.bind(this)}>Add</button>
                </div>
                <ul className="app-user-list">
                    {this.props.todoStore.map((todoItem, index) =>
                        <li className="app-user-element" key={index}>
                            <div className="remove" name={todoItem} onClick={this.deleteTrack.bind(this)}>x</div>
                            <div className="edit" name={todoItem} onClick={this.editTrack.bind(this)}>&#x270e;</div>
                            {todoItem}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        todoStore: state.todo
    }),
    dispatch => ({
        onAddTodoElement: (todoItem) => {
            dispatch({type: 'ADD_TODO', payload: todoItem})
        },
        onDeleteTodoElement: (todoItem) => {
            dispatch({type: 'REMOVE_TODO', payload: todoItem})
        },
        onEditTodoElement: (todoItem, newName) => {
            dispatch({type: 'EDIT_TODO', payload: todoItem, newName: newName})
        }
    })
)(Todo);