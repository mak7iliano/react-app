import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { translate } from 'react-i18next';
import './i18n';

import UserList from './userList';
import UserView from './userView';
import Contacts from './contacts';
import Todo from './todo';
import Home from './home';
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

class App extends Component {
    render() {
        const { t, i18n } = this.props;

        var routerPrefix = '';
        if (i18n.language !== 'en') {
            routerPrefix = '/'+i18n.language;
        }

        const menu = [
            {
                link: routerPrefix + '/',
                label: t('naviHome'),
                exactLink: true,
                exactRoute: true,
                showInMenu: true,
                component: Home
            },
            {
                link: routerPrefix + '/user',
                label: t('naviUsers'),
                exactLink: false,
                exactRoute: true,
                showInMenu: true,
                component: UserList
            },
            {
                link: routerPrefix + '/user/:userId',
                label: "User view",
                exactLink: false,
                exactRoute: false,
                showInMenu: false,
                component: UserView
            },
            {
                link: routerPrefix + '/todo',
                label: t('naviTodo'),
                exactLink: false,
                exactRoute: false,
                showInMenu: true,
                component: Todo
            },
            {
                link: routerPrefix + '/contacts',
                label: t('naviContacts'),
                exactLink: false,
                exactRoute: false,
                showInMenu: true,
                component: Contacts
            }
        ];

        return (
            <Router>
                <div>
                    <AppHeader />

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

                    <AppFooter />
                </div>
            </Router>
        );
    }
}

export default translate('translations')(App);