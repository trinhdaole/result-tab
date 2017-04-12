"use strict";

import React, {Component, PropTypes} from "react";
import * as CommonUtils from "../../../utils/common-utils";
import LabelComponent from "../../common/label/label-component";
import DateTime from "../../common/datetime/datetime-component";
import {Link, browserHistory} from "react-router";
import * as UrlService from "../../../services/url-service";
import * as URL from "../../../constant/router-constant";

export default class MatchDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    onSelectTeam(url) {


        browserHistory.push(url);

    }

    render() {



        let {match, roundName, team1Logo, team2Logo} = this.props;
        let round = match.round_id || 0;
        let compID = match.comp_id || 0;
        let c = this.props.c || '';
        let fID = match.compmatch_id || 0;
        let webID = this.props.webID || '';

        let venueURL = URL.VENUE_DETAIL_URL + "?round=" + round + "&a=VENUE&venueid=" + compID + "&c=" + c + "&fID=" + fID + "&webID=" + webID;

        let handleOnSelectTeam1 = () => this.onSelectTeam(URL.TEAM_INFO_URL + UrlService.setToUrl(match.comp_id, match.round_id) + "&id=" + match.team1_id);
        let handleOnSelectTeam2 = () => this.onSelectTeam(URL.TEAM_INFO_URL + UrlService.setToUrl(match.comp_id, match.round_id) + "&id=" + match.team2_id);
        if(match) {
            return (
                <div className="result-details-container">
                    {roundName ? <LabelComponent text={roundName} style={style}/> : null}
                    <table>
                        <tbody>

                        <tr>
                            <td>
                                <div className="home-team-logo">
                                    <img src={team1Logo}
                                         alt=""/>
                                </div>
                            </td>
                            <td>
                                <div title={match.team1_name}
                                     className="colorHeading hometeam">

                                    <a onClick={handleOnSelectTeam1} className="teamnames">{match.team1_name}</a>
                                </div>
                            </td>
                            <td>
                                <div className="detailed_score homescore">
                                    <div
                                        className="big-score">{CommonUtils.isEmptyString(match.match_status) ? '' : match.team1_final_score}</div>
                                    <div className="small-score"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="match-fixture-divider"/>
                            </td>
                            <td>
                                <div className="detailed_score">
                                    <div className="match-result">
                                        <span className="livenow">Live</span>
                                        <span
                                            className="notlive">{CommonUtils.isEmptyString(match.match_status) ? 'vs' : 'FINAL'}</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="away-team-logo">
                                    <img src={team2Logo}
                                         alt=""/>
                                </div>
                            </td>
                            <td>
                                <div title={match.team2_name}
                                     className="colorHeading awayteam">
                                    <a onClick={handleOnSelectTeam2} className="teamnames">{match.team2_name}</a>
                                </div>
                            </td>
                            <td>
                                <div className="detailed_score awayscore">
                                    <div
                                        className="big-score">{CommonUtils.isEmptyString(match.match_status) ? '' : match.team2_final_score}</div>
                                    <div className="small-score"/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                        <tr>
                            <td colSpan="6" className="detailed-misc-col">
                                <div className="matchdate">
                                <span className="notlive"><DateTime type={"MATCH_DATE"}
                                                                    date={match.match_date}/></span>
                                    <span className="livenow">Live Now</span>
                                </div>
                                <div className="venue">
                                    <Link to={venueURL}><span className="venue-name">{match.venue_name}</span> <span
                                        className="venue-map">(Map)</span></Link>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <style>{css}</style>
                </div>
            );
        }else{
            return null;
        }
    }
}

MatchDetailComponent.propTypes = {
    match: PropTypes.object,
    roundName: PropTypes.string,
    team1Logo: PropTypes.string,
    team2Logo: PropTypes.string,
    webID: PropTypes.number,
    c: PropTypes.string,
};

const style = {
    fontWeight: 'bold',
    fontSize: '18px'
};

const css = `
    table, tbody{
      width:100%;
    }
    .hometeam a, .awayteam a{
        color: #414141;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
    }
    .detailed_score {
        min-width: 30px;
        text-align: center;
    }
    .big-score {
        font-size: 60px;
    }
    .small-score {
        font-size: 14px;
    }
    .match-fixture-divider {
        background-color: #888;
        height: 1px;
        width: 100%;
    }
    .match-result {
        font-size: 11px;
    }
    .notlive {
        color: #888;
    }
    .result-details-container{
      padding:10px 12px;
      background-color:white;
    }
    .home-team-logo img, .away-team-logo img {
        max-width: 50px;
        max-height: 50px;
        margin-right: 10px;
        display: block;
    }
    
    .detailed-misc-col {
        font-size: 12px;
        text-align: center;
    } 
    .matchdate{
      color: #888;
      font-size: 10px;
    }
    .livenow {
        background-color: green;
        color: #fff;
        display: none;
        font-weight: 700;
        padding: 0 5px;
        border-radius: 5px;
    }
    .venue {
        color: #888;
        font-size: 10px;
    } 
    .venue-name, .venue-map{
        text-decoration: underline;
        color: #888;
    }
    .colorHeading{
    padding: 20px 0;
    }
`;
