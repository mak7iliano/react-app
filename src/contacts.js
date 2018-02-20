import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.onSaveEmail(this.state.email);
        this.setState ({email: ''});
    }

    handleUnsubscribe () {
        this.props.onDeleteEmail();
    }

    handleEmailChange (event) {
        this.setState ({email: event.target.value});
    }

    render() {
        return (
            <div>
                <h2>Contacts</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.<br />
                <br />
                <br />


                {this.props.emailStore ?
                    <div className="app-form">
                        <div className="form-message">
                            You are subscribed to the newsletter!
                            <span className="email">Your email is <strong>{this.props.emailStore}</strong></span>
                        </div>
                        <div className="form-element">
                            <button onClick={this.handleUnsubscribe}>Unsubscribe</button>
                        </div>
                    </div>
                    :
                    <form onSubmit={this.handleSubmit} className="app-form">
                        <div className="form-element">
                            <input type="email" placeholder="Your email" value={this.state.email} onChange={this.handleEmailChange} required />
                        </div>
                        <div className="form-element">
                            <button>Subscribe</button>
                        </div>
                    </form>
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        emailStore: state.userEmail
    }),
    dispatch => ({
        onSaveEmail: (userEmail) => {
            dispatch({type: 'ADD_USER_EMAIL', payload: userEmail})
        },
        onDeleteEmail: () => {
            dispatch({type: 'REMOVE_USER_EMAIL'})
        }
    })
)(Contacts);