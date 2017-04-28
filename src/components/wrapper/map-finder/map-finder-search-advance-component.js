
'use strict';

import React, {Component} from "react";
import PropTypes  from 'prop-types';
import FontAwesome from 'react-fontawesome';


import Text from   '../../common/text/text-component';
import Icon from   '../../common/icon/icon-component';
import Input from '../../common/input/input-component';
import Button from '../../common/button/button-component';
import  * as Service  from '../../../services/map-finder-services';

export default class MapFinderSearchAdvanceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand:false,
            clubNameValue: '',
            postCodeValue: '',
            suburbValue: '',

        };
    }

    onClick(event) {

        event.stopPropagation();
        event.preventDefault();
        this.props.onSearchAdvanceExpand(!this.state.isExpand);
        this.setState({
            isExpand:!this.state.isExpand,

        });

    }

    clearFilter(){
        if( this.refs.inputClubName){
            this.refs.inputClubName.clearText();
        }
        if( this.refs.inputPostcode){
            this.refs.inputPostcode.clearText();
        }
        if( this.refs.inputSuburb){
            this.refs.inputSuburb.clearText();
        }
    }
    onTextChange(){
        this.setState({
            clubNameValue: this.refs.inputClubName.getInputValue(),
            postCodeValue: this.refs.inputPostcode.getInputValue(),
            suburbValue: this.refs.inputSuburb.getInputValue(),
        })
    }

    forceFocusFirst(){
        if( this.refs.inputClubName){
            this.refs.inputClubName.forceFocus();
        }
    }

    onSearchAdvanceClick(){
        if(this.refs.inputPostcode.getInputValue().length <= 0 &&
            this.refs.inputClubName.getInputValue().length <= 0 &&
            this.refs.inputSuburb.getInputValue().length <= 0
        ){
            return;
        }
        this.props.onSearchAdvanceStatus('searching');
        let postcode = '' ;
        let  suburb = '';
        let name = '';
        if(this.refs.inputPostcode.getInputValue().length >= 2){
            postcode = this.refs.inputPostcode.getInputValue();
        }
        if(this.refs.inputClubName.getInputValue().length >= 3){
            name = this.refs.inputClubName.getInputValue();
        }
        if(this.refs.inputSuburb.getInputValue().length >= 3){
            suburb = this.refs.inputSuburb.getInputValue();
        }
        let sport = this.props.query.sport? this.props.query.sport : 'baseball';

        Service.getSearchPlace(postcode, suburb, name, sport ).then(data => {

            if(data){
                let dataResult = data.results ? data.results : [];
                 this.fetchDataRow(dataResult,0);
            }else{
                this.props.onSearchAdvanceClick([]);
                this.props.onSearchAdvanceStatus('finished');
            }


        });
    }

    fetchDataRow(arrayObject, currentIndex){
        if(arrayObject.length <= 0 || currentIndex >= arrayObject.length){
            this.props.onSearchAdvanceClick([]);
            this.props.onSearchAdvanceStatus('finished');
            return;
        }
        let temp = arrayObject[currentIndex];
        let lat = temp.lat;
        let lon = temp.lon;
        let cat  = "club";
        let sport = this.props.query.sport? this.props.query.sport : 'baseball';
        this.getData(arrayObject, currentIndex,lat, lon, cat, sport);

    }

    getData(arrayObject, currentIndex,lat, lon, cat, sport){

       Service.getSearchNearByPlace(lat, lon, cat, sport).then(data => {

            if(data && data.results.length > 0){
                let dataResult = data.results ;
                this.props.onSearchAdvanceClick(dataResult);
                this.props.onSearchAdvanceStatus('finished');
            }else{
                let index = currentIndex + 1;
                this.fetchDataRow(arrayObject, index);
            }

        });


    }

    renderExpandedContent(){
        let inputStyle = {
            width:'90%',
            height:20,
            marginLeft:8,
            marginBottom:2,
            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'4px',
            fontSize: 12,
            fontFamily: 'Roboto',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none',
            textOverflow: 'ellipsis',

        };
        let textStyle = {
            height:'16px',
            fontSize: 12,
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto',
            marginLeft: 8,

        };

        const onSearchAdvanceClick = () => this.onSearchAdvanceClick();

        if(!this.state.isExpand){
            return (
                <div>
                </div>
            );
        }
        return (
            <div className="searchAdvanceContent">
                <div className="searchAdvanceElement">
                    <Text text  = {'Club name'} style={textStyle}/>
                    <Input
                        ref             = "inputClubName"
                        style           = {inputStyle}
                        placeholder     = {''}
                        value           = {this.state.clubNameValue}
                        onChange        = {()=> this.onTextChange()}
                        onKeyUp         = {this.onKeyUp}
                    />
                </div>
                <div className="searchAdvanceElement">
                <Text text  = {'Postcode'} style={textStyle}/>
                <Input
                    ref         = "inputPostcode"
                    style       = {inputStyle}
                    placeholder = {''}
                    value       = {this.state.postCodeValue}
                    onChange    = {()=> this.onTextChange()}
                    onKeyUp     = {this.onKeyUp}
                />
                </div>

                <div className="searchAdvanceElement">
                    <Text text  = {'Suburb'} style={textStyle}/>
                    <Input
                        ref         = "inputSuburb"
                        style       = {inputStyle}
                        placeholder = {''}
                        onChange    = {()=> this.onTextChange()}
                        value       = {this.state.suburbValue}
                        onKeyUp     = {this.onKeyUp}
                    />
                </div>

                <div className="buttonSearchWrapper">
                    <Button
                        onClick = {onSearchAdvanceClick}
                        text    = {'SEARCH'}
                        style   = {{height:24,backgroundColor:'rgba(0,151,222,1)',borderRadius:40,fontSize:12,fontFamily:'Roboto-Medium',outlineStyle:'none'}}

                    />
                </div>




            </div>

        );
    }



    render() {

        let iconNormal = {
            width: '10px',
            height: '10px',
            right: 8,
            top: 8,
            position: 'absolute',
            color:'rgba(81,81,81,1)',
            fontSize: 14,
        };
        let iconExpand = {
            width: '10px',
            height: '10px',
            right: 8,
            top: 8,
            position: 'absolute',
            color:'rgba(0,154,222,1',
            fontSize: 14,
        };
        let searchTextNormal = {
            height:'16px',
            fontSize: 14,
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto',
            fontWeight:'500',
            marginLeft: '8px',

        };

        let searchTextExpand = {
            height:'16px',
            fontSize: 14,
            color: 'rgba(0,154,222,1)',
            fontFamily: 'Roboto',
            fontWeight:'500',
            marginLeft: '8px',

        };

        const onClick = (event) => this.onClick(event);

        return(
            <div className="advanceSearchExpandedWrapper">
                <div className="mapFinderSearchAdvanceContainer" onClick={onClick} >
                    <Text
                        text    = {'Advanced Search '}
                        style   = {(this.state.isExpand ?  searchTextExpand : searchTextNormal)}
                    />
                    <FontAwesome
                         name={(this.state.isExpand ?'chevron-up' :'chevron-down' )}
                         style={(this.state.isExpand ? iconExpand : iconNormal)}

                    />
                </div>

                {this.renderExpandedContent()}

                <style>{css}</style>
            </div>
        );

    }
}

MapFinderSearchAdvanceComponent.propTypes = {
    expand: PropTypes.bool,
    groupName: PropTypes.string,
    arrObject: PropTypes.array,
    cellStyle: PropTypes.object,
    onSearchAdvanceClick: PropTypes.func,
    onSearchAdvanceStatus: PropTypes.func,
    onSearchAdvanceExpand:  PropTypes.func,
    query: PropTypes.object

};

MapFinderSearchAdvanceComponent.defaultProps = {
    query: {},

};

const css = `
    .advanceSearchExpandedWrapper {
        width:calc(100% - 4px);
        margin:0 4px 0 0;
       border-radius: 4px;
        
        -webkit-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
        -moz-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
        box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);
         
    }
    .mapFinderSearchAdvanceContainer {
      background-color:rgba(244,247,250,1);
      height: 36px; 
      line-height: 32px;
      text-align: left;
      position: relative;
     
    }
    .searchAdvanceContent { 
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color:rgba(244,247,250,1)
    }
    .searchAdvanceElement{
        border-bottom:1px solid rgba(81,81,81,0.1);
    }
    .buttonSearchWrapper {
        width:30%;
        height:35px;
        margin: auto;
        padding-top:8px;
        padding-top:8px;
        
    }
    @media all and (orientation:landscape) { 
       .buttonSearchWrapper {
        width:50%;
        height:35px;
        margin: auto;
        padding-top:8px;
        
        
            
       }
      
     }

    }
`;

