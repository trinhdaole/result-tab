/**
 * Created by long on 4/12/17.
 */
"use strict";

import React, {Component, PropTypes} from "react";
import Popup from '../wrapper/map-finder/map-finder-popup-component'
import TextComponent from '../common/text/text-component'

import SearchFilterComponent from '../wrapper/map-finder/search-filter-component'
import MapFinderDropdownComponent from  '../wrapper/map-finder/map-finder-dropdown-component'

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
        let arrObject = [{'value':'Sunday','check':false},{'value':'Monday','check':false},
            {'value':'Tuesday','check':false},{'value':'Wednesday','check':false},
            {'value':'Thursday','check':false},{'value':'Friday','check':false},
            {'value':'Saturday','check':false} ];
        return (

            <div className="mapFinderContainer">
                {/*<Popup  />*/}
                <div className="header">
                    <div className="headerTextWrapper">
                        <p className="textHeader">
                            <TextComponent
                                text    = {'CLUB FINDER'}
                                style   = {{fontSize:12, color:'white',fontFamily: 'Roboto-Regular',}}
                            />
                        </p>
                        <p className="textHeader">
                            <TextComponent
                                text    = {'WHERE CAN I PLAY'}
                                style   = {{fontSize:26, fontWeight:'600',color:'white',fontFamily: 'Roboto-Regular',}}
                            />
                        </p>
                    </div>
                </div>
                <SearchFilterComponent
                    onSearchClick   = {()=> console.log('******   searching .....')}
                />
                <SearchResultComponent />


                <style>{css}</style>
            </div>


        );

    }
    render1(){
      return
      (
        <MapFinderDropdownComponent
            groupName="Programs & Competitions"
            arrObject={arrObject}
        />
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
