/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";
import Label from "../label/label-component";
import * as CommonUtils from "../../../utils/common-utils";

export default class PanelComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderRightLink() {
        const {rightLink} = this.props;
        if (CommonUtils.isObjectUndefinedOrNull(this.props.rightLink)) {
            return null;
        }

        return (

            <a href={rightLink.url}
               className="panelLink"
               style={rightLink.rightLinkStyle}
               target={rightLink.target}>
                {rightLink.title}

            </a>
        );
    }

    renderHeader() {
        const {panelStyle} = this.props;
        if (!CommonUtils.isEmptyString(this.props.title)) {
            return (
                <div className="panelHead clearfix" style={panelStyle ? panelStyle.headerStyle : null}>
                    <div className="panelTitle">
                        <Label
                            text={this.props.title.title}
                            style={this.props.title.style}/>
                    </div>
                    {this.renderRightLink()}
                </div>
            );
        }

        return null;
    }

    render() {
        const {panelStyle} = this.props;
        return (
            <div className="panelContainer" style={panelStyle ? panelStyle.containerStyle : null}>
                {this.renderHeader()}

                <div className="panelBody" style={panelStyle ? panelStyle.bodyStyle : null}>
                    {this.props.content}
                </div>

                <style>{css}</style>
            </div>
        );
    }
}

PanelComponent.propTypes = {
    title: PropTypes.object,
    content: PropTypes.object,
    rightLink: PropTypes.object,
    titleStyle: PropTypes.object,
    rightLinkStyle: PropTypes.object,
    panelStyle: PropTypes.object,

};

const css = `
    .panelContainer{
        width:100%;
        overflow:hidden;
    }
    
    .panelHead{
        background-color:#fcd000;
    }
    
    .panelTitle{
        float:left;
        width:74%;
    }
    .panelTitle p{
        font-size:20px;
    }
    .panelLink{
        width:26%;
        float:right;
        text-align:right;
        font-size:10px;
        color:#00075c;
        text-decoration:underline;
        line-height:28px;
        font-weight: bold;
    }
    
    .panelBody{
        padding:10px;
        background-color:white;
    }
`;
