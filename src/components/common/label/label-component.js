/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class LabelComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="labelText" style={this.props.style}>
                {this.props.text}
                <style>{css}</style>
            </p>
        );
    }
}

LabelComponent.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
};

const css = `
    .labelText{
        font-size: 18px;
        font-weight: bold;
        margin: 0;
    }
`;
