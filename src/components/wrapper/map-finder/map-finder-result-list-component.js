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
            totalItem:0,
            currentPage:1,
            pagingList:[10],
            itemPerPage:5,


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
        console.log('***** page   ', page);
        console.log('***** perPage   ', perPage);
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

        const {resultData} = nextProps;

        let tempTotalPage   = ((resultData.length/this.state.itemPerPage).toFixed(0));

        var pagingList  =   [];

        for(var i = 1;i<= tempTotalPage;i++){
            pagingList.push(i*this.state.itemPerPage);

        }

        this.setState({totalItem:resultData.length})
        if(pagingList.length != 0){
            this.setState({pagingList:pagingList});
        }

    }

    renderList(){

        const {resultData,searchStatus} = this.props;

        //console.log('*****   searchStatus list  ',searchStatus)
        if(searchStatus == 'searching'){
            return (
                <div className="mapFinderResultListContainer"  style={{overflowX:'hidden', overflowY:'auto'}}>
                   <div>searching</div>

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

        const {resultData} = this.props;


        if(resultData){
            return (
                <div className="pagingWrapper">
                    <Paging
                        total       = {this.state.totalItem}
                        onClick     = {onPagingClick}
                        perPage     = {this.state.itemPerPage}
                        current     = {this.state.currentPage}
                        perPageList = {this.state.pagingList}
                    />
                </div>

            );
        }
        return null;



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
