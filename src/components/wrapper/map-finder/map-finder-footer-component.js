
import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'

export default class MapFinderFooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,

        };
    }



    render() {

        let placeStyle = {
            fontSize: '12',
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto-Regular',
            fontWeight: '600'
        };


        return (
            <div >

                <div>footer</div>

                <style>{css}</style>
            </div>
        );


    }
}

MapFinderFooterComponent.propTypes = {

    data: PropTypes.any,
    onClick: PropTypes.func,
    index: PropTypes.number,
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
