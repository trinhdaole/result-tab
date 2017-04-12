"use strict";

import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router";
import * as UrlService from "../../../services/url-service";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as URL from "../../../constant/router-constant";
import * as URLUtils from '../../../utils/url-utils';


export default class NavigationComponent extends Component {
    constructor(props) {
        super(props);

        this.goto = this.goto.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            query:this.props.query,
        };

    }

    componentWillReceiveProps(nextProps){

        const {query} = nextProps;
        this.setState({
            query:query,
        });
        // console.log('nextProps.itemIndex');
        // console.log(nextProps.itemIndex);
        // if(nextProps.itemIndex <= 3){
        //     this.previous();
        // }
    }

    previous() {
        const {action} = this.props;
        action.previous();
    }

    next() {
        const {action} = this.props;
        action.next();
    }

    goto(item, index) {
        const {onClickNavigation} = this.props;
        if(onClickNavigation){
            onClickNavigation(item,index);
        }else{
            const query = this.state.query;
            const objC = UrlService.parseParamC(query.c);
            let roundID = query.round || 0;
            let comp_id = objC.comp_id || 0;
            let param = UrlService.getParam(item.value);
            let currentPathName = URLUtils.location().pathname;

            if((param.pathName == URL.RESULT_URL || param.pathName == URL.FIXTURE_URL) && currentPathName == URL.MATCH_CENTRE_URL) {
                roundID = 0;
            }

            if (item && item.value) {
                let url = "" + param.pathName + UrlService.setToUrl(comp_id, roundID, query.pool?query.pool:0, param.a ? param.a : param.pathName);
                browserHistory.push(url);
            }
        }
    }

    renderArrow() {
        const {navigationList, size} = this.props;
        if (navigationList && navigationList[0]) {
            return (
                <div>
                    {(navigationList[0].index == 0) ? null :
                        <a id="nav_next" className="arrow leftArrow" onClick={this.previous}>
                            <i className="fa fa-angle-left" aria-hidden="true"/></a>}
                    {(navigationList[size - 1].index == navigationList.length - 1) ? null :
                        <a id="nav_back" className="arrow rightArrow" onClick={this.next}>
                            <i className="fa fa-angle-right" aria-hidden="true"/></a>
                    }

                </div>
            );
        }

        return null;
    }

    render() {
        const {navigationList, hideArrow, itemIndex} = this.props;
        let witdhUL = (hideArrow) ? {width: "100%", backgroundColor: "#ECC511"} : {};

        witdhUL.marginLeft = (itemIndex == 1) ? 0 : "5%";

        if (navigationList.length) {
            return (
                <div>

                    <div className="navigationContainer">
                        <ul className="naviList" style={witdhUL}>
                            {
                                navigationList.map((item, index)=> {
                                    let handleGoto = () => this.goto(item, index);
                                    let witdhLI = (hideArrow) ? {width: "30%"} : {};

                                    return (<li key={index} style={witdhLI}>
                                        <a onClick={handleGoto} className={(item.active) ? "active" : ""}
                                           style={witdhUL}>
                                            <span data-tag={item.value}>{item.label}</span>
                                        </a>
                                    </li>);
                                })
                            }

                        </ul>
                        <div> {(hideArrow != true) ? this.renderArrow() : null} </div>
                        <style>{css}</style>
                    </div>
                </div>
            );
        } else {
            return false;
        }

    }
}


NavigationComponent.propTypes = {
    navigationList: PropTypes.array.isRequired,
    action: PropTypes.object,
    hideArrow: PropTypes.bool,
    size: PropTypes.number,
    onClickNavigation: PropTypes.func,
    itemIndex: PropTypes.number,
    query: PropTypes.object,
};

NavigationComponent.defaultProps = {
    navigationList: [],
    hideArrow: false,
    size: 3
};

const css = `

    .navigationContainer{
      height:50px;
      background-color:#ECC511;
      overflow:hidden;
      position:relative;
    }

    .naviList{
      list-style:none;
      display: inline-block;
      height: 50px;
      overflow: hidden;
      width: 100%;
      margin-left: 5%;
      margin-right: 5%;
    }

    .naviList li{
      float:left;
      height:50px;
      width: 30%;
    }

    .naviList li a{
      display:table;
      text-align:center;
      float: left;
      font-size: 10px;
      letter-spacing: 1.3px;
      height: 50px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0 10px;
      width: 100%;
      color: #00105a;
      background-color:#ECC511;

    }

    .naviList li a.active{
      background-color:#fcd000;
    }

    .naviList li a span{
      display:table-cell;
      vertical-align:middle;
    }

    .arrow{
      position:absolute;
      background-color:#D1B018;
      padding: 2px 4px;
      z-index:10;
      height:50px;
      width: 8%;
      top:0;
      cursor: pointer;
      line-height: 50px;
      color:#00105a;
    }

    .arrow i{
        font-size: 28px;
        position: absolute;
        top: 10px;
        right: 50%;
        margin-right: -5px;
        color:#00105a;
    }

    .rightArrow{
      right:0;
    }
`;
