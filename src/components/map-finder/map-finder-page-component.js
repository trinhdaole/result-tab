/**
 * Created by long on 4/12/17.
 */
"use strict";

import React, {Component} from "react";
import Popup from '../wrapper/map-finder/map-finder-popup-component';
import TextComponent from '../common/text/text-component';

import SearchFilterComponent from '../wrapper/map-finder/map-finder-search-filter-component';
import MapFinderDropdownComponent from  '../wrapper/map-finder/map-finder-dropdown-component';
import SearchResultComponent  from '../wrapper/map-finder/map-finder-result-wrapper-component';
import MapFinder from '../wrapper/map-finder/map-finder-result-map-component';
import * as URLUtils from  '../../utils/url-utils';

export default class MapFinderPageComponent extends Component {
    constructor(props) {


        super(props);
        this.state = {
            resultData:null,
            searchStatus:'',
            isSearching:false,
            person: null
        };
        this.searchStatus = '';
        this.onSearchStatus = this.onSearchStatus.bind(this);
        this.query = null
    }

    componentDidMount() {

        let that = this;
        let url = 'https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis';
        // let url = 'http://128.199.90.210:8083/team/a0Rp0000004AIsVEAW';

        fetch(url, {
            'mode': 'no-cors',
            method:"HEAD",
            'Accept': '*/*',
            // 'Content-Type' : 'application/json; charset=utf-8',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Access-Control-Request-Method': "GET",
        })
            .then(function (response) {
                console.log("===== response:", response);

                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                console.log("=====data:", data);

            });

        // var data = null;
        //
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        //
        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // });
        //
        // xhr.open("GET", "https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis");
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("Accept", "application/json");
        // // xhr.setRequestHeader("Authorization", "Basic ZGV2OmRldjIwMTY=");
        // // xhr.setRequestHeader("x_api_key", "XrVL2DyqsA3hIF3oIfbQU7bAF7EtfRSH1ln6RL22");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
        //
        // xhr.send(data);

    }

    componentWillUnmount(){

    }


    onClearFilter(){
          this.refs.searchFilter.clearSearch();
          this.refs.searchFilter.focusSearch();
    }

    onSearchAgain(){

        this.refs.searchFilter.focusSearch();
    }
    onSearchStatus(status){
        this.setState({searchStatus:status});
    }






    render() {

        const onClearFilter = () => this.onClearFilter();
        const onSearchAgain = () => this.onSearchAgain();


        return (

            <div className="mapFinderContainer">
                <div className="header">
                    <div className="headerTextWrapper">
                        <p className="textHeader">
                            <TextComponent
                                text    = {'CLUB FINDER'}
                                style   = {{fontSize:12, color:'white',fontFamily: 'Roboto',}}
                            />
                        </p>
                        <p className="textHeader">
                            <TextComponent
                                text    = {'WHERE CAN I PLAY ?'}
                                style   = {{fontSize:26, fontWeight:'600',color:'white',fontFamily: 'Roboto',}}
                            />
                        </p>
                    </div>
                </div>
                <div>{this.state.person}</div>
                <SearchFilterComponent
                    onSearchClick   = {(data)=> this.setState({resultData:data}) }
                    onSearchStatus  = {(dataObject)=> this.onSearchStatus(dataObject)}
                    query={this.query}
                    ref             = "searchFilter"
                />
                <div className="clear">
                </div>
                <SearchResultComponent
                    resultData      = {this.state.resultData}
                    searchStatus    = {this.state.searchStatus}
                    onClearFilter   = {onClearFilter}
                    onSearchAgain   = {onSearchAgain}
                />

                <style>{css}</style>
            </div>


        );

    }




}

const css = `

  .map-wrapper {
         width:1000px;
         height:1000px;
      
    }
    
    .clear{
        display:block;
        clear:both;
     }
     
    .mapFinderContainer {
        width:100%;
        background-color: rgba(241,245,248,1);

    }
    .header {
        width:100%;
        height:131px;
        background-color: rgba(0,154,222,1);
    }
    .headerTextWrapper {
        padding: 15px 0px 0px 0px;
    }
    .textHeader {
        text-align:center;
    }
     @media all and (orientation:landscape) { 
  
       .clear{
        display:none;
     }
     }
     
     body{
     margin:0;
     }


`;
