/**
 * @copyright 2017 @ NEXLE
 * @author long-ios
 * @create 2017/03/06 14:44
 * @update 2017/03/06 17:44
 * @file common/avatar/avatar-component.js
 */
"use strict";

import React, {Component, PropTypes} from "react";

/**
 * @desc This is Avatar component.
 * @example
 *
 */

export default class Avatar extends Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);


    }

    render() {
        const {titleImg, srcImg, desStyle, desc, imgStyle, imgWrapperStyle} = this.props;
        return (
            <div className="sl-playerimage">
                <div style={imgWrapperStyle}>
                    <img alt={titleImg} title={titleImg} src={srcImg} style={imgStyle}/>
                </div>
                <div className="leader-txt" style={desStyle}>{desc}</div>
                <style>{css}</style>
            </div>
        );
    }
}

Avatar.propTypes = {
    srcImg: PropTypes.string,
    titleImg: PropTypes.string,
    imgWrapperStyle: PropTypes.object,
    imgStyle: PropTypes.object,
    desStyle: PropTypes.object,
    desc: PropTypes.string,
};

Avatar.defaultProps = {
    srcImg: 'http://www-static.spulsecdn.net/images/statleader_placeholder.png',
    titleImg: '',
    desStyle: {},
    desc: ''
};

const css = `
    .sl-playerimage {
        flex: 1;
    } img {
        border-style: none;
    }
    .leader-txt {
        background-color: #979797;
        color: #fff;
        font-size: 9px;
        line-height: 12px;
        padding: 2px 0;
        text-transform: uppercase;
        text-align: center;
    }
   
`;
