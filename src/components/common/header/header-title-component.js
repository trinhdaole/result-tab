/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class HeaderTitleComponent extends Component {
    render() {
        const {headerTitle} = this.props;
        return (
            <div className="headerSiteName">
          <span className="verticalAlignWrap">
            <span className="verticalAlign">{headerTitle}</span>
          </span>
                <style>{css}</style>
            </div>

        );
    }
}

HeaderTitleComponent.propTypes = {
    headerTitle: PropTypes.string
};

const css = `.headerSiteName{
      color: #fff;
      font-size: 13px;
      text-transform: uppercase;
      text-align: center;
      padding: 0 100px;
      height:70px;
      width:100%;
      position:absolute;
    }`;
