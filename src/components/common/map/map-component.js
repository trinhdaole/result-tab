"use strict";

import React, {Component, PropTypes} from "react";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class MapComponent extends Component {

    renderContainer(){
        return (
            <div style={{height:'100%', width:'100%'}} />
        );
    }

    renderMarkers(){
        return this.props.markers.map ((venue, i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }

            };

            return <Marker key={i} {...marker} />;
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
