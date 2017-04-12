/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";
import TextComponent from "../text/text-component";


export default class ScoreVersusComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.style}>
                <TextComponent text={this.props.textA}/>
                <TextComponent text={this.props.textDivider}/>
                <TextComponent text={this.props.textB}/>
            </div>
        );
    }
}

ScoreVersusComponent.propTypes = {
    textA: PropTypes.string,
    textB: PropTypes.string,
    textDivider: PropTypes.string,
    style: PropTypes.object
};

ScoreVersusComponent.defaultProps = {
    textA: '0',
    textB: '0',
    textDivider: '-',

};