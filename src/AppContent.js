import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import UserList from './userList';
import UserView from './userView';

const PageHome = () => (
    <div>
        <h1>Home</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.
    </div>
);

const PageUsers = () => (
    <div>
        <UserList/>
    </div>
);

const PageUserView = ({match}) => (
    <div>
        <UserView userId={match.params.userId}/>
    </div>
);

const PageContacts = () => (
    <div>
        <h2>Contacts</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.<br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.
    </div>
);

class AppContent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="app-navigation">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>

                    <section className="app-content">
                        <Route exact path="/" component={PageHome} />
                        <Route exact path="/user" component={PageUsers} />
                        <Route path="/user/:userId" component={PageUserView} />
                        <Route path="/contacts" component={PageContacts} />
                    </section>
                </div>
            </Router>
        );
    }
}

export default AppContent;