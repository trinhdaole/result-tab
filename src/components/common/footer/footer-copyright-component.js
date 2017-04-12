/**
 * The footer copyright component
 *
 * @author rocachien
 * @company NEXLE
 * @create 2017/01/20 16:30
 * @update 2017/01/20 16:39
 * @file components/footer/footer-copyright-component.js
 *
 */
"use strict";

import React from 'react';

export default class FooterCopyright extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="copyright">{this.props.copyright}</div>
        );
    }
}

FooterCopyright.propTypes = {
    copyright: React.PropTypes.string.isRequired
};