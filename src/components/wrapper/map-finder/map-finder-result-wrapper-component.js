import React, { Component,PropTypes } from 'react'
import TextComponent from '../../common/text/text-component'
import MapFinderResultList from  './map-finder-result-list-component'
import Footer from  './map-finder-footer-component'


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

    renderResultContent(){
        return(
            <div className="searchResultContentWrapper">
                <MapFinderResultList />
            </div>
        );
    }

    render() {
        return (
            <div className="searchResultContainer" >
                <div className="searchResultElementWrapper">
                    <div className="searchTextWrapper">
                        <TextComponent
                            text={'2 result found'}
                            style={{fontSize:10, paddingLeft:8,color:'rgba(81,81,81,1)', fontFamily:'Roboto', fontWeight:'600'}}
                        />
                    </div>
                    {this.renderSliderButton()}
                </div>

                {this.renderResultContent()}
                <div className="footerWrapper">
                    <Footer />
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
        margin: 16px 4px 0 4px;
        background-color: white;
        
        border-radius: 4px;
        -webkit-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
        -moz-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
        box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
        
        
       
 
    }
    .searchResultElementWrapper{
        height:34px;
        
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
        
        font-family:Roboto;
        font-weight:500;
       
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
        font-family:Roboto;
        font-weight:500;
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
    .footerWrapper{
        width:100%;
        
    }
    @media all and (orientation:landscape) { 
       .searchResultContainer {
            width:66%;
            float:right;
            margin-top:-36px;
            
       }
      
     }
  

  
    
   
`;
