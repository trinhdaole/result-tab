/**
 * The Loading component
 *
 * @author rocachien
 * @company NEXLE
 * @create 2017/02/15 15:49
 * @update 2017/02/15 16:39
 * @file components/common/loading-component.js
 *
 * @param timeout: Number default 120000ms
 *
 */
"use strict";

import React from "react";
import ImgLoading from "react-loading";

export default class Loading extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.timeout = null;
        this.loaded = false;
    }

    componentDidMount() {
        this.loaded = true;
    }

    componentWillUnmount() {
        this.closed = true;
    }

    hide() {
        if(window && window.scrollOn) window.scrollOn();

        this.setState({loading: false});
        clearTimeout(this.timeout);
    }

    show() {
        if(window && window.scrollOff) window.scrollOff();

        if (!this.loaded) return false;

        this.setState({loading: true});
        if (!this.timeout) {
            this.timeout = setTimeout(() => {
                if (!this.closed) {
                    this.setState({loading: false});
                }
            }, this.props.timeout);
        }
    }

    render() {

        let display = (this.state.loading == true) ? {"display": "block"} : {"display": "none"};

        return (
            <div className="loadingContainer" style={display}>
                <ImgLoading timeout={this.props.timeout} height={30} width={30} type="spokes"/>
                <style>{css}</style>
            </div>
        );
    }
}

Loading.propTypes = {
    timeout: React.PropTypes.number
};
Loading.defaultProps = {
    timeout: 12000
};
const css = `
    .loadingContainer {
        width: 100%;
        height: 100%;
        display: none;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        position: fixed;
        z-index: 2000;
        padding-left: 45%;
        padding-top: 45%;
        background: rgba(72, 71, 71, 0.67);
    }
`;
