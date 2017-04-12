/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class HeaderLogo extends Component {
    render() {
        const {logoSrc} = this.props;
        return (
            <div className="headerLogo">
                <span className="verticalAlignWrap">
                    <span className="verticalAlign">
                        <img src={logoSrc}/>
                    </span>
                </span>
                <style>{css}</style>
            </div>
        );
    }
}
HeaderLogo.propTypes = {
    logoSrc: PropTypes.string.isRequired
};

const css = `.headerLogo{
      width: 76px;
      height: 66px;
      background-color: #fff;
      text-align: center;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.6);
      padding: 2px;
      position:absolute;
      top:5px;
      left:5px;
    }
    
    .headerLogo img{
      max-width: 100%;
      max-height: 62px;
    }`;
