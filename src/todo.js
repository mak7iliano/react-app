import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
        this.trackInput.focus();
    }

    deleteTrack(event) {
        this.props.onDeleteTrack(event.target.getAttribute('name'));
    }

    render() {
        return (
            <div>
                <div className="app-todo-form">
                    <input type="text" placeholder="Todo" ref={(input) => {this.trackInput = input}} />
                    <button onClick={this.addTrack.bind(this)}>Add</button>
                </div>
                <ul className="app-user-list">
                    {this.props.testStore.map((track, index) =>
                        <li className="app-user-element" key={index}>
                            <div className="remove" name={track} onClick={this.deleteTrack.bind(this)}>x</div>
                            {track}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        },
        onDeleteTrack: (trackName) => {
            dispatch({type: 'REMOVE_TRACK', payload: trackName})
        }
    })
)(Todo);