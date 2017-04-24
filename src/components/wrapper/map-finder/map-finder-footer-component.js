
import React, {Component} from "react";
import PropTypes  from 'prop-types';

import Text from   '../../common/text/text-component';
import Icon from   '../../common/icon/icon-component';

export default class MapFinderFooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,

        };
    }

    onClearFilter(event){
         event.stopPropagation();
         event.preventDefault();

        if(this.props.onClearFilter){
            this.props.onClearFilter();
        }

    }

    onSearchAgain(event){
        event.stopPropagation();
        event.preventDefault();

        if(this.props.onSearchAgain){
            this.props.onSearchAgain();
        }

    }


    render() {


        let hrefStyle   = {color:'rgba(0,154,222,1)', fontSize:10, fontFamily:'Roboto', fontWeight:'500'};
        let textStyle   = {color:'rgba(155,155,155,1)', fontSize:10, fontFamily:'Roboto', fontWeight:'500'};
        const onClearFilter = (event) => this.onClearFilter(event);
        const onSearchAgain = (event) => this.onSearchAgain(event);
        return (
            <div className="footerContainer">

                <Text
                    text    = {'Can’t find a club or indoor centre near you?  Try '}
                    style   = {textStyle}
                />
                <a style={hrefStyle} onClick={onClearFilter}> clearing filters</a>
                <Text
                    text    = {'  or '}
                    style   = {textStyle}
                />
                <a style={hrefStyle} onClick={onSearchAgain}> search again</a>

                <style>{css}</style>
            </div>
        );


    }
}

MapFinderFooterComponent.propTypes = {

    data: PropTypes.any,
    onClick: PropTypes.func,
    index: PropTypes.number,
    onClearFilter: PropTypes.func,
    onSearchAgain: PropTypes.func,
};

const css = `
    .footerContainer{
       
        height:45px;
        background-color:rgba(244,247,250,1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        padding-top:16px;
        padding-left:8px;
        
    }
`;
