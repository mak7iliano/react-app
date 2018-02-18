import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import UserList from './userList';
import UserView from './userView';
import Contacts from './contacts';
import Todo from './todo';

const PageHome = () => (
    <div>
        <h1>Home</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.
    </div>
);

const PageUsers = () => (
    <div>
        <UserList />
    </div>
);

const PageUserView = ({match}) => (
    <div>
        <UserView userId={Number(match.params.userId)} />
    </div>
);

const PageContacts = () => (
    <div>
        <Contacts />
    </div>
);

const PageTodo = () => (
    <div>
        <Todo />
    </div>
);

const menu = [
    {
        link: '/',
        label: "Home",
        exactLink: true,
        exactRoute: true,
        showInMenu: true,
        component: PageHome
    },
    {
        link: '/user',
        label: "Users",
        exactLink: false,
        exactRoute: true,
        showInMenu: true,
        component: PageUsers
    },
    {
        link: '/user/:userId',
        label: "User view",
        exactLink: false,
        exactRoute: false,
        showInMenu: false,
        component: PageUserView
    },
    {
        link: '/todo',
        label: "Todo",
        exactLink: false,
        exactRoute: false,
        showInMenu: true,
        component: PageTodo
    },
    {
        link: '/contacts',
        label: "Contacts",
        exactLink: false,
        exactRoute: false,
        showInMenu: true,
        component: PageContacts
    }
];

class AppContent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="app-navigation">
                        {menu.map((item, index) =>
                            <li key={index}>
                                {item.showInMenu &&
                                    <NavLink exact={item.exactLink} to={item.link}>{item.label}</NavLink>
                                }
                            </li>
                        )}
                    </ul>

                    <section className="app-content">
                        {menu.map((item, index) =>
                            <Route exact={item.exactRoute} path={item.link} component={item.component} key={index} />
                        )}
                    </section>
                </div>
            </Router>
        );
    }
}

export default AppContent;