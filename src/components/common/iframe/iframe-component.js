"use strict";

import React, {Component, PropTypes} from "react";

export default class IframeComponent extends Component {

    render() {
        const {id, sandbox} = this.props;
        return React.createElement("iframe", {
            id: id,
            sandbox: sandbox,
            frameBorder: "0",
            src: this.props.url,
            srcDoc: this.props.srcDoc,
            style: {position: this.props.position, height: this.props.height, width: this.props.width},
            height: this.props.height, width: this.props.width,
            scrolling: "no"
        });
    }
}

IframeComponent.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    srcDoc: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    position: PropTypes.string,
    sandbox: PropTypes.string
};

IframeComponent.defaultProps = {
    url:"http://websites.sportstg.com/assoc_page.cgi?c=0-2307-0-0-0&a=HEADER",
    height: "100vh",
    width: "100vw",
    position: "related",
    sandbox: "allow-same-origin allow-scripts allow-popups allow-forms"
};
