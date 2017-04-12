/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";
import MatchRow from "./match-row-component";
import * as UrlService from "../../../services/url-service";
import * as CommonUtils from "../../../utils/common-utils";
import {browserHistory} from "react-router";
import * as URL from "../../../constant/router-constant";
import DateTime from "../../common/datetime/datetime-component";
import _ from 'lodash';

export default class MatchListComponent extends Component {
    constructor(props) {
        super(props);
    }

    selectMatch(props, match) {



        let url = UrlService.setToUrl(match.comp_id, match.round_id, props.pool?props.pool:0, 'MATCH');
        browserHistory.push(URL.MATCH_CENTRE_URL + url + "&fixture=" + match.compmatch_id);

    }

    buildMatchDate(matches) {


        let dateStr = [];
        if (matches && matches.length > 0 && matches[0].match_date) {
            matches.forEach((mat, index)=>{
                dateStr.push(CommonUtils.getFormattedDate(mat.match_date, 'ddd MMM DD YYYY'));
            });
        }
        // create unique date array
        let uniqDate = [];
        if(dateStr.length){
            dateStr.forEach((date,idx)=>{
                if (uniqDate.indexOf(date) < 0){
                    uniqDate.push(date);
                }
            });
        }

        return uniqDate;

    }

    sortByeMatch(matches=[]){


        let tmp = _.cloneDeep(matches);
        if(tmp.length){
            for(let item of tmp){
                if(item.team1_name == '' || item.team2_name == ''){
                    tmp.splice(tmp.indexOf(item),1);
                    tmp.push(item);
                }
            }
        }
        return tmp;

    }

    render() {


        let {matches} = this.props;
        let matchDate = this.buildMatchDate(matches);
        let newMatches = this.sortByeMatch(matches);

        if (newMatches.length > 0) {
            return (
                <div className="result-container">
                    <div className="day-wrap">
                        {matchDate.map((matchdate, i)=>{
                            return (<div key={i}>
                                <div className="match-date"><DateTime type={"RESULT_DATE"} date={matchdate} /></div>
                                {newMatches.map((match, index) => {
                                    let handleClick = () => this.selectMatch(this.props, match);
                                    if(CommonUtils.getFormattedDate(match.match_date, 'ddd MMM DD YYYY') == matchdate)
                                        return (
                                            <div key={index}>
                                                {(match.match_name && match.match_name.length)?
                                                    <div className="match-name">{match.match_name}</div>:null}
                                                <MatchRow
                                                    match={match}
                                                    onClick={handleClick}
                                                />
                                            </div>
                                        );
                                })}
                            </div>);
                        })}


                    </div>
                    <style>{css}</style>
                </div>
            );
        }
        return null;

    }

}

MatchListComponent.propTypes = {
    pool:PropTypes.number,
    matches: PropTypes.array.isRequired,
    onClick: PropTypes.func
};

const css = `
    .result-container {
        font-family: Open Sans,sans-serif;
        background-color: #fff;
        font-size: 16px
    }

    .day-wrap {
        width: 100%;
    }

    .match-date {
        color: #fff;
        font-size: 11px;
        background-color: #979797;
        padding: 10px 15px;
    }
    .match-name {
        height: 22px;
        color: #fff;
        font-size: 11px;
        background-color: #787b85;
        padding: 5px 0;
        text-indent: 15px;
    }
`;
