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


            <div className="map-wrapper">
              <MapFinder/>
                <style>{css}</style>
            </div>


        );

    }

    // render() {
    //
    //     return (
    //
    //
    //         <div className="mapFinderContainer">
    //             {/*<Popup  />*/}
    //             <div className="header">
    //                 <div className="headerTextWrapper">
    //                     <p className="textHeader">
    //                         <TextComponent
    //                             text    = {'CLUB FINDER'}
    //                             style   = {{fontSize:12, color:'white',fontFamily: 'Roboto',}}
    //                         />
    //                     </p>
    //                     <p className="textHeader">
    //                         <TextComponent
    //                             text    = {'WHERE CAN I PLAY'}
    //                             style   = {{fontSize:26, fontWeight:'600',color:'white',fontFamily: 'Roboto',}}
    //                         />
    //                     </p>
    //                 </div>
    //             </div>
    //             <SearchFilterComponent
    //                 onSearchClick   = {()=> console.log('******   searching .....')}
    //             />
    //             <div className="clear">
    //             </div>
    //             <SearchResultComponent />
    //
    //
    //             {/*<MapComponent center={{lat: 59.937043, lng: 30.336157}} markers={[{location: {lat: 59.937043, lng: 30.336157}}]} />*/}
    //
    //
    //             <style>{css}</style>
    //         </div>
    //
    //
    //     );
    //
    // }




}

MapFinderPageComponent.propTypes = {

};
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
    }
     @media all and (orientation:landscape) { 
  
       .clear{
        display:none;
     }
     }


`;
