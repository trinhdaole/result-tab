import React, { Component,PropTypes } from 'react'
import TextComponent from '../../common/text/text-component'
import MapFinderResultList from  './map-finder-result-list-component'


export default class SearchResultComponent extends Component {

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

    renderSliderButton(){
        let showList = false;
        return(
            <div className="sliderButton">
                <div
                    className={this.state.isShowMap ? "switch-button-blue" : "switch-button-gray"}
                    onClick={()=> this.setState({isShowMap:true}) }
                    >LIST</div>
                <div
                    className={this.state.isShowMap ? "switch-button-gray" : "switch-button-blue"}
                    onClick={()=> this.setState({isShowMap:false}) }
                    >MAP</div>
            </div>
        );
    }

    renderResultConTent(){
        return(
            <div className="searchResultContentWrapper">
                <MapFinderResultList />
            </div>
        );
    }

    render() {
        return (
            <div className="searchResultContainer">
                <div className="searchResultElementWrapper">
                    <div className="searchTextWrapper">
                        <TextComponent
                            text={'2 result found'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </div>
                    {this.renderSliderButton()}
                </div>
                {this.renderResultConTent()}
                <style>{css}</style>
            </div>
        )
    }
}
SearchResultComponent.propTypes = {
    onSearchClick : PropTypes.func

};


const css = `
    .searchResultContainer {
       
        height:238px;
        margin: 16px 4px 0 4px;
        background-color: white;
        border-style: solid;
        border-width: 1px;
        border-color: white;
        border-radius: 4px;
 
    }
    .searchResultElementWrapper{
        height:34px;
        position: relative;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     }
     .searchTextWrapper {
        line-height: 34px;
        float:left;
     }
     .sliderButton {
        border-radius: 40px;
        background: rgb(244,247,250);
        width:90px;
        height:25px;
        float:right;
        margin:4px 5px 0 0;
     }
     
     
    .switch-button-blue{
        border-radius: 40px;
        font-family: Roboto Medium;
       
        font-size: 10px;
        text-align: center;
        line-height: 25px;
        float: left;
        width: 46px;
        height:25px;
        background: rgb(0,154,222);
        color: #ffffff ;
  }

    .switch-button-gray{
        border-radius: 40px;
        font-family: Roboto Medium;
        font-size: 10px;
        text-align: center;
        line-height: 25px;
        float: left;
        width: 44px;
        height:25px;
        background: rgb(244,247,250);
        color: rgb(173,173,176);
  }
    .searchResultContentWrapper{
       
        
    }
  

  
    
   
`;
