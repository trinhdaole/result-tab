/**
 * Created by long on 4/13/17.
 */
/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'
import  Cell from './cell-map-finder-dropdown-component'

export default class MapFinderDropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand:this.props.expand,
            groupName:this.props.groupName,
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


    renderList() {
        const itemClick = (tempData,index) => this.itemClick(tempData,index);
        if(this.state.arrObject) {
            return this.state.arrObject.map((item, index)=> {
                return (
                  <Cell
                      key={index}
                      index={index}
                      data={item}
                      onClick={itemClick}
                  />
                );
            });
        }else{
            return null;
        }
    }

    render() {



        let titleNormalStyle = {
            height:'16px',
            fontSize: '10',
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto-Regular',
            marginLeft: '16px',
            marginRight: '16px',
        };
        let titleSelectStyle = {
            height:'16px',
            fontSize: '10',
            color: 'rgba(0,154,222,1)',
            fontFamily: 'Roboto-Medium',
            marginLeft: '16px',
            marginRight: '16px',
        };
        let iconDownStyle = {
            width: '12px',
            height: '6px',
            right: '6px',
            top: '12px',
            position: 'absolute',
        };
        let iconUpStyle = {
            width: '11px',
            height: '8px',
            right: '6px',
            top: '12px',
            position: 'absolute',
        };
        let srcIconDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAAAXNSR0IArs4c6QAAAVdJREFUOBGlUktOhEAQtWXhDo7gEdi58gyjGcLOySRGnRiDF9BJiHqHGX+xTdwR2Dvegr3n0I3ge0wX6QATMLLgVVfVe4+qRm2ZZzweTxDqsiy3gW++70/jOC6k3ofgz8G9YZ9Sap5l2R1jismzZ8R5PsrzXMPArktfC21xU9wPw9BhXAukaXoJ54WwYTYZYgLxa/lycqHx7rruYZIkPzzXBiiUMLlAbskCH2PysmmSIAiu0HO77q7eK4prrb8lpyQQBEGBuADOJAd8xZ0c23dC8aIoqj2bvpXneQe2OPP1BKaJI3KSc+C95IBTrOtZJhkqTn5rAhE1kyyBZ5KDqUb8iVy9FuQ+sJZR88trjgRdSBNcIic57ar3iZPTWpEtBIES//MM+GTnGQ8Rr/qaxK6zWdcD8KQi9azF1th4B3YTY2PyiHDXcZwR/vOvZs+/zzSJomjnL0K/AnKp+wvhCV0AAAAASUVORK5CYII=";
        let srcIconUp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAAAXNSR0IArs4c6QAAAZ9JREFUOBGtkr9Kw1AUxr97bcFF21WXJuITiG9RiiilUBy00FZRFCfRwT/gIKKgQlEhqYOKSKGIm4Po4CbiE4jJCzi4iCjmeKLJTasmdjAQ8p1zvvu7554boJWHSLRi8z1/m01rDA5lkNSHkBOv/sKor4wqwrCmGbjHnjSe7BNcUSzS7xXDoaY1C6JtBSEaxL19wLnwNZFQw1riDtcU0BdEeZi2yeDIsf3c1bBWedGyz4EQl/zuqpiowGOpqPgX0Qw1rE0GzimfEOeI8TyL2iQEqioPTMB42GiIm+TXMdzjmPYOA8dVVYgzJLScunF3lqbFM8Vw4JErKGmLKvaEZJBE1d7/BqyhV8sqoGsWwkFCH2FV99YC5CzwRvMq9oTg+RwzMB8U5CGSqQID34Ncg7qlOO6sU86kVVaKGRR19ae4nQZAHgJKqdFQoEvpF2+IiyyrCwV1aIubK/ux5GORF1R4t/LnMf1q2Legv6CrfYAv71pZKOicO+WbFHId5Z6phg2UN1Rkup8hO9IMvmFPHX18B//2HD12okZt/8YLA30A9fSGH4lwGL0AAAAASUVORK5CYII=";
        const onClick = (event) => this.onClick(event);

        if(this.state.expand){
            return (
                <div  className="list-expanse-wrapper" >
                <div  className="cell-select-wrapper"  onClick={onClick}>
                    <Text
                        style={titleSelectStyle}
                        text={this.state.groupName?this.state.groupName:''}
                    />
                    <Icon
                        src={srcIconUp}
                        style={iconUpStyle}
                    />

                </div>
                    {this.renderList()}
                    <style>{css}</style>
                </div>
            );
        }else{
            return (
                <div  className="cell-wrapper" onClick={onClick}>
                    <Text
                        style={titleNormalStyle}
                        text={this.state.groupName?this.state.groupName:''}
                    />
                    <Icon
                        src={srcIconDown}
                        style={iconDownStyle}
                    />
                    <style>{css}</style>
                </div>
            );
        }

    }
}

MapFinderDropdownComponent.propTypes = {
    expand: PropTypes.bool,
    groupName: PropTypes.string,
    arrObject: PropTypes.array,

};

const css = `
 .list-expanse-wrapper {
     background: rgba(0, 154, 222, 0.1);
     padding-bottom: 10px;
    } 
    
    .cell-select-wrapper { 
      border: none; 
      color: white;
      height: 32px; 
      line-height: 32px;
      text-align: left;
      position: relative;
    }  
    
      .cell-wrapper {
      background: white;
      border: none;
      border-bottom: 1px solid #EAEAEA;
      border-top: 1px solid #EAEAEA;
      color: white;
      height: 32px; 
      line-height: 32px;
      text-align: left;
      position: relative;
    }  
`;

