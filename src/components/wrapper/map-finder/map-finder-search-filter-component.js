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
            isShowAdvanceSearch:false,

        };

        this.lat =  -33.787266 ;
        this.lng = 150.871959;

    }

    componentDidMount() {
        window.addEventListener("orientationchange", this.handleOrientationChange.bind(this), false);
        this.checkLocation();
    }

    checkLocation(){
        navigator.geolocation.getCurrentPosition(
            (initialPosition)=> {
                //console.log('*** latitude  ',initialPosition.coords.latitude)

                // this.lat =  initialPosition.coords.latitude;
                // this.lng = initialPosition.coords.longitude;

                this.getAllData( this.lat,  this.lng);
                this.setState({
                    isSearchVisible:true,

                });
            },
            (error) => {
                this.getAllData( this.lat,  this.lng);
                //this.setState({isSearchVisible:false})
            }
        );
    }



    getAllData(lat, lon){
        this.props.onSearchStatus('searching');

        let cat = 'club';
        let sport = this.props.query.sport ? this.props.query.sport : 'baseball';

        Service.getSearchNearByPlace(lat, lon, cat, sport).then(data => {


            if (data) {
                let dataResult = data.results ? data.results : [];
                this.props.onSearchClick(dataResult);

            }else{
                this.props.onSearchClick([]);
            }
            this.props.onSearchStatus('finished');

        });

    }

    fetchDataRow(arrayObject, currentIndex){

        if(arrayObject.length <= 0 || currentIndex >= arrayObject.length){
            this.props.onSearchClick([]);
            this.props.onSearchStatus('finished');
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
                this.props.onSearchClick(dataResult);
                this.props.onSearchStatus('finished');
            }else{
                let index = currentIndex + 1;
                this.fetchDataRow(arrayObject, index);
            }

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

        if(  this.refs.inputSearch){
            this.refs.inputSearch.forceFocus();
        }

        if(this.state.isShowAdvanceSearch){
            this.refs.searchAdvance.forceFocusFirst();
        }
    }

    clearSearch(){
        if(this.refs.searchAdvance){
            this.refs.searchAdvance.clearFilter();
        }

        if(  this.refs.inputSearch){
            this.refs.inputSearch.clearText();
        }



    }

    checkInterger(value)
    {

        var regex=/^[0-9]+$/;
        if (value.match(regex))
        {

            return true;
        }
        return false;
    }

    onSearchClick(){

        this.props.onSearchStatus('searching');

            let postcode = '' ;
            let  suburb = '';
            let name = '';
            if(this.refs.inputSearch.getInputValue().length >= 2){
                if(this.checkInterger(this.refs.inputSearch.getInputValue())){
                    postcode = this.refs.inputSearch.getInputValue();
                }else{
                    if(this.refs.inputSearch.getInputValue().length >= 3){
                        name = this.refs.inputSearch.getInputValue();
                    }
                }

            }

            let sport = this.props.query.sport? this.props.query.sport : 'baseball';

            Service.getSearchPlace(postcode, suburb, name, sport ).then(data => {

                if(data){
                    let dataResult = data.results ? data.results : [];
                    this.fetchDataRow(dataResult,0);
                }else{
                    this.props.onSearchClick([]);
                    this.props.onSearchStatus('finished');
                }
            });


    }

    onSearchAdvanceClick(data){

        this.props.onSearchClick(data);

    }

    onSearchAdvanceExpand(expand){
        this.setState({
            isShowAdvanceSearch: expand
        });
    }

    onSearchAdvanceStatus(status){

        this.props.onSearchStatus(status);
    }

    onKeyPress(id, event){

        if(event.key === 'Enter'){
            
            this.onSearchClick();

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

    renderDisableSearchButton(){

        let iconSearchDisable = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAABGdJREFUWAnNmM1y2zYQx/8gSOorib9iO3Xr7zSe6Vv0AXr1JeNOm4tfw8/QQ2cynSQzTU9+gF77Aj310Jkklu0k/kqdNJFtKZIIEAUoEyAjURJJpfZeuCQXuz+CC2ABgiyy/boEzy+Cew4814bPOIjjwXVa2JhtgBCRxe2wbciwhvjpRQGTpWk0m+MQKCS2sywGi9RQqbzF+sxFol2OF4Oh/xA29qpfAGIanAy2j8I47gcIfogfl5vRx3n1/hAPj8pwP66CCTcWyKYcnF/Ij2ijTD14zAZ8B4RWumyJ7aNE9nF/8X3MR46bZOjt6hjO6AoEs7R/y7pAYewY9yfPE/M2+NDWDBif0u2U4ttH2Fw6jj3LeNMbWgWm7TUNLGTPOtiXv/nD0HEe/lkGGVuWH1fUbXz+Eptrb/V9RqUbWuXwzrNvANsJfBK0QOlOprzcFhT13RWZMrcCX1QI2Def4fs79Yy8QTPz60Mvz3fnNLDq4azAyt864fhhpSr9NQL3aiC3mgsQoruzwvhDXOPQT/aKcOht3a6TEvlGPiE+xharUAMyEFbGo4MJHSODEodu+zPgrNMLgpynyuF+wdflLEOsN9rEat7RegYlDm1549oH9UYy0rW/m/NvoHJaCSclbH8yjWrDwYqBVjNGOPjUqvZgbbSrmcpvn5xppGbVdJB+OJxioIu1km5CWPI8rI0yKC4MdNsy8VK6MtB+sTPFKQdqpfscwmnEr1xBM4qBdhy5FIcil+bPIY0G024pjcTTT4dSDLSQ5WUolk1DdaRXuxjx65t4KYMYaOqa3m3X4wVSSqfJ5iySEpaJl9yg5xsD7ddNvlG70tM670PqGL9+y8RL6ddA79y9ABGdVUsVOWp1HKWopZtE1gFnvJbVvYHeksstj0xJwp3O6rRnu0d/T8APB59MDbUtyygGOnBgRcrGxjR+l1usUUhQIBXmtCvmvUusx7VRshKH3lytwZU1hxJVkR2KFWyJuE2yr+Q3T3fn9b5SrbZT906SjQe/6QaaLB2A2pe7aauMhVdLuUrJX3Zn0ZL7y1AIPwpK1vA+w7Ub+rs5mWvea+2LexN4vHcPanOQRlRK/FpdkPusrzrNeFkeObh48PVpGje9bJOL8cc783JgzuhGQi4GxD7G4fIp1KDtJz//NQG3/KVOCUhgQqfAyAEI/sHm6qt+zQe9S4ZWLdWv1T116UrtxKk81/jYOkfFaqNeY7BvUIiKA96+gaC8vdyqhdGJUwRjctt2WZr65DQPeH9oFfS3F7fQJHKL1OeAJoT79Kr+TtE6wsbqKZ6+XEKLTWqTHOCDoVUUlZ9PTm7Dr88OBa9mCJ+/w+HBCba+7RRJyseIwIeD1t0jFXWO9/58HJZVhHAc2LYtT5FkvjMPtNQCq58FG4he53kjAk8PHf2ALPoIwP9/aPWhOcGvBjon+NVB5wC/WuiM4FcPnQH8ekCnBL8+0CnArxf0kODdpalqeJWiVtKNxX0U7H81RknETm7/A5f9xBZMR6S9AAAAAElFTkSuQmCC';

        if(!this.state.isSearchVisible){
            return null;
        }
        return(
            <div>
                <Icon
                    src={iconSearchDisable}
                    style={{width: 20,  position: 'absolute', top: 6, right: 10}}
                />
            </div>
        );
    }

    renderQuickSearch() {

        const onKeyPress = (id, event) => this.onKeyPress(id, event);

        let inputStyle = {
            width:this.state.inputWidth,
            height:20,
            paddingLeft:10,
            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'40px',
            fontSize: '14px',
            fontFamily: 'Roboto',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none',
            textOverflow: 'ellipsis',
            paddingTop:6,

        };

        let inputDisableStyle = {
            width:this.state.inputWidth,
            height:20,
            paddingLeft:10,
            fontSize: '14px',
            fontFamily: 'Roboto',
            color: 'rgba(81,81,81,0.2)',
            paddingTop:6,
            lineHeight:'32px',


        };

        if(this.state.isShowAdvanceSearch){
            return(
                <div className="searchViewWrapper">
                    <div className="searchView">
                        <TextComponent
                            style={inputDisableStyle}
                            text={'Enter postcode or club name'}
                        />
                        {this.renderDisableSearchButton()}
                    </div>
                </div>
            );
        }else{
            return(
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
            );
        }
    }

    render() {


        const onSearchAdvanceClick = (data) => this.onSearchAdvanceClick(data);
        const onSearchAdvanceExpand = (expand) => this.onSearchAdvanceExpand(expand);

        return (
            <div className="searchFilterContainer">
                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Search and filter'}
                            style={{fontSize:14, paddingLeft:8,color:'rgba(81,81,81,1)', fontFamily:'Roboto', fontWeight:'600'}}
                        />
                    </p>
                </div>
                {this.renderQuickSearch()}
                <SearchAdvanceComponent
                    ref="searchAdvance"
                    query={this.props.query}
                    onSearchAdvanceClick    = {onSearchAdvanceClick}
                    onSearchAdvanceExpand   = {onSearchAdvanceExpand}
                    onSearchAdvanceStatus   = {(status)=> {this.props.onSearchStatus(status)}}
                />

                <style>{css}</style>
            </div>
        );
    }
}
SearchFilterComponent.propTypes = {
    onSearchClick : PropTypes.func,
    onSearchStatus : PropTypes.func,
    query: PropTypes.object

};

SearchFilterComponent.defaultProps = {
    query: {},

};

const css = `
    .searchFilterContainer {
        width:calc(100% - 8px);;      
        background-color: rgba(255,255,255,1);        
        border-radius: 4px;
        margin: -35px 0 10px 4px;
        
        
    }
     .searchFilerChildElementWrapper{
        width:calc(100% - 4px);
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
        width:calc(100% - 4px);
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
         
     
     }
     /* landscape styles here */
     @media screen and (min-aspect-ratio: 13/9) { 
     
     .searchFilterContainer {
                width:30%;
                float:left;
           
           }
     }

       
       
       
        
    
     
    
    
   
`;
