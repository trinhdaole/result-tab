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

            arrObject:this.props.arrObject,
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
    pagingClick(page){
        console.log('***** page   ', page);
    }
    componentDidMount() {
    }



    componentWillUnmount(){

    }

    renderList(){
        let resultListData = [{place:'Liverpool',description:'Beauty City'},{place:'London',description:'England Capital'}];
        let bodyData    = [
                            [{place:'Liverpool',description:'Beauty City'},'icon'],
                            [{place:'Milan',description:'Beauty City'},'icon'],

        ];
        let headerData = ['One','Two'];
       // return resultListData.map((item,index)=>{
       //
       //      return (
       //          <ListItem
       //              data    = {item}
       //          />
       //
       //      )
       //  })



        let _data = this.renderTableBody(bodyData);
        let _header =  this.renderTableHeader(headerData);
        const onPagingClick = (page) => this.pagingClick(page);
        return(
            <div className="mapFinderResultListContainer" style={{overflowX:'hidden', overflowY:'auto'}}>
                <TableComponent
                    //header={_header}
                    body={_data}



                />
                <div className="pagingWrapper">
                    {/*<Paging total={140} onClick={onPagingClick} />*/}
                </div>

            </div>
        );
    }

    renderTableHeader(headerData){

        let newData = [];
        headerData.map((item,index)=> {
            console.log('*** header item ',item);
            if(index == 0){
                newData[index] = this.renderHeaderText(item);
            }else{
                newData[index] = this.renderHeaderIcon(item);
            }


        });


        return newData;

    }
    renderHeaderText(item){
        return(
            <div >
                <Text
                    style={{
                        color: 'rgba(81,81,81,1)',
                        fontSize: 12,
                        fontFamily: 'Roboto',
                        fontWeight:'600'
                    }}
                    text={item}
                />
            </div>
        );
    }
    renderHeaderIcon(){
        let checkIcon   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAYAAAAULC3gAAAAAXNSR0IArs4c6QAAAy9JREFUSA3NlktIVFEYx//fPJjGIi0oNCwftAvauYnQSgsjXASlRSSZM1mQURgtklr0XFhGhT3mDgapm2lRYKiRULRq0QNa9MCauZOVoBhZOUQ0c/rO6Nxx9MyjmMYGhvud//875/vdM989dwiz+Wn3VyAYPM8IRQD1A1n7aNZ4NF8NhOjk+haDgdA9O0Cat5Z3pJ2BzAaMDAjfTDFCJgYurxOCbsyACdem55ndIbe+n0Eu8VdVdxhmlGZuhzS9CaHQZTUMDYFMa1Bf/CYzQJreDBE6p+wIwiBMllI4C19JP9rhyuw0iJp+gmGOKVci8jHBOtQt1SP+vwVy6S0MczhSbNp1ALAyTP6Hqfq/AZJN6/ZfZJjGqcWiMb2EnSqwM38oqk1E6QcKw+jXuHn3TC8WHhNewDyHYfJGVP4EkMu/AiZRBgEdjoJeEAlVclJNCBPcujxj+OBTfIiegiwbsDvvs8INSwTNt52jDl5k4tQk6oPNvgW1uePxJin1B8KCAb0DENuUPtFjZGdXonrhmNKfFOVjf9aAkaIQlfgR6EPn6PzJnOSXJ8KKt7onAcwjZM9dnwxGFmIgkaWouBqBsX50+RcovFipR9jwzHebb2RzrGGM+pFr24jqxd8NJUHAQNQWxy9BIPgQ7UOL4viAZ9COj75u9jcpc4h6YKUqVC0JKH2FSHxn/IjqV/i6V+GzRK9hNpejftmnGN8zPA9fxu/yDpfF6MaA7iCnsAbV9NOQUgiiLzmXr5UXP6SeQ+/4KSyHo9gf9mV/Bb72cv4qZT6RB8sLd2At/VL6CcQokEzSvKf40W+Ok/8eJms57KFRjAfvcU6JOs/UgZyCOt6ZoNpPrMYCyVxNP8on7Gn1NPlWFiMMvVLp848PR1EDn2MhpZ+COBNITtJ8B7mnLqQwP5pCaGOYxr8+VCdXUgNJ0+1r4J24Gm76aFl1ZEIr91eT2vwzNf7/IUfRdW7aXXzHiXuBcCZdMBI9/g5Fbszt3YoQunhojUjGlXAczuKTxjgNQXIgWcTtr0IoeIsjm1GTcIRhWoxxmoLUgGQx+Y+AQgf4Z+RXjfkmnAX308Twfy/zG61t85ie8IlUAAAAAElFTkSuQmCC';

        return(
            <div>
                <Icon
                    style={{height: 10, right: 50}}
                    src={checkIcon}

                />
            </div>
        );
    }


    renderTableBody(data) {


        let newData = [];
        if (data) {
            data.map((rows, index)=> {
                newData[index] = this.renderRow(rows);
            });
        }
        return newData;

    }
    renderRow(rows) {


        let newRow = [];
        if (rows) {
            rows.map((item, index)=> {

                    if(index == 0){
                        newRow[index] = this.renderInfoCell(item,index);
                    }else {
                        newRow[index] = this.renderLastCell(item,index);
                    }

            });
        }
        return newRow;

    }
    renderInfoCell(item,index){
        return(
            <div >
                <div>
                <Text
                    style={{
                        color: 'rgba(81,81,81,1)',
                        fontSize: 12,
                        fontFamily: 'Roboto',
                        fontWeight:'700'




                    }}
                    text={item.place}
                />
                    </div>
                <Text
                    style={{
                        color: 'rgba(81,81,81,1)',
                        fontSize: 10,
                        fontFamily: 'Roboto',


                    }}
                    text={item.description}
                />

            </div>
        );
    }
    renderIconCell(item,index){

        let checkIcon   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAYAAAAULC3gAAAAAXNSR0IArs4c6QAAAy9JREFUSA3NlktIVFEYx//fPJjGIi0oNCwftAvauYnQSgsjXASlRSSZM1mQURgtklr0XFhGhT3mDgapm2lRYKiRULRq0QNa9MCauZOVoBhZOUQ0c/rO6Nxx9MyjmMYGhvud//875/vdM989dwiz+Wn3VyAYPM8IRQD1A1n7aNZ4NF8NhOjk+haDgdA9O0Cat5Z3pJ2BzAaMDAjfTDFCJgYurxOCbsyACdem55ndIbe+n0Eu8VdVdxhmlGZuhzS9CaHQZTUMDYFMa1Bf/CYzQJreDBE6p+wIwiBMllI4C19JP9rhyuw0iJp+gmGOKVci8jHBOtQt1SP+vwVy6S0MczhSbNp1ALAyTP6Hqfq/AZJN6/ZfZJjGqcWiMb2EnSqwM38oqk1E6QcKw+jXuHn3TC8WHhNewDyHYfJGVP4EkMu/AiZRBgEdjoJeEAlVclJNCBPcujxj+OBTfIiegiwbsDvvs8INSwTNt52jDl5k4tQk6oPNvgW1uePxJin1B8KCAb0DENuUPtFjZGdXonrhmNKfFOVjf9aAkaIQlfgR6EPn6PzJnOSXJ8KKt7onAcwjZM9dnwxGFmIgkaWouBqBsX50+RcovFipR9jwzHebb2RzrGGM+pFr24jqxd8NJUHAQNQWxy9BIPgQ7UOL4viAZ9COj75u9jcpc4h6YKUqVC0JKH2FSHxn/IjqV/i6V+GzRK9hNpejftmnGN8zPA9fxu/yDpfF6MaA7iCnsAbV9NOQUgiiLzmXr5UXP6SeQ+/4KSyHo9gf9mV/Bb72cv4qZT6RB8sLd2At/VL6CcQokEzSvKf40W+Ok/8eJms57KFRjAfvcU6JOs/UgZyCOt6ZoNpPrMYCyVxNP8on7Gn1NPlWFiMMvVLp848PR1EDn2MhpZ+COBNITtJ8B7mnLqQwP5pCaGOYxr8+VCdXUgNJ0+1r4J24Gm76aFl1ZEIr91eT2vwzNf7/IUfRdW7aXXzHiXuBcCZdMBI9/g5Fbszt3YoQunhojUjGlXAczuKTxjgNQXIgWcTtr0IoeIsjm1GTcIRhWoxxmoLUgGQx+Y+AQgf4Z+RXjfkmnAX308Twfy/zG61t85ie8IlUAAAAAElFTkSuQmCC';
        let lineIcon    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAGCAYAAACrZDylAAAAAXNSR0IArs4c6QAAAJRJREFUKBVjZICC+fPnm/7582cCIyOjyf///9lg4rSkgXb9Atp1hoWFpSAxMfE0yC5GELF48WLJnz9/XgNKCoD49AZAh31gZ2fXio2Nfc4EsvzHjx++A+UYkP0gu0FuALHBDgIxBgsAO4iDg2MzKNgGylEgu0FuANkPdhAo7piZmd2A/GOghEYvh0HtOgayG+QGkL0AHEk0K2UcjZAAAAAASUVORK5CYII=';
        let icon = checkIcon;
        let iconHeight = 10;
        if(index == 1 || index == 2){
            icon = lineIcon;
            iconHeight = 2;
        }
        return(
            <div>
                <Icon
                    style={{height: iconHeight, right: 50}}
                    src={icon}

                />
            </div>
        );
    }
    renderLastCell(){
        let arrowIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAepJREFUOBHNkz1oFFEUhc/ZNWtcgr9NwNLSOiCC0Y0hwd0REnCxCMFKraJ2phLttNNKUghpAuoWokk27I9oZWNjY5OAgYBgIQqSRBSzJ3fe7ryJTnZdsHFgmPvuPd/cc9+8Af6LS/VgQtXCrW7NMBKqElwA9NjuNMh7HFmcjmrtnilfoCYdGCakm6oGD3ytTRDDR7NFgM+9To1rqhRmJHl3vtYKPMzjpZ/IDJh1PIlFuoJqYVYqpuNcHCXe6oS1zUdm/ZKXkU/RMzDB3O1fPmdBAg6LzmoteGjBVS8mX8BGcw5byV3hCFA1fx/C9WhtX6GCvuw4T5a+hzk/sxfsCDhSvmGSuz4ljWJ9s6xXxb4w17FzBLmDI92J1oa9wYGD5zp29mLyi49doA0cOfzjr51VCy5DjRmbvaklX9vc+XDujrBt2CTEWdv/lkOzm8mOMldaDw20he0nuYgtzfkjS7zF/kPDPDH3zTlvB6t+fgyNrZJZ3eOE5DvswxBPLX6NwPCZ6Gw/RN4OxzPrmGkK+R6Z1Bnm5j/vBBOw6oVhNDRvHXudkFhGD04zV/70J/gbrEp+0IwsWcdsE+QHpDnIswsfdwPDXPydU+gHW1bJNaQ11AlMvNDmHTcHq3o5dixR7Cahlam93ej+WbMNwF6eB3c76+oAAAAASUVORK5CYII=';
        return(
            <div style={{float:'right'}}>
                    <span className="nextText">
                    <Text
                        style={{
                            color: 'rgba(255,185,74,1)',
                            fontSize: 10,
                            fontFamily: 'Roboto-Bold',
                            paddingTop: 5,
                            textAlign: 'center'

                        }}
                        text={'NEXT'}
                    />
                    </span>

                <Icon
                    style={{height: 8, right: 50, paddingLeft: 3}}
                    src={arrowIcon}

                />
            </div>
        );
    }



    render() {

        return (
            <div className="mapFinderResultListContainer" style={{overflow:'scroll', overflowY:'auto'}}>
                {this.renderList()}
                <style>{css}</style>
            </div>
        );
    }
}
MapFinderResultListComponent.propTypes = {
    onSearchClick : PropTypes.func,
    arrObject:PropTypes.any,

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
