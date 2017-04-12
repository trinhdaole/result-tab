/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class HeaderBanner extends React.Component {
    render() {
        const {headerBanner} = this.props;
        return (
            <div className="headerBanner">
                <img src={headerBanner} alt=""/>
                <style>{css}</style>
            </div>
        );
    }
}

const css = `.headerBanner{
        width:100%;
      }
    
     .headerBanner img{
      max-width:100%;
      width:100%;
    }`;

HeaderBanner.propTypes = {
    headerBanner: PropTypes.string
};
