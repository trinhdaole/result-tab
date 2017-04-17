/**
 * Created by long on 3/24/17.
 */
import React, {PropTypes} from "react";
import Input from '../../common/input/input-component'
import Text from   '../../common/text/text-component'
import Button from '../../common/button/button-component'

export default class MapFindPopupComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHide:this.props.isHide,
            inputValue:'',
        };
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isHide != this.props.isHide){
            this.setState({
                isHide:nextProps.isHide,
            });
        }
    }

    onKeyUp(id){

        this.onClick();

    }

    onChange(id){
        let item = document.getElementById(id);
        if (item) {
            this.setState({
                inputValue: item.value
            });
            console.log(this.state.inputValue);
        }

    }

    onClick() {
        const {onClick} = this.props;
        if(onClick){
            onClick();
        }
        this.setState({
            isHide:true,
        });
    }

    renderPopup(){
        const {style,title }= this.props;
        if(this.state.isHide == true){
            return null;
        }else{
            let titleStyle = {
                                   height:'16px',
                                  fontSize: '14px',
                                  color: 'rgba(81,81,81,1)',
                                  fontFamily: 'Roboto-Medium',

                            };
            let inputStyle = {
                                  width:'100%',
                                  height:'38px',
                                  fontSize: '12px',
                                  fontFamily: 'Roboto',
                                  border:'none',
                                  textAlign:'left',
                                  marginTop: '10px',
                                  color: 'rgba(81,81,81,1)',


            };
            let buttonStyle = {
                 textAlign: 'center',
                 color: 'white',
                 textTransform: 'uppercase',
                 backgroundColor: 'rgba(0,154,222,1)',
                 fontFamily: 'Roboto',
                 fontSize: '10px',
                 width:'40%',
                 height:'32px',
                 borderRadius: '40px',
                 margin: '0 auto',

            };


            return (
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <div className="top-modal">
                            <Text
                              style={titleStyle}
                              text={title?title:'WHERE CAN I PLAY?'}
                            />
                            <Input
                                id="IdInputPostCode"
                                style={inputStyle}
                                placeholder='Enter postcode or club name'
                                onChange={this.onChange}
                                onKeyUp={this.onKeyUp}
                            />

                        </div>
                        <div className="bottom-modal">
                            <Button
                                style={buttonStyle}
                                onClick={this.onClick}
                                text="Search"
                            />
                        </div>
                    </div>
                    <style>{css}</style>
                </div>

            );
        }
    }

    render() {
        return  this.renderPopup() ;
    }
}

MapFindPopupComponent.propTypes = {
    isHide: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string,
};


MapFindPopupComponent.defaultProps = {
};

const css = `
    .modal-wrapper{
         background-color: rgba(81,81,81,0.7);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 9999;
     }
     .modal-container{
        width: 80%;
        background-color: rgba(255,255,255,1);
        border-radius: 5px;
        margin: 40% auto
     }
     .top-modal{
        text-align: center;
        padding: 15px 20px 10px 20px;
     }
     ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                    color:    #9B9B9B;
                    opacity:  0.8;
            }
     :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color:    #9B9B9B;
                    opacity:  0.8;
            }
     ::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color:    #9B9B9B;
                    opacity:  0.8;
            }
     :-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color:    #9B9B9B;
                    opacity:  0.8;
            }
            
     .bottom-modal{
             text-align: center;
             padding-bottom: 15px;
     }
      
      @media all and (orientation:landscape) { 
       .modal-container{
        width: 80%;
        background-color: rgba(255,255,255,1);
        border-radius: 5px;
        margin: 15% auto
     }
     }
     
    
`;


