import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import TextComponent from '../../common/text/text-component';
import Input from '../../common/input/input-component';
import Button from '../../common/button/button-component';
import Icon from '../../common/icon/icon-component';
import  MapFinderDropdownComponent from  './map-finder-dropdown-component';
import SearchAdvanceComponent from './map-finder-search-advance-component';
import  * as Service  from '../../../services/map-finder-services';


export default class SearchFilterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputWidth: '85%',
            searchNearbyData:null,
            searchStatus:'',
            isSearchVisible:true,
            lat:0,
            long:0,


        };

    }

    componentDidMount() {
        window.addEventListener("orientationchange", this.handleOrientationChange.bind(this), false);
        this.checkLocation();
    }

    checkLocation(){
        navigator.geolocation.getCurrentPosition(
            (initialPosition)=> {
                //console.log('*** latitude  ',initialPosition.coords.latitude)
                this.setState({
                    isSearchVisible:true,
                    lat: initialPosition.coords.latitude,
                    long: initialPosition.coords.longitude
                })
            },
            (error) => {
                console.log('**** can not get the current location  ',error)
                this.setState({isSearchVisible:false})
            }
        );
    }



    getData(){

        let lat = -33.787266;
        let lon = 150.871959;
        let cat = 'club';
        //let sport =  'baseball';

        // let lat     = this.state.lat;
        // let long    = this.state.long;
        let sport   = this.refs.inputSearch.getInputValue()


        Service.getSearchNearByPlace(lat, lon, cat, sport).then(data => {


            if (data) {
                let dataResult = data.results ? data.results : [];
                this.setState({searchNearbyData: dataResult,isSearchVisible:true});
                this.props.onSearchClick(dataResult);

            }
            this.props.onSearchStatus('finished');

        });


    }

    handleOrientationChange(){

        if(screen.orientation.type == 'landscape-primary'){
            this.setState({
                inputWidth : '65%'
            });
        }else{
            this.setState({
                inputWidth : '85%'
            });
        }
    }

    componentWillUnmount(){

    }

    focusSearch(){
        this.refs.inputSearch.forceFocus();
    }

    clearSearch(){
        this.refs.inputSearch.clearText();
        this.refs.searchAdvance.clearFilter();

    }

    onSearchClick(){
        this.getData();
        this.props.onSearchStatus('searching');


    }

    onSearchAdvanceClick(data){

        if(data){
            let dataResult = data.results ? data.results : [];
            this.props.onSearchClick(dataResult);
        }
    }
    onSearchAdvanceStatus(status){

        this.props.onSearchStatus(status);
    }

    onKeyPress(id, event){

        if(event.key === 'Enter'){
            this.getData();
            this.props.onSearchStatus('searching');
        }


    }

    renderSearchButton(){

        let iconSearch = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAABJxJREFUWAnNmW1oHEUYx//P7qUtGo2vpT1Ne3dWpa1YKyKo4DcRK31RVKS0xbydWirFquCX6ge1Cr6AUIveXaMWabF+KVJR8SUUbUEs9ZMfNCG38SDBGrWpbY1J7sZndtOdWS65u9ldvQxs+M/uPP/nN7OztzMbQpjSO7QCQiyHwGI+FvJxCiRGYGMQranjeIjKYWwbjaFGG+LdYgpTYhsEbQDENTXiRmHRYT7y6Ewdq9Eu9KX60IXSZRBTOxl0K4/oPLNMdAi2eBZdmZ/M4mq3rg29d3AVyviYLZYEbIhOcf0IQL9AVE7CwqWoUJI7dntVW9A5WOIRdGc+CnhEqMwOXXDu5Xn7IR8XKn86wiO3C6vSfbiFJtV5TRWc1Ryzne/KZu6E5V4hEtzBnehJvaS1DC1nhs4Vb2LHo5z0As+Z/uTR7ER3+lDDmfKlG3laHWCPFSqGOpBNv6fq4VQ19P7hK3B2/ASPVLtrSRhAomUNOtr7jVN88PvF+Pv0QR75u6e9JmDTnehMf2fspQV4t087gTPjz/vA4BGmlntCAUvPTZefxqL59/PUOOGmkA/yFPZwJ6oHS2eoo4PQhdIybv+oirG2oLt9QNVDqLXJc0jM2wCis160uBkF5+EQTn5IELoyuZ2vtLhXCV8hu/Sw3zKK6LyqxHfvdc3iGU0byyA0Yb3vYNMLvo5D2K2v8WiPu1ZCrMa+4eDPqEEOBe3+VPkP32/oSH1j4FO/adeVf/EvyRd+w4mJdb42FApa0EoVS1/zqFRUPSYloKCF0PKZ+StoqvAb7XzhN91/UUjzFdDymSVT0EIs1EJ/1XScUvkSrw5DFgUNjGkebZqOTwrovno+oxwKmqwRFalPFXU2siJtShC0fGbOChpU9EMF3ebrOAUFfFU+wxwKOrnkW44948XzIsd7Oxra1WguX91CrFUtEp8pbaYU9Br6h0M/98PF1BO+jkPkiw8y9CLXimgYXVd/H9ZWQUsHiwrKSDyG3qGMqkdQxwUvDWiX70DUy+8BXmOHK0Ho7jTfMupzreSKrFw+wHvDBeGstagfnDf5bXh+XzmKBRe9ql01lkFoGZ6gp/mvtysRuJWXku/DHSljby8g7zzF0+JxFc07GLlkjVBmXtfmi1lO9I7y5W1W6/wHsDE5qs7VUX0igf4ijzC2qpbWj8imblD1cGpmaOmVK77Bt/RJ35boDxBeRDK1B95D61+qEjnnPv4O8jJ3/HrtmvwWYrPHW+jJbNPOG8vZoaVVztnB4Dz/pjeonv0YP0SfsPwStlVC2ToJmryEn4UkKuIOhlqvdj5eAD/g/Xzt2ukaN40GXhtaZskP3QWUdzPIdX7SRoW8O6Dn0Lb0bYw5+3jkN/qhEcDrQ8sscn4OOD084jsYXm7J6hX5lWkvT4ZX0JGW30iAg8KOC7wxaB0xN7QSVmUdf5xZDlQW863m1Zr78WaEOzQIsj/lfeXRGdfjMYGbQ+sdCKNjAP//oWVHI4I3BzoiePOgI4A3FzokePOhQ4DPDWhD8LkDbQA+t6BnAwd2I5vxd1LV62kZ2Mwi/zPWltrCb9T9GsbPmsa/DzqLGTAS1oUAAAAASUVORK5CYII=';

        const onSearchClick = () => this.onSearchClick();
        if(!this.state.isSearchVisible){
            return null;
        }
        return(
            <div onClick={onSearchClick}>
                <Icon
                    src={iconSearch}
                    style={{width: 20,  position: 'absolute', top: 6, right: 10}}
                />
            </div>
        );
    }

    render() {



        let inputStyle = {
            width:this.state.inputWidth,
            height:'30px',
            paddingLeft:'12px',
            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'40px',
            fontSize: '12px',
            fontFamily: 'Roboto-Regular',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none',
            textOverflow: 'ellipsis',


        };
        let cellStyle = {
            borderRadius: '4px',
            borderWidth:'0',

        };

        const onKeyPress = (id, event) => this.onKeyPress(id, event);
        const onSearchAdvanceClick = (data) => this.onSearchAdvanceClick(data);
        return (
            <div className="searchFilterContainer">
                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Search and filter'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)', fontFamily:'Roboto', fontWeight:'600'}}
                        />
                    </p>
                </div>
                <div className="searchViewWrapper">
                    <div className="searchView">
                        <Input
                            type="text"
                            style={inputStyle}
                            ref="inputSearch"
                            placeholder={'Enter postcode or club name'}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                            onKeyPress={onKeyPress}
                        />

                        {this.renderSearchButton()}


                    </div>

                </div>

                {/**<MapFinderDropdownComponent
                    groupName="Programs & Competitions"
                    arrObject={arrObject}
                />**/}
                <SearchAdvanceComponent
                    ref="searchAdvance"
                    onSearchAdvanceClick    = {onSearchAdvanceClick}
                    onSearchAdvanceStatus   = {(status)=> this.onSearchAdvanceStatus(status)}
                />




                <style>{css}</style>
            </div>
        );
    }
}
SearchFilterComponent.propTypes = {
    onSearchClick : PropTypes.func,
    onSearchStatus : PropTypes.func

};


const css = `
    .searchFilterContainer {
        width:100%;
       
        background-color: rgba(255,255,255,1);
        float:left;
        
        border-radius: 4px;
     
        margin: -35px 4px 10px 4px;
        
        
    }
     .searchFilerChildElementWrapper{
        height:34px;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     }
     .searchFilerChildElementNoBorder{
        height:34px;
       
     }
     .searchTextWrapper {
        line-height: 34px;
     }
     .searchViewWrapper {
        height:48px;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     }
     .searchView{
        height:32px;
        background-color: rgba(244,247,250,1);
        border-radius: 40px;
        border-bottom-width : 1px;
        
        position: relative;
        margin: 14px 8px auto;
        
     }
     @media all and (orientation:landscape) { 
       .searchFilterContainer {
            width:30%
       
       }
     
    
    
   
`;
