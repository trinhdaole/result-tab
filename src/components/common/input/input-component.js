/**
 *
 */
'use strict';

import React, {Component, PropTypes} from "react";

export default class InputComponent extends Component {
    constructor(props) {
        super(props);


        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

    }

    onKeyUp(){
        const {onKeyUp, id} = this.props;
        if(onKeyUp){
            onKeyUp(id);
        }
    }

    onChange(){
        const {onChange, id} = this.props;
        if(onChange){
            onChange(id);
        }
    }
    onKeyPress(){
        const {onKeyPress, id} = this.props;
        if(onKeyPress){
            onKeyPress(id);
        }
    }

    render() {
        const {id,value, placeholder, style, type, maxLength} = this.props;
        return (
            <div>
                <input type={type} id={id} name="input" className="inputWrapper" maxLength={maxLength} style={style} placeholder={placeholder}
                       onChange={this.onChange} onKeyPress={this.onKeyPress} onKeyUp={this.onKeyUp}/>
                <style>{css}</style>
            </div>

        );

    }
}

InputComponent.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.string,
    onKeyUp: PropTypes.func,
    onKeyPress: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object
};

const css = `
    .inputWrapper{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
`;
