import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    addTrack() {
        if (this.todoInput.value) {
            this.props.onAddTodoElement(this.todoInput.value);
            this.todoInput.setAttribute('placeholder', 'Todo');
        } else {
            this.todoInput.setAttribute('placeholder', 'Specify name');
        }
        this.todoInput.value = '';
        this.todoInput.focus();
    }

    deleteTrack(event) {
        this.props.onDeleteTodoElement(event.target.getAttribute('name'));
    }

    render() {
        return (
            <div>
                <div className="app-todo-form">
                    <input type="text" placeholder="Todo" ref={(input) => {this.todoInput = input}} />
                    <button onClick={this.addTrack.bind(this)}>Add</button>
                </div>
                <ul className="app-user-list">
                    {this.props.todoStore.map((todoItem, index) =>
                        <li className="app-user-element" key={index}>
                            <div className="remove" name={todoItem} onClick={this.deleteTrack.bind(this)}>x</div>
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
        todoStore: state.todoList
    }),
    dispatch => ({
        onAddTodoElement: (todoItem) => {
            dispatch({type: 'ADD_TODO', payload: todoItem})
        },
        onDeleteTodoElement: (todoItem) => {
            dispatch({type: 'REMOVE_TODO', payload: todoItem})
        }
    })
)(Todo);