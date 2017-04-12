'use strict';

import React, {Component, PropTypes} from "react";
import * as CommonUtils from "../../../utils/common-utils";

export default class MatchRowComponent extends Component {
    constructor(props) {
        super(props);

        this.clickRow = this.clickRow.bind(this);
    }

    clickRow() {
        this.props.onClick(this.props.match);
    }

    render() {
        let time = CommonUtils.getFormattedDate(this.props.match.match_date, 'hh:mm A');

        if(this.props.match.team1_name == "" && this.props.match.team2_name == ""){
            return (
                <p>&nbsp;</p>
            );
        }else if ((this.props.match.team1_name == "") || (this.props.match.team2_name == "")) {
            let teamName = this.props.match.team1_name || this.props.match.team2_name;

            return (
                <div>
                    <a className="match-wrap" style={{borderBottom: "3px solid #bbbbbc"}}>
                        <div className="match-detail-container" style={{width: "calc(100% - 20px)"}}>
                            <div className="match-row m-1">
                                <div className="match-team">{teamName}</div>
                                <div className="match-detail"/>
                                <div className="homescore">Bye</div>
                            </div>
                        </div>
                    </a>
                    <style>{css}</style>
                </div>
            );
        } else {
            // Apply the rule: [PD] we've requested previously that if the venue is not known, or the name is reported as "TBA"  (or "TBD" in some end points), we need to show the string TBA.
            const venueName = (!this.props.match.venue_name || this.props.match.venue_name == "TBD") ? "TBA" : this.props.match.venue_name;

            return (
                <div>
                    <a className="match-wrap"
                       onClick={this.clickRow}>
                        <div className="match-detail-container">
                            <div className="match-row m-1">
                                <div className="match-team">{this.props.match.team1_name}</div>
                                <div className="match-detail">{CommonUtils.isEmptyString(this.props.match.match_status) ? time : ''}</div>
                                <div className="homescore">{CommonUtils.isEmptyString(this.props.match.match_status) ? '' : this.props.match.team1_final_score}</div>
                            </div>
                            <div className="match-row m-2">
                                <div className="match-vs">
                                    <div className="vstxtwrap">
                                        <div>
                                            <span className="livenow" style={{display: 'none'}}>Live</span>
                                            <span className="notlive">
                                            <div>
                                                <div>{CommonUtils.isEmptyString(this.props.match.match_status) ? 'vs' : 'final'}</div>
                                            </div>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="match-line"/>
                                <div className=""/>
                            </div>
                            <div className="match-row m-3">
                                <div className="match-team">{this.props.match.team2_name}</div>
                                <div className="match-venue">{CommonUtils.isEmptyString(this.props.match.match_status) ? venueName : ''}</div>
                                <div className="awayscore">{CommonUtils.isEmptyString(this.props.match.match_status) ? '' : this.props.match.team2_final_score}</div>
                            </div>
                        </div>
                        <div className="match-link">
                            <i className="fa fa-angle-right icon icon-2x" aria-hidden="true"/>
                        </div>
                    </a>
                    <style>{css}</style>
                </div>
            );
        }

    }
}

MatchRowComponent.propTypes = {
    match: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

const css = `
    a.match-wrap {
        color: #141414;
        text-decoration: none;
    }

    .match-wrap {        
        display: inline-block;
        width: 100%;
        padding: 15px 0 15px 15px;
        box-sizing: border-box;
        border-bottom: 3px solid #bbbbbc;
    }
    
    .match-detail-container {
        display: inline-block;
        width: calc(100% - 30px);
    }

    .match-row {
        display: flex;
        width: 100%;
    }

    .m-2 {
        color: #898a8b;
        font-size: 10px;
        padding: 5px 0;
        text-transform: uppercase;
    }

    .match-vs {
        margin: 0 5px 0 0;
        position: relative;
        top:-2px;
    }

    .match-team {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 65%;
    }

    .match-detail {
        flex-grow: 1;
        text-align: right;
        color: #141414;
    }

    .match-line {
        border-bottom: 1px solid #bbbbbc;
        flex: 1;
        height: 6px;
    }

    .match-venue {
        font-size: 12px;
        text-align: right;
        width: 35%;
        color: #141414;
    }

    .match-link {
        float: right;
        height: 55px;
        line-height: 55px;
        margin-top: 4px;
        text-align: center;
        width: 30px;
    }

    .icon {
        float: right;
        margin: 12px;
        padding: 0;
        font-size: 20px;
        display: inline-block;
    }

    .icon-2x {        
        font-size: 2em;
    }
    
    .result-container {
        padding-bottom: 20px;
    }
    .homescore {
        color: #141414;
    }
    .awayscore {
        color: #141414;
    }
    .match-detail {
       font-family: Open Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    }
`;
