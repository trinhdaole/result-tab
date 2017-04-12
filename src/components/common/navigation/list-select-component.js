"use strict";

import React, {Component, PropTypes} from 'react';

export default class ListSelectComponent extends Component {
    constructor(props) {
        super(props);

        const {items} = props;
        this.state = {
            currentIndex: items?this.getActiveIndex(items):0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.select = this.select.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const {items} = nextProps;
        this.setState({currentIndex: items?this.getActiveIndex(items):0});
    }

    getActiveIndex (items=[]){
        let index = 0;
        for(let i=0; i < items.length; i++){
            if(items[i].active){
                index = i;
                break;
            }
        }
        return index;
    }

    previous() {
        const {items, onChange} = this.props;
        let {currentIndex} = this.state;
        let tmp = currentIndex <= 0 ? items.length - 1 : currentIndex-1;

        this.setState({currentIndex: tmp});
        onChange(items[tmp].value);
    }

    next() {
        const {items, onChange} = this.props;
        let {currentIndex} = this.state;
        let tmp = currentIndex >= items.length - 1 ? 0 : currentIndex+1;

        this.setState({currentIndex: tmp});
        onChange(items[tmp].value);
    }

    gotoFirstNav(){

        const {navAction} = this.props;

        if(navAction) navAction.active();

    }

    select(e) {
        const {items, onChange} = this.props;
        let index = items.findIndex(item => item.value == e.target.value);
        this.setState({currentIndex: index});
        onChange(e.target.value);
    }

    render() {
        const {items, isCtrRound} = this.props;
        const {currentIndex} = this.state;
        let lengthLabel = items&& items[currentIndex] && items[currentIndex].label ? items[currentIndex].label.length : 0;

        if (items && items.length > 0) {
            return (
                <div id="listSelectWrap">

                    {(currentIndex > 0 && !isCtrRound)?<a id="back_button" href="#" className="arrow-wrap prevArrow" onClick={this.previous}>
                            <i className="fa fa-angle-left" aria-hidden="true"/></a>:null}
                    {(currentIndex < items.length-1 && !isCtrRound)?<a id="next_button" href="#" className="arrow-wrap nextArrow" onClick={this.next}>
                            <i className="fa fa-angle-right" aria-hidden="true"/></a>:null}

                    <select name="round" value={(items && items[currentIndex] && items[currentIndex].value)?items[currentIndex].value:""} onChange={this.select}
                            className={lengthLabel>11?"select30":"select"}>
                        {

                            items.map((item, index)=> {
                                if(Number.isInteger(item.label*1))
                                    item.label = 'ROUND ' + item.label;
                                return (<option key={index} value={item.value}>{item.label}</option>);
                            })
                        }

                    </select>

                    <i className="fa fa-sort" aria-hidden="true" style={(lengthLabel>=12)?addStyle:null}/>

                    <style>{css}</style>

                </div>

            );
        } else {
            return null;
        }
    }
}

ListSelectComponent.propTypes = {
    items: PropTypes.array,
    isCtrRound: PropTypes.bool,
    onChange: PropTypes.func,
    actions: PropTypes.object,
    navAction: PropTypes.object
};

const addStyle = {left: '75%'};

const css = `
  #listSelectWrap{
      height:50px;
      background-color:#fcd000;
      overflow:hidden;
      position:relative;
      border-bottom:1px solid hsla(0,0%,100%,.3);
  }
  #listSelectWrap select{
        width: 100%;
        display:inline-block;
        text-align: center;
        text-align: -webkit-center;
        text-align:-moz-center;
        text-align-last: center;
        font-size: 16px;
        text-transform: uppercase;
        -webkit-appearance: none;
        padding: 14px 0;
        border: medium none;
        -webkit-border-radius: 0;
        background-color:transparent;
        outline:none;
        position:relative;
        z-index:1;
        -moz-appearance: none;
        border: none;
  } 
  #listSelectWrap select:visited{
    outline: none;
  }
  
  @media screen and (min-color-index:0)
    and(-webkit-min-device-pixel-ratio:0) { @media
    {
       select {
           padding:14px 0 14px 40% !important;
       }
    }} 
    
   @media screen and (min-color-index:0)
    and(-webkit-min-device-pixel-ratio:0) { @media
    {
       .select30 {
           padding:14px 0 14px 25% !important;
       }
    }}
   
   #listSelectWrap select option{
    text-align: center;
    text-align: -webkit-center; 
   }  
  .arrow-wrap{
      position:absolute;
      height:50px;
      line-height:50px;
      padding:4px 12px;
      z-index:2;
  }
  .nextArrow{
      right:0;  
  }
  .arrow-wrap i{
    color:white;
    font-size:28px;
  }
  
  .fa-sort{
      color:white;
      position:absolute;
      top:18px;
      left: 70%;
  }

`;

