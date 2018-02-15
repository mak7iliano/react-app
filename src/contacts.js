import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.HandleEmailChange = this.HandleEmailChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log('form submit');
    }

    HandleEmailChange (event) {
        console.log('email was change');
        this.setState ({email: event.target.value});
    }

    render() {
        return (
            <div>
                <h2>Contacts</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.<br />
                <br />
                <br />
                <form onSubmit={this.handleSubmit} className="app-form">
                    <div className="form-element">
                        <input type="email" placeholder="Your email" value={this.state.email} onChange={this.HandleEmailChange} required />
                    </div>
                    <div className="form-element">
                        <button>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contacts;