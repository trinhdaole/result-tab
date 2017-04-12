/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";


export default class HeaderMenuButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        this.props.menuComponentShow();
    }

    render() {
        const {menuBgColor, menuTextColor} = this.props;
        return (
            <div className="headerMenuWrap">
                <a onClick={this.showMenu} className="nav-toggle open-nav"
                   style={{backgroundColor: menuBgColor, color: menuTextColor}}>MENU <i className="fa fa-bars"
                                                                                        aria-hidden="true"/></a>
                  <style>{css}</style>
            </div>

        );
    }
}

HeaderMenuButtonComponent.propTypes = {
    menuBgColor: PropTypes.string,
    menuTextColor: PropTypes.string,
    menuComponentShow: PropTypes.func

};

const css = `.headerMenuWrap{
      height:76px;
      width:77px;
      position:absolute;
      right:5px;
      top:0;
    }
    
    .headerMenuWrap > a{
      margin-top: 19px;
      margin-right: 3px;
      display: block;
      z-index: 2;
      text-decoration: none;
      padding: 8px;
      background: rgba(0,0,0,.8);
      font-size: 14px;
      font-weight: 400;
      border-radius: 3px;
      -webkit-transition: .35s;
      transition: .35s;
    }`;

