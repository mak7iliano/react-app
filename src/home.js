import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './i18n';

class Home extends Component {
    render() {
        const { t } = this.props;

        return (
            <div>
                <h1>{t('naviHome')}</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo mollitia saepe sequi voluptates. Consectetur cum iste porro, quae quas totam unde. Accusantium ad ea, inventore iste officiis quaerat repudiandae.
            </div>
        );
    }
}

export default translate('translations')(Home);