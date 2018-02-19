import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './i18n';


class AppHeader extends Component {
    render() {
        const { i18n } = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        }

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

export default translate('translations')(AppHeader);