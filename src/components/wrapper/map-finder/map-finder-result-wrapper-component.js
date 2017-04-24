import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import TextComponent from '../../common/text/text-component';
import MapFinderResultList from  './map-finder-result-list-component';
import MapFinderResultMap from './map-finder-result-map-component';
import Paging from '../../common/paging/paging-component';

import Footer from  './map-finder-footer-component';


export default class SearchResultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowMap:false,
            sliderStatus:'both'
        };
    }
    componentDidMount() {
    }



    componentWillUnmount(){

    }

    pagingClick(page){
        console.log('***** page   ', page);
    }

    onClearFilter(){
        window.scrollTo(0, 0);
        if(this.props.onClearFilter){
            this.props.onClearFilter();
        }

    }

    onSearchAgain(){
        window.scrollTo(0, 0);
        if(this.props.onSearchAgain){
            this.props.onSearchAgain();
        }


    }

    renderSliderButton(){

        return(
            <div className="sliderButton">

                <div
                    className={(this.state.sliderStatus == 'both') ? "switch-button-blue" : "switch-button-gray"}
                    onClick={()=> this.setState({sliderStatus:'both'})}
                    >BOTH</div>

                <div
                    className={(this.state.sliderStatus == 'list') ? "switch-button-blue" : "switch-button-gray"}
                    onClick={()=> this.setState({sliderStatus:'list'})}
                    >LIST</div>
                <div
                    className={(this.state.sliderStatus == 'map') ? "switch-button-blue" : "switch-button-gray"}
                    onClick={()=> this.setState({sliderStatus:'map'})}
                    >MAP</div>
            </div>
        );
    }

    renderResultContent(){
        const onPagingClick = (page) => this.pagingClick(page);
        if(this.state.sliderStatus == 'both'){
            return (
                <div className="searchResultContentWrapper">
                    <div className="searchResultList">
                        <MapFinderResultList
                            resultData  = {this.props.resultData}
                        />
                    </div>
                    <div className="searchResultMap">
                        <MapFinderResultMap
                            markers      = {this.props.resultData}
                        />
                    </div>
                    <div className="pagingWrapper">
                        <Paging total={140} onClick={onPagingClick} />
                    </div>
                </div>
            );

        }else if(this.state.sliderStatus == 'list'){
            return (
                <div className="searchResultList">
                    <MapFinderResultList
                        resultData  = {this.props.resultData}
                    />
                    <div className="pagingWrapper">
                        <Paging total={140} onClick={onPagingClick} />
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="searchResultMap">
                    <MapFinderResultMap
                        markers      = {this.props.resultData}
                    />
                </div>
            );
        }
    }

    renderFooter() {

        const onClearFilter = () => this.onClearFilter();
        const onSearchAgain = () => this.onSearchAgain();

        if(this.props.resultData){
            return null;
        }else{
            return (
                <div className="footerWrapper">
                    <Footer
                        onClearFilter={onClearFilter}
                        onSearchAgain={onSearchAgain}
                    />
                </div>
            );
        }
    }

    render() {

        return (
            <div className="searchResultContainer" >
                <div className="searchResultElementWrapper">
                    <div className="searchTextWrapper">
                        <TextComponent
                            text={'2 result(s) found'}
                            style={{fontSize:10, paddingLeft:8,color:'rgba(81,81,81,1)', fontFamily:'Roboto', fontWeight:'600'}}
                        />
                    </div>
                    {this.renderSliderButton()}
                </div>

                {this.renderResultContent()}
                {this.renderFooter()}
                <style>{css}</style>
            </div>
        );
    }
}
SearchResultComponent.propTypes = {
    onSearchClick : PropTypes.func,
    resultData:PropTypes.object,
    onClearFilter: PropTypes.func,
    onSearchAgain: PropTypes.func,

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
        width:134px;
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
  }.
  .pagingWrapper {
        width:100%;
        font-family:Roboto;
        
    }
    .paging{
        width:93%;
    }
  .searchResultContentWrapper{
  
  }
    .searchResultList{
       
        
    }
    .searchResultMap{
        width:100%;
        height:300px;
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
       .searchResultContentWrapper{
       width:100%;
  
    }
       
       
       
      
     }
  

  
    
   
`;
