/**
 * @copyright 2017 @ NEXLE
 * @author rocachien
 * @create 2017/03/07 14:44
 * @update 2017/03/22 17:18
 * @file common/map/pin-icon-component.js
 */


import React, {Component, PropTypes} from "react";
import Icon from '../icon/icon-component';
import Text from  '../text/text-component';



export default class PinInfo extends  Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);
        this.state = {
            show:this.props.show,

        };
    }

    componentWillReceiveProps(nextProps){


            this.setState({
                show:nextProps.show,

            });

    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     * @param {object} lat - Latitude
     * @param {number} lng - Longitude
     */
    onClick(event, lat=0, lng=0) {
        event.stopPropagation();
        event.preventDefault();

        if(this.props.onClick) return this.props.onClick(lat, lng);


    }

    onPopupClick(event, lat=0, lng=0) {
        event.stopPropagation();
        event.preventDefault();

        if(this.props.onClick) return this.props.onClick(lat, lng);


    }

    onClose(event ) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            show:false,
        });
        if(this.props.onClose) return this.props.onClose();


    }

    onNext(event ) {
        event.stopPropagation();
        event.preventDefault();

        if(this.props.onNext) return this.props.onNext();


    }

    renderBoxInfo () {
        let  iconLeftButton = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAAXNSR0IArs4c6QAAAhRJREFUOBHFVEtrU0EU/ubGRIqPFgJWIuRRt0WoYhEKVXAhWVREEMSFCytpuvHvtDeh1LopiAiFUvFV48YuBFcKipKbRC3GrkpfpHmcnrn3Tuyk97YJpTiLOXPO/b5vzpk5c4EjHUTG4fUnikOYtL7ALJ3vRExo4EzpMuq1Nxw7DYhlGLiOscRXDePjtJRA3RDimIOlCBr0HtmfF3y4WlgXSsU4G0pCYM1FneEM3yFbvKSxPBy9NAXIWldQxwsQ9dghgVXASCIdX1KQVustJFFm4SKX9oozDLukdT63EYwncq6vGb203Z/G4p8QDFzjMstu+CTbBWSsG7thau0vJBEPo58RxFW+gN8OgbpQpzlk8jeVgLL7C0nUaN83hIxhFiu4pONo4BnM/B3Xt83BQhL2IJZHKDTMqx82izhPErN8jvdsn6f2hGx0LchZdSki3+gGhPFd+e0JmctRVBqLTD7nEtcR4HZIRT+2LzRVioAqi9wGMYcktuw2SMU/KBFp988oW+5Ftf6WM1EPuAKDbnn1kn9DzvwKY3M7x5v1yx25n6owAreRis3bfsvkndG01YPN6mvGOiJAjZO/6yciNfcKTa2cQoVe8pkMOJuKBt/WfX5nzx3fe9aFnvw5geraAgiDNlwIYjuKdGLWm/4vqgttbZ/lRutrfiaM88E+bvodLeQvdsIqwLQedcTzBD/9K1/6/xk7C/CScHqsWIEAAAAASUVORK5CYII=";
         let iconStyle = {
             position:'absolute',
             marginLeft: '2px',
             marginRight: '5px',
             marginTop: '4px',
             width: '6px',
             height: '8px',
         };


        const onNext = (event) => this.onNext(event );
        if(this.state.show === true){
            return(
                <div>
                    <div className="popup-title-wrapper" style={this.props.styleTitle}>
                        <Text
                            text={this.props.title}
                        />
                    </div>
                    <div className="popup-bot-wrapper" style={this.props.styleDescription}>
                        <Text
                            text= {this.props.info}
                        />
                        <div className="popup-bot-button-wrapper" style={this.props.styleButton} onClick={onNext}>
                            <Text
                                text="NEXT"
                            />
                            <Icon
                                src={iconLeftButton}
                                style={iconStyle}
                            />
                        </div>
                    </div>
                </div>
            );
        }else{
            return null;
        }

    }
    /**
     *
     * @return {XML}
     */
    render() {

        let srcPin = "data:image/png;base64,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";
        let scr = this.props.srcPin ? this.props.srcPin : srcPin;
        const onClick = (event) => this.onClick(event, this.props.lat, this.props.lng);
        const onPopupClick = (event) => this.onPopupClick(event, this.props.lat, this.props.lng);
        return (
            <div
                className="popup-wrapper"
                onClick={onPopupClick}
            >
                <style>{css}</style>
                <div  className="icon-wrapper"  onClick={onClick} >
                     <Icon
                         src={scr}
                     />
                </div>
                {this.renderBoxInfo()}

            </div>
        );
    }
}

PinInfo.propTypes = {
    onClick:  PropTypes.func,
    onNext:  PropTypes.func,
    onClose:  PropTypes.func,
    lat:  PropTypes.number,
    lng:  PropTypes.number,
    srcPin:   PropTypes.string,
    show:   PropTypes.bool,
    styleTitle: PropTypes.object,
    styleDescription: PropTypes.object,
    styleButton: PropTypes.object,
    title: PropTypes.string,
    info: PropTypes.string,
};

PinInfo.defaultProps = {
    lat: 59.938043,
    lng: 30.337157,
    show: false,

    title: '',
    info: '',
};


const css = `
   .popup-wrapper { 
        position:relative; 
        width:30px;
        top:-55px;
        left:0px;   
    }  
    .popup-title-wrapper {  
      position:relative; 
     background-color: rgb(0,154,222);
     width: 140px;
     left:-60px;
     border: 0px solid green; 
     align: center;
     color: white;
     text-align: center;
     padding:5px 5px 5px 5px;
     font-name:Roboto-Medium;
     font-size: 8px;
     z-index: 1000;
    } 
    
   .popup-bot-wrapper {  
     position:relative; 
     background-color:white;
     width: 140px;
     left:-60px;
     border: 0px solid green; 
     align: center;
     color: rgb(81,81,81);
     text-align: center;
     padding:5px 5px 8px 5px;
     font-name:Roboto-Regular;
     font-size: 8px;
     z-index: 1000;
    }  
    
    .popup-bot-button-wrapper { 
     position:relative;
     top: 10px;
     left: 30%; 
     text-align: center;
     background-color: white;
     width: 49px; 
     border: 1px solid rgb(0,154,222); 
     border-radius: 40px;
     align: center;
     color: rgb(0,154,222);
     margin: 0px 5px 8px 5px;
     height: 18px;
     line-height: 18px;
     z-index: 1000;
     
    } 
    
   .icon-wrapper { 
      position:relative; 
      width: 30px;
     
    } 
`;