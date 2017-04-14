import React, { Component,PropTypes } from 'react'
import TextComponent from '../../common/text/text-component'
import ToggleButton from '../../common/toggle/toggle-button-component'
export default class MapFinderResultListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowMap:false,
        };
    }
    componentDidMount() {
    }



    componentWillUnmount(){

    }




    render() {



        return (
            <div className="mapFinderResultListContainer">
                <div className="mapFinderResultListElement">



                </div>
                <style>{css}</style>
            </div>
        )
    }
}
MapFinderResultListComponent.propTypes = {
    onSearchClick : PropTypes.func

};


const css = `
    .mapFinderResultListContainer {
       
        height:100px;
        
        background-color: white;
        border-style: solid;
        border-width: 1px;
        border-color: red;
        border-radius: 4px; 
    }
    .mapFinderResultListElement{
        
    }
    

  
    
   
`;
