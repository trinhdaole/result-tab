/**
 * Created by long on 4/17/17.
 */

import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'

export default class PopUpBoxInfoMapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,

        };
    }



    render() {




        return (
            <div >

                <div>footer</div>

                <style>{css}</style>
            </div>
        );


    }
}

PopUpBoxInfoMapComponent.propTypes = {

    style: PropTypes.object,
};

const css = `
  .list-item-container {  
      height: 56px; 
      
      position: relative;
      background-color: white;
      border-bottom: 1px solid #EAEAEA;
      
    }
      .listItem-textWrapper{
        margin: 18px 0 0 5px ;
      }
`;
