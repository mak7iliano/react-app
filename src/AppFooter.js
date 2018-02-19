import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './i18n';

class AppFooter extends Component {
    render() {
        const { t } = this.props;

        return (
            <footer className="app-footer">{t('footerRights')} &copy; 2018</footer>
        );
    }
}

export default translate('translations')(AppFooter);