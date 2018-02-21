import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {withRouter} from "react-router-dom";
import './i18n';

class AppHeader extends Component {
    render() {
        const langList = ['en', 'ru'];
        const { i18n } = this.props;

        var routerPath = this.props.location.pathname;
        let routeLang;

        if (langList.indexOf(routerPath.split('/')[1]) === -1) {
            routeLang = 'en';
        } else {
            routeLang = routerPath.split('/')[1];
        }

        if (routeLang !== i18n.language) {
            i18n.changeLanguage(routeLang);
        }

        const changeLanguage = (lng) => {
            let currentLang = i18n.language;
            i18n.changeLanguage(lng);

            if (currentLang !== lng) {
                if (i18n.language === 'en') {
                    routerPath = routerPath.replace('/'+currentLang, '');
                } else {
                    routerPath = '/' + i18n.language + routerPath;
                }

                this.props.history.push(routerPath);
            }
        };

        return (
            <header className="app-header">
                <div className="header-mainer">
                    <div className="lang-buttons">
                        <button className="en" data-selected={i18n.language === 'en'} onClick={() => changeLanguage('en')}></button>
                        <button className="ru" data-selected={i18n.language === 'ru'} onClick={() => changeLanguage('ru')}></button>
                    </div>
                    React App
                </div>
            </header>
        );
    }
}

export default withRouter(translate('translations')(AppHeader));