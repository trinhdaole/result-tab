
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

        };
    }

    onClick(event) {
        console.log(' ****  onClick   ****  ');
        event.stopPropagation();
        event.preventDefault();

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

    onSearchAdvanceClick(){
        this.props.onSearchAdvanceStatus('searching')
        let postcode = 10 ;
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
        let sport =  'baseball';

        Service.getSearchPlace(postcode, suburb, name, sport ).then(data => {
            console.log('data');
            console.log(data);
            this.props.onSearchAdvanceClick(data);
            this.props.onSearchAdvanceStatus('finished')
        });
    }

    renderExpandedContent(){
        let inputStyle = {
            width:'90%',
            height:'30px',
            marginLeft:8,

            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'4px',
            fontSize: '12px',
            fontFamily: 'Roboto-Regular',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none'

        };
        let textStyle = {
            height:'16px',
            fontSize: 10,
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto-Regular',
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
                        ref="inputClubName"
                        style={inputStyle}
                        placeholder={''}
                        onChange={this.onChange}
                        onKeyUp={this.onKeyUp}
                    />
                </div>
                <div className="searchAdvanceElement">
                <Text text  = {'Postcode'} style={textStyle}/>
                <Input
                    ref="inputPostcode"
                    style={inputStyle}
                    placeholder={''}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                />
                </div>

                <div className="searchAdvanceElement">
                    <Text text  = {'Suburb'} style={textStyle}/>
                    <Input
                        ref="inputSuburb"
                        style={inputStyle}
                        placeholder={''}
                        onChange={this.onChange}
                        onKeyUp={this.onKeyUp}
                    />
                </div>

                <div className="buttonSearchWrapper">
                    <Button
                        onClick={onSearchAdvanceClick}
                        text    = {'SEARCH'}
                        style   = {{height:24,backgroundColor:'rgba(0,151,222,1)',borderRadius:40,fontSize:10,fontFamily:'Roboto-Medium'}}

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
            fontSize: 12,
        };
        let iconExpand = {
            width: '10px',
            height: '10px',
            right: 8,
            top: 8,
            position: 'absolute',
            color:'rgba(0,154,222,1',
            fontSize: 12,
        };
        let searchTextNormal = {
            height:'16px',
            fontSize: 10,
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto-Medium',
            marginLeft: '8px',

        };

        let searchTextExpand = {
            height:'16px',
            fontSize: 10,
            color: 'rgba(0,154,222,1)',
            fontFamily: 'Roboto-Medium',
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

};

const css = `
    .advanceSearchExpandedWrapper {
        width:100%;
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

