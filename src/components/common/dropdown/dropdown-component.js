/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class DropdownComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {small, text, onClick} = this.props;
        let itemClass = small ? 'small-item' : '';
        let itemText = text || '';

        return (
            <div className="select-item"
                 onClick={onClick}>
                <span className={itemClass}>{itemText}</span><i className="fa fa-caret-down icon" aria-hidden="true"/>
                <style>{css}</style>
            </div>
        );
    }
}

DropdownComponent.propTypes = {
    small: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

const css = `
    .select-item {
      background: #111;
      border: none;
      border-bottom: 1px solid #565758;
      color: #fff;
      cursor: pointer;
      font-family: Open Sans,sans-serif;
      font-size: 19px;
      height: 45px;
      line-height: 45px;
      text-indent: 10px;
      width: 100%;
      -webkit-appearance: none;
      padding: 0 10px;
      -webkit-border-radius: 0;
    }  
   
   .select-item span {
      display: inline-block;
      overflow: hidden;
      text-indent: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 75%;
    }
  
    .icon {
      float: right;
      margin: 12px;
      padding: 0;
      font-size: 20px;
      display: inline-block;
    }

    .small-item {
        font-size: 14px;
        color: #d3d4d6;
    }
`;

