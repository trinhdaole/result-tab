import React, { Component,PropTypes } from 'react'
import TextComponent from '../../common/text/text-component'
import ToggleButton from '../../common/toggle/toggle-button-component'
export default class SearchResultComponent extends Component {

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

        let showList = true

        return (
            <div className="searchResultContainer">
                <div className="searchResultChildElementWrapper">
                    <div className="searchTextWrapper">
                        <TextComponent
                            text={'2 result found'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </div>
                    <div className="sliderButton" >
                        <div className={showList ? "win-button-blue" : "win-button-gray"} >LIST</div>
                        <div className={showList ? "lose-button-red":"lose-button-gray"}>MAP</div>
                    </div>

                </div>
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
    .searchResultChildElementWrapper{
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
        width:90px;
        height:25px;
        float:right;
        margin:4px 5px 0 0;
     }
     
     
    .win-button-blue{
    font-family: Roboto Condensed, sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    float: left;
    width: 44px;
    height:25px;
    background: rgb(0,154,222);
    color: #ffffff ;
  }

 .lose-button-gray{
    font-family: Roboto Condensed, sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    float: left;
    width: 44px;
    height:25px;
    background: rgb(239,239,244);
    color: rgb(173,173,176);
  }

 .win-button-gray{
    font-family: Roboto Condensed, sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    float: left;
    width: 44px;
    height:25px;
    background: rgb(239,239,244);
    color: rgb(173,173,176);
  }

  .lose-button-red{
    font-family: Roboto Condensed, sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    float: left;
    width: 44px;
    height:25px;
    background: rgb(208,2,27);
    color: #ffffff ;
  }
    
   
`;
