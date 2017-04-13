/**
 * Created by long on 4/12/17.
 */
"use strict";

import React, {Component, PropTypes} from "react";
import Popup from '../wrapper/map-finder/map-finder-popup-component'
import TextComponent from '../common/text/text-component'
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
        <MapFinderDropdownComponent
            groupName="Programs & Competitions"
            arrObject={arrObject}
        />
        );
        // return (
        //     <div className="container">
        //
        //         <div className="header">
        //             <div className="headerTextWrapper">
        //                 <p className="textHeader">
        //                     <TextComponent
        //                         text    = {'CLUB FINDER'}
        //                         style   = {{fontSize:12}}
        //                     />
        //                 </p>
        //                 <p className="textHeader">
        //                     <TextComponent
        //                         text    = {'WHERE CAN I PLAY'}
        //                         style   = {{fontSize:26, fontWeight:'600'}}
        //                     />
        //                 </p>
        //             </div>
        //
        //
        //         </div>
        //
        //         <style>{css}</style>
        //     </div>
        //
        // );

    }


}

MapFinderPageComponent.propTypes = {

};
const css = `
    .container {
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
        color:white;
        text-align:center;
        font-family: Roboto, sans-serif;
    };
    
   
`;
