
'use strict';

import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'
import Input from '../../common/input/input-component'


export default class MapFinderSearchAdvanceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand:true,

        };
    }
    onClick(event) {
        console.log(' ****  onClick   ****  ')
        event.stopPropagation();
        event.preventDefault();

        this.setState({
            isExpand:!this.state.isExpand,

        });
    }

    renderExpandedContent(){
        let inputStyle = {
            width:'100%',
            height:'30px',

            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'4px',
            fontSize: '12px',
            fontFamily: 'Roboto-Regular',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none'

        };
        if(!this.state.isExpand){
            return (
                <div>

                </div>
            );
        }
        return (
            <div>
                <div>
                <Text text  = {'PostCode'}/>
                <Input
                    style={inputStyle}
                    placeholder='PostCode'
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                />
                </div>

                <div>
                    <Text text  = {'Street'}/>
                    <Input
                        style={inputStyle}
                        placeholder='Street'
                        onChange={this.onChange}
                        onKeyUp={this.onKeyUp}
                    />
                </div>
            </div>

        );
    }



    render() {
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
        let titleSelectStyle = {
            height:'16px',
            fontSize: 14,
            color: 'rgba(0,154,222,1)',
            fontFamily: 'Roboto-Medium',
            marginLeft: '16px',
            marginRight: '16px',
        };
        let srcIconDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAAAXNSR0IArs4c6QAAAVdJREFUOBGlUktOhEAQtWXhDo7gEdi58gyjGcLOySRGnRiDF9BJiHqHGX+xTdwR2Dvegr3n0I3ge0wX6QATMLLgVVfVe4+qRm2ZZzweTxDqsiy3gW++70/jOC6k3ofgz8G9YZ9Sap5l2R1jismzZ8R5PsrzXMPArktfC21xU9wPw9BhXAukaXoJ54WwYTYZYgLxa/lycqHx7rruYZIkPzzXBiiUMLlAbskCH2PysmmSIAiu0HO77q7eK4prrb8lpyQQBEGBuADOJAd8xZ0c23dC8aIoqj2bvpXneQe2OPP1BKaJI3KSc+C95IBTrOtZJhkqTn5rAhE1kyyBZ5KDqUb8iVy9FuQ+sJZR88trjgRdSBNcIic57ar3iZPTWpEtBIES//MM+GTnGQ8Rr/qaxK6zWdcD8KQi9azF1th4B3YTY2PyiHDXcZwR/vOvZs+/zzSJomjnL0K/AnKp+wvhCV0AAAAASUVORK5CYII=";
        let srcIconUp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAAAXNSR0IArs4c6QAAAZ9JREFUOBGtkr9Kw1AUxr97bcFF21WXJuITiG9RiiilUBy00FZRFCfRwT/gIKKgQlEhqYOKSKGIm4Po4CbiE4jJCzi4iCjmeKLJTasmdjAQ8p1zvvu7554boJWHSLRi8z1/m01rDA5lkNSHkBOv/sKor4wqwrCmGbjHnjSe7BNcUSzS7xXDoaY1C6JtBSEaxL19wLnwNZFQw1riDtcU0BdEeZi2yeDIsf3c1bBWedGyz4EQl/zuqpiowGOpqPgX0Qw1rE0GzimfEOeI8TyL2iQEqioPTMB42GiIm+TXMdzjmPYOA8dVVYgzJLScunF3lqbFM8Vw4JErKGmLKvaEZJBE1d7/BqyhV8sqoGsWwkFCH2FV99YC5CzwRvMq9oTg+RwzMB8U5CGSqQID34Ncg7qlOO6sU86kVVaKGRR19ae4nQZAHgJKqdFQoEvpF2+IiyyrCwV1aIubK/ux5GORF1R4t/LnMf1q2Legv6CrfYAv71pZKOicO+WbFHId5Z6phg2UN1Rkup8hO9IMvmFPHX18B//2HD12okZt/8YLA30A9fSGH4lwGL0AAAAASUVORK5CYII=";
        const onClick = (event) => this.onClick(event);

        return(
            <div className="advanceSearchExpandedWrapper">
                <div className="mapFinderSearchAdvanceContainer" onClick={onClick} >
                    <Text
                        text    = {' Search Advance '}
                        style   = {titleSelectStyle}
                    />
                    <Icon
                        src={srcIconUp}
                        style={iconUpStyle}
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

};

const css = `
    .advanceSearchExpandedWrapper {
    
    }
    .mapFinderSearchAdvanceContainer {
      color: white;
      height: 32px; 
      line-height: 32px;
      text-align: left;
      position: relative;
     
    } 
    
    
`;

