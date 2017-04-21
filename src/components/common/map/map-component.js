"use strict";

import React, {Component, PropTypes} from "react";
import  PinComponent from "./pin-icon-component";
import  PinBoxComponent from "./popup-box-info-map-component";
import GoogleMapReact from 'google-map-react';


export default class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            makerClick:false,
            change:false,
        };
        this.makerClick = false;
    }

    getNumMarketVisible(){


        let countInBoundingBox = 0; //the counter for the markers in bounding box


        let bounds  = this.refs.mapGoogle.geoService_.getBounds();
        let leftTop = { lat: bounds[0] , lng:  bounds[1]};
        let rightTop = { lat: bounds[6] , lng:  bounds[7]};
        let rightBot = { lat: bounds[2] , lng:  bounds[3]};
        let leftBot = { lat: bounds[4] , lng:  bounds[5]};
        let boundCoords = [
            leftTop,
            rightBot,
            leftBot,
            rightTop,
        ];

        // Construct the polygon.
        let boundRect = new window.google.maps.Polygon({
            paths: boundCoords,

        });
        for (let i = this.props.markers.length; i--;) {
            let pos = this.props.markers[i];
            let point =  new window.google.maps.LatLng(pos.lat, pos.lng);
            if(window.google.maps.geometry.poly.containsLocation(point,boundRect)){
                countInBoundingBox++;
            }

        }

        return countInBoundingBox;
    }

    onBoundsChange(center, zoom){
        if( this.props.onBoundsChange){
            let numCount = this.getNumMarketVisible();
            this.props.onBoundsChange(numCount, center, zoom);
        }

    }

    onClick(mouse){
        mouse.event.stopPropagation();
        mouse.event.preventDefault();
        if(this.makerClick == true){
                this.makerClick = false;

        }else{
            this.setState({
                show:false,
                change:!this.state.change,
            });
        }

    }

    onMakerClick(lat,lng){
        this.makerClick = true;
    }

    onNext(){

        if(this.props.onNext) return this.props.onNext();
    }


    renderMarkers(){
        return this.props.markers.map ((marker, i) => {
            if(this.props.usingInfoBox == true){
                const onMakerClick = (lat,lng) => this.onMakerClick( lat,lng);
                const onNext = () => this.onNext();
                return (
                    <PinBoxComponent key={i} {...marker}
                         onClick={onMakerClick}
                         onNext={onNext}
                         lat={marker.lat}
                         lng={marker.lng}
                          show={this.state.show}
                          src={this.props.srcPin}
                          change={this.state.change}
                          title={marker.title}
                          info={marker.info}
                    />
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
        const onClick = (mouse) => this.onClick(mouse );
        return (
            <GoogleMapReact
                onBoundsChange={onBoundsChange}
                onClick={onClick}
                ref="mapGoogle"
                defaultZoom = {this.props.zoom}
                defaultCenter = {this.props.center}
                options = {{streetViewControl: true, mapTypeControl: false}}>
                { this.renderMarkers() }
            </GoogleMapReact>
        );
    }

    render(){
        return this.renderGoogleMap();
    }
}

/**
 * @desc props
 * @param {markers}  - array object [{lat,lng,title,info}]

 */
MapComponent.propTypes = {
    center: PropTypes.object,
    markers: PropTypes.array,
    zoom: PropTypes.number,
    srcPin: PropTypes.string,
    usingInfoBox:  PropTypes.bool,
    onBoundsChange: PropTypes.func,
    onNext:  PropTypes.func,
};

MapComponent.defaultProps = {
    center: {lat: 59.937043, lng: 30.336157},
    zoom: 11,
    markers: [],
    usingInfoBox: false,

};

