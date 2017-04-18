import React, { Component,PropTypes } from 'react'

import MapComponent from '../../common/map/map-component';


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



    render() {
        return (

            <div className="mapContainer">
                    <MapComponent center={{lat: 59.937043, lng: 30.336157}} markers={[{location: {lat: 59.937043, lng: 30.336157}},
                        {location: {lat: 59.937043, lng: 30.335157}}]} />

                <style>{css}</style>
            </div>
        )
    }
}
MapFinderResultListComponent.propTypes = {
    onSearchClick : PropTypes.func

};


const css = `
    .mapContainer {
         width:1000px;
        height:1000px;
      
    }
    
    
    

  
    
   
`;
