"use strict";

import React, {Component, PropTypes} from "react";
import {GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/addons/InfoBox";


export default class MapComponent extends Component {

    renderContainer(){
        return (
            <div style={{height:'100%', width:'100%'}} />
        );
    }

    renderMarkers(){
        return this.props.markers.map ((mk, i) => {

            const marker = {
                icon: require('../../icon/iconPin/iconPin.png'),
                position: {
                    lat: mk.location.lat,
                    lng: mk.location.lng
                },


            };
            let off = new window.google.maps.Size(-140, 0);

            return (
                <Marker key={i} {...marker} >
                    <InfoBox
                        position={ {lat: 58.837043, lng: 30.336157}}
                        closeBoxMargin= "10px 2px 2px 2px"
                        visible={true}
                        pixelOffset= {off}
                        alignBottom={false}
                    >
                    <div className="popup-wrapper">
                        <p>The CSS box model is essentially a box that wraps around every HTML element.</p>
                        <style>{css}</style>
                    </div>
                    </InfoBox>
                </Marker>
            );



     // return (
     //            <Marker key={i} {...marker} >
     //                <InfoWindow
     //                    content="<h2 style='background-color:yellow'>
     //                             Background-color set by using yellow
     //                            </h2>"
     //
     //                            >
     //                </InfoWindow>
     //                </Marker>
     //        );
        });
    }

    renderGoogleMap(){
        return (
            <GoogleMap
                defaultZoom = {this.props.zoom}
                defaultCenter = {this.props.center}
                options = {{streetViewControl: true, mapTypeControl: false}}>
                { this.renderMarkers() }
            </GoogleMap>
        );
    }

    render(){
        return (
            <GoogleMapLoader
                query={{ libraries: "geometry,drawing,places,visualization" }}
                containerElement = {this.renderContainer()}
                googleMapElement = {this.renderGoogleMap()}
            />
        );
    }
}

MapComponent.propTypes = {
    center: PropTypes.object,
    markers: PropTypes.array,
    zoom: PropTypes.number
};

MapComponent.defaultProps = {
    center: {lat: 59.937043, lng: 30.336157},
    zoom: 16,
    markers: []
};

const css = `
  .popup-wrapper {  
     background-color: rgb(0,154,222);
     width: 300px;
     border: 0px solid green; 
     align: center;
     color: white;
     padding:12px 5px 5px 5px;
      z-index: 999;
    }  
`;