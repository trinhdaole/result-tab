
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


        let hrefStyle = {color:'rgba(0,154,222,1)', fontSize:10}

        return (
            <div className="footerContainer">

                <Text
                    text    = {'Can’t find a club or indoor centre near you ?  Try '}
                    style   = {{color:'rgba(155,155,155,1)', fontSize:10}}
                />
                <a style={hrefStyle}> clearing filter</a>
                <Text
                    text    = {'  or '}
                    style   = {{color:'rgba(155,155,155,1)', fontSize:10}}
                />
                <a style={hrefStyle}> search again</a>

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
    .footerContainer{
        width:100%;
        height:45px;
        background-color:rgba(244,247,250,1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        padding-top:12px;
        padding-left:10px;
        
    }
`;
