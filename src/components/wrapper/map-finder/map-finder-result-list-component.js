import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import ListItem from './map-finder-result-list-item';
import TableComponent from '../../common/table/table-component';
import Icon from '../../common/icon/icon-component';
import Text  from '../../common/text/text-component';
import Paging from '../../common/paging/paging-component';


export default class MapFinderResultListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearching:false,
            totalItem:0,
            currentPage:1,
            pagingList:[10],
            itemPerPage:10,



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
    pagingClick(page,perPage){

        this.setState({
            currentPage:page,
            itemPerPage:perPage
        })
    }
    componentDidMount() {

    }



    componentWillUnmount(){

    }

    componentWillReceiveProps(nextProps){

    }

    renderList(){


        let iconLoading = 'data:image/gif;base64,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';
        const {resultData,searchStatus} = this.props;

        let iconCheckStyle = {

            height: 100,
            width:152,
            marginLeft:'auto',
            marginRight:'auto',
            display:'block',


        };





        if(searchStatus == 'searching'){
            return (
                <div className="mapFinderResultListContainer"  style={{overflowX:'hidden', overflowY:'auto'}}>
                    <Icon
                        src={iconLoading}
                        style={iconCheckStyle}
                    />

                </div>

            );
        }


        let resultDataPerPage   = [];
        if(resultData){
            resultDataPerPage = resultData.slice((this.state.currentPage-1)*this.state.itemPerPage,(this.state.currentPage*this.state.itemPerPage));
        }




        if(resultDataPerPage){
            return resultDataPerPage.map((item,index)=> {
                return (
                    <div className="mapFinderResultListContainer"  key   = {index} style={{overflowX:'hidden', overflowY:'auto'}}>
                        <ListItem data  = {item}
                        />

                    </div>

                );

            });
        }

    }
    renderPaging(){
        const onPagingClick = (page, perPage) => this.pagingClick(page, perPage);
        const {resultData,searchStatus} = this.props;
        let totalItem = 0;
        let pagingList  = [];
        if(resultData){
            let tempCount   = ((resultData.length/this.state.itemPerPage) <= 0.8) ?  0.8 : resultData.length/this.state.itemPerPage ;
            let tempTotalPage   = tempCount.toFixed(0);
            for(var i = 1;i<= tempTotalPage;i++){
                pagingList.push(i*this.state.itemPerPage);

            }
            totalItem = resultData.length;
            console.log('**** tempTotalPage   ',tempTotalPage)
            if(tempTotalPage > 3){
                pagingList = [10,20,50];
            }

        }

        if(searchStatus == 'searching'){
            return null;
        }
        if(resultData){
            //console.log('*** here 2 totalItem  ',this.state.totalItem)
            return (
                <div className="pagingWrapper">
                    <Paging
                        total       = {totalItem}
                        onClick     = {onPagingClick}
                        perPage     = {this.state.itemPerPage}
                        current     = {this.state.currentPage}
                        perPageList = {pagingList}
                    />
                </div>

            );
        }else{

            return null;
        }

    }



    render() {
            return (
                <div className="mapFinderResultListContainer" style={{overflow:'scroll', overflowY:'auto'}}>
                    {this.renderList()}
                    {this.renderPaging()}
                    <style>{css}</style>
                </div>
            );

    }
}
MapFinderResultListComponent.propTypes = {
    onSearchClick : PropTypes.func,
    arrObject:PropTypes.any,
    resultData:PropTypes.array,

};


const css = `
    .mapFinderResultListContainer {
       width:100%;
       overflow:hidden !important;
       
    }
    .mapFinderResultListContainer > div{
      
       overflow:hidden !important;
      
    }
    .tableWrapper thead{
      background-color: blue;
      height:80px;
    }
    .headerWrapper {
        width:100%;
        height:50px;
        background-color: rgba(244,247,250,1);
    }
    .nextText {
        display:none;
    }
    .tableWrapper tbody tr:nth-child(odd) {background: #FFF}
    
    .tableWrapper tbody tr{
        
        
        border-bottom:1px solid rgba(234,234,234,1);
    
  }
    .tableWrapper tbody td{
        padding:2px;
       
  }
  .tableWrapper td:nth-child(1) {
         width:80%;
         padding: 20px 0;
         text-align:left;
         padding-left:10px;
    }
    .tableWrapper td:nth-child(2) {
         width:20%;
         
    }
    .pagingWrapper {
        width:100%;
        height:50px;
        font-family:Roboto;
        
    }
    .paging{
        width:93%;
    }
    .tableCell{
        width:100%;
        height:40;
    }
  
  
  
  
  @media all and (orientation:landscape) {
   .nextText {
        display:inline;
       
    
    }
      .tableWrapper td:nth-child(1) {
         width:70%;
        
         padding: 20px 0;
         text-align:left;
         padding-left:10px;
         
    }
    .tableWrapper td:nth-child(2) {
         width:30%;
         display:table-cell;
        
         
         border-left:2px solid white;
         border-right:2px solid white;
         
         
    }
    .mapFinderResultListContainer > div{
      
       overflow:hidden !important;
      
    }
    
    
       
  }
    
    
`;
