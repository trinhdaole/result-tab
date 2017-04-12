/**
 *
 */

'use strict';

import React, {Component, PropTypes} from "react";
import MenuItem from "./menu-item-component";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(item, index) {
        if(window.scrollOn()){
            window.scrollOn();
        }

        this.props.onClick(item, index);
    }

    render() {
        const {list} = this.props;
        if (list && list.length>0) {
            return (
                <ul className="menuItemContainer">
                    {
                        list.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    index={index}
                                    item={item}
                                    onClick={this.onClick}
                                />
                            );
                        })
                    }

                    <style>{css}</style>
                </ul>
            );
        }
        return false;
    }
}

Menu.propTypes = {
    onClick: PropTypes.func,
    list: PropTypes.array
};

const css = `

    .menuItemContainer{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    .menuItemContainer li{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    

    .menuItemContainer li a{
      text-decoration:none;
      float: left;
      width: 100%;
      padding: 14px 26px;
      font-size: 16px;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid #4e4e4e;
      min-width: 300px; 
    }
     .menuItemContainer li a:link {
      color: #444;
    }
    .menuItemContainer li a:visited {
      color: #444;
    }
    .menuItemContainer li a:hover {
      //color: #444;
    }
    .menuItemContainer li a:active {
      color: #444;
    }
    
`;
