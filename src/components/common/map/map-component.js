"use strict";

import React, {Component, PropTypes} from "react";
import  PinComponent from "./pin-icon-component"
import  PinBoxComponent from "./popup-box-info-map-component"
import GoogleMapReact from 'google-map-react';

const BoxInfoComponent = ({src}) => (
    <div>
        <PinBoxComponent
            srcPin={src}
        />
    </div>
);
export default class MapComponent extends Component {

    getNumMarketVisible(){


        var countInBoundingBox = 0; //the counter for the markers in bounding box


        let bounds  = this.refs.mapGoogle.geoService_.getBounds();
        let leftTop = { lat: bounds[0] , lng:  bounds[1]};
        let rightTop = { lat: bounds[6] , lng:  bounds[7]};
        let rightBot = { lat: bounds[2] , lng:  bounds[3]};
        let leftBot = { lat: bounds[4] , lng:  bounds[5]};
        var boundCoords = [
            leftTop,
            rightBot,
            leftBot,
            rightTop,
        ];

        // Construct the polygon.
        var boundRect = new window.google.maps.Polygon({
            paths: boundCoords,

        });
        for (var i = this.props.markers.length; i--;) {
            let pos = this.props.markers[i];
            let point =  new window.google.maps.LatLng(pos.lat, pos.lng);
            if(window.google.maps.geometry.poly.containsLocation(point,boundRect)){
                countInBoundingBox++;
            }

        }

        return countInBoundingBox;
    }

    onBoundsChange(center, zoom){

        let numcount = this.getNumMarketVisible();
        this.props.onBoundsChange(numcount, center, zoom);
    }

    renderMarkers(){
        return this.props.markers.map ((marker, i) => {
            if(this.props.usingInfoBox == true){
                return (
                    <BoxInfoComponent key={i} {...marker}
                         lat={marker.lat}
                         lng={marker.lng}
                          src={this.props.srcPin}
                    >

                    </BoxInfoComponent>
                );
            }else{
                return (
                    <div key={i} {...marker} >
                        <PinComponent/>
                    </div>
                );
            }


        });
    }


    renderGoogleMap(){
        const onBoundsChange = (center, zoom) => this.onBoundsChange(center, zoom );
        return (
            <GoogleMapReact
                onBoundsChange={onBoundsChange}
                ref="mapGoogle"
                defaultZoom = {this.props.zoom}
                defaultCenter = {this.props.center}
                options = {{streetViewControl: true, mapTypeControl: true}}>
                { this.renderMarkers() }
            </GoogleMapReact>
        );
    }

    render(){
        return this.renderGoogleMap();
    }
}

MapComponent.propTypes = {
    center: PropTypes.object,
    markers: PropTypes.array,
    zoom: PropTypes.number,
    srcPin: PropTypes.string,
    usingInfoBox:  PropTypes.bool,
    onBoundsChange: PropTypes.func,
};

MapComponent.defaultProps = {
    center: {lat: 59.937043, lng: 30.336157},
    zoom: 16,
    markers: [],
    usingInfoBox: false,

};

