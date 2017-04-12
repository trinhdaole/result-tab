/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);


        this.onClick = this.onClick.bind(this);

    }

    onClick() {


        this.props.onClick();

    }

    render() {


        const {text, style} = this.props;
        return (
            <button onClick={this.onClick} className="buttonWrapper" style={style}>
                {text}
                <style>{css}</style>
            </button>

        );

    }
}

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func
};

ButtonComponent.defaultTypes = {
    text: "Submit"
};

const css = `.buttonWrapper{
  font-family: ‘Roboto’, sans-serif;
  letter-spacing: -0.1px;
  font-size: 15px;
  height:44px;
  width:100%;
  padding-left:20px;
  padding-right:20px;
  border-radius:4px;
  background-color:#00B0FF;
  border:none;
  color:white;
}`;
