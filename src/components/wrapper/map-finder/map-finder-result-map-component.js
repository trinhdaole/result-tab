import React, { Component,PropTypes } from 'react'

import MapComponent from '../../common/map/map-component';
import GoogleMapReact from 'google-map-react';
import Text from  '../../../components/common/text/text-component'
import Icon from  '../../../components/common/icon/icon-component'
import  PinComponent from "../../../components/common/map/pin-icon-component"

export default class MapFinderResultListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     */
    onClick(event) {
        event.stopPropagation();
        event.preventDefault();

        this.setState({


        });
    }

    onBoundsChange(numcount, center, zoom){

    }

    onNext(){
        console.log("onNext2");
        if(this.props.onNext) return this.props.onNext();
    }

    render() {
        let srcPin = "data:image/png;base64,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";
        const onBoundsChange = (numcount, center, zoom) => this.onBoundsChange(numcount, center, zoom );
        const onNext = () => this.onNext();
        return (

                   <MapComponent
                       ref="map"
                       center={this.props.center}
                       zoom={this.props.zoom}
                       markers={this.props.markers}
                       usingInfoBox={true}
                       srcPin={srcPin}
                       onNext={onNext}
                   >
                   </MapComponent>

        );
    }

}


MapFinderResultListComponent.propTypes = {
    onSearchClick : PropTypes.func,
    markers: PropTypes.array,
    center: PropTypes.object,
    zoom: PropTypes.number,
    onNext:  PropTypes.func,
};

MapFinderResultListComponent.defaultProps = {
    center: {lat: 10.832694, lng: 106.672007},
    zoom: 16,
    markers: [ {lat: 10.832694, lng: 106.672007, title:'place', info:'info 1 , info 2'},{lat: 10.822694, lng: 106.672007,  title:'place2', info:'info 1 , info 2'},
        {lat: 10.832694, lng: 106.662007,  title:'place3', info:'info 1 , info 2'} ],


};


