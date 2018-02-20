import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { translate } from 'react-i18next';
import './i18n';

import UserList from './userList';
import UserView from './userView';
import Contacts from './contacts';
import Todo from './todo';
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

class App extends Component {
    render() {
        const { t, i18n } = this.props;

        const PageHome = () => (
            <div>
                <h1>{t('naviHome')}</h1>
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
                component: PageHome
            },
            {
                link: routerPrefix + '/user',
                label: t('naviUsers'),
                exactLink: false,
                exactRoute: true,
                showInMenu: true,
                component: PageUsers
            },
            {
                link: routerPrefix + '/user/:userId',
                label: "User view",
                exactLink: false,
                exactRoute: false,
                showInMenu: false,
                component: PageUserView
            },
            {
                link: routerPrefix + '/todo',
                label: t('naviTodo'),
                exactLink: false,
                exactRoute: false,
                showInMenu: true,
                component: PageTodo
            },
            {
                link: routerPrefix + '/contacts',
                label: t('naviContacts'),
                exactLink: false,
                exactRoute: false,
                showInMenu: true,
                component: PageContacts
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