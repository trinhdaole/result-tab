import React, { Component,PropTypes } from 'react'

import ListItem from './map-finder-result-list-item'

export default class MapFinderResultListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            arrObject:this.props.arrObject,
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
            expand:!this.state.expand,

        });
    }

    itemClick(tempData,index) {
        let tempArrObject = this.state.arrObject;
        tempArrObject[index] = tempData;
        this.setState({
            arrObject:tempArrObject,

        });

    }
    componentDidMount() {
    }



    componentWillUnmount(){

    }

    renderList(){
        let resultListData = [{place:'Liverpool',description:'Beauty City'},{place:'London',description:'England Capital'}]
       return resultListData.map((item,index)=>{

            return (
                <ListItem
                    data    = {item}
                />
            )
        })
    }



    render() {

        //let resultListData = {place:'Liverpool',description:'Beauty City'}

        return (

            <div className="mapFinderResultListContainer">
                {this.renderList()}
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
       
        height:150px;
        
         
    }
    .mapFinderResultListElement{
        height:50px;
        
        background-color: white;
        border-style: solid;
        border-width: 1px;
        border-color: blue;
        border-radius: 4px;
    }
    

  
    
   
`;
