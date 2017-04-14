/**
 * Created by long on 4/13/17.
 */
'use strict';

import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'

export default class CellMapFinderDropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,

        };
    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     */
    onClick(event) {
        event.stopPropagation();
        event.preventDefault();
        let tempData = this.state.data;
        tempData.check =  !tempData.check;
        this.setState({
            data:tempData,
        });
        this.props.onClick(tempData,this.props.index);
    }



    render() {


        let srcIconCheck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAApNJREFUSA1jYICC////MwJxOhCfBOLPQEwtADLrBBCnATEjzD4wDRSQAuJ9QExrALJDCmYpyKf0sBTmKZBdjCBL04AumIkSBLTnZIAsPgm0x4z2dqHYcApk8WegEA+KMO05X0AW/6e9PZg2MGEK0UeEZhY//faX4R8eP1DdYpBlqYffMMgue8xguv4ZA654pLrFGUfeMsy58ZkBlHQuvfvF8P4ndn9T1eKC4+8YZl//BA/gXG0+BiF27FZgF4VrJZ5Rdfo9w8QrH+EaEtR5GXothOB8dAZVLG698JGh/cIHuNlhyjwMc2xFGFBrBLg0mIHT4vm3vjAUn3zHAEqd+MCEK58Yak6/gyvxk+dmWOooysCMz1agaqwFyI2Pvxk0Vz0BG6bAy8pw2FeSQYabGW44jDELmIjSgSkYBlxlOBk2u0sw4IhWmDIwjdXHUlwsDDysEKkHn38zuGx7wfDqB2rqXHLnK0MmMAXDgK0kB8MGN3GiLAXpwWoxHysjw2oXMQY2aHjd/PCLwXXbc4b3vyCWr33wjSHh4GuGf9DS1kyMnWEr0KdchMIX5kogjTWoYfLrgRaE7n3F8PcfpBgAWVCiJ8AQve8Vw2+omL4wO8N+HwkGQTasfoAZhUHjtRikGhSk8QcQvmNkZAQXDiA5TUE2hoM+kgyiHKRZCtJLUEeMCjfDNBthkFowgFVmSnysDHu8JMiyFGQQQYtBitI1QIUB0HKgb0FAloeZYZ+3BIMUF2ZKBysggiAY1Mhm3P70h+EZMF/bSrAT52JkzWhskixG00sRFxTUXygygTzNX0AWXyNPL0W6roIsnkeREeRpngfKk6B4pnuDHuxeoMX078LAQgrqc1DHihadNpCZoA4hvLIEAGp+Q/n+INsHAAAAAElFTkSuQmCC";
        let srcIconNoCheck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAMZJREFUSA3tlzEOgzAMRZPOPQEH6ZFor9SFo3Qu3elFyB7+R6RSQNn4XmpLX8iO5Bd/McQhbJFzjtAdGqEZOivY6w31UCy89YtCB70gdZDRFSgntYCWociKhPa4wbOyQJ88CB7BuelZFeFD8IzStSrrk0Rw1nOOhMuxZFNxsI3PoLjVbrXMAf+5ZNbuG7vVe0dk+X9anWR+thsnWv1tn8tOJoIHWft24yHgrccHn/mDfr0TwPYrTHFjm5yLlWJpY08uhL+lbQF8xaOZsdul2gAAAABJRU5ErkJggg==";

        let titleNormalStyle = {
            backgroundColor: 'transparent',
            fontSize: '8',
            color: 'rgba(0,154,222,1)',
            fontFamily: 'Roboto-Regular',
            marginLeft: '36px',
            marginRight: '6px',
         
        };
        let iconCheckStyle = {
            width: '10px',
            height: '10px',
            left: '16px',
            top: '10px',
            position: 'absolute',

        };
        const onClick = (event) => this.onClick(event);
           if(this.state.data){
               return (
                   <div  className="cell-detail-wrapper" onClick={onClick}>
                       <Icon
                           src={this.state.data.check == true ? srcIconCheck : srcIconNoCheck}
                           style={iconCheckStyle}
                       />
                       <Text
                           style={titleNormalStyle}
                           text={this.state.data.value?this.state.data.value:''}
                       />

                       <style>{css}</style>
                   </div>
               );
           }else{
               return null;
           }


    }
}

CellMapFinderDropdownComponent.propTypes = {

    data: PropTypes.object,
    onClick: PropTypes.func,
    index: PropTypes.number,
};

const css = `
  .cell-detail-wrapper {  
      border: none; 
      height: 28px; 
      line-height: 28px;
      text-align: left;
      position: relative; 
    }  
`;
