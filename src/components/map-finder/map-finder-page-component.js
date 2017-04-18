/**
 * Created by long on 4/12/17.
 */
"use strict";

import React, {Component, PropTypes} from "react";
import Popup from '../wrapper/map-finder/map-finder-popup-component'
import TextComponent from '../common/text/text-component'

import SearchFilterComponent from '../wrapper/map-finder/map-finder-search-filter-component'
import MapFinderDropdownComponent from  '../wrapper/map-finder/map-finder-dropdown-component'
import SearchResultComponent  from '../wrapper/map-finder/map-finder-result-wrapper-component'
import MapFinder from '../wrapper/map-finder/map-finder-result-map-component'

export default class MapFinderPageComponent extends Component {
    constructor(props) {


        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }

    componentWillUnmount(){

    }



    render() {

        return (
              <MapFinder/>
        );

    }




}

MapFinderPageComponent.propTypes = {

};
const css = `
    .mapFinderContainer {
        width:100%;
        height:2000px;
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
    };


`;
