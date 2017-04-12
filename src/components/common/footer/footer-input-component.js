/**
 * The footer input component
 *
 * @author rocachien
 * @company NEXLE
 * @create 2017/01/20 16:33
 * @update 2017/01/20 16:45
 * @file components/footer/footer-input-component.js
 *
 */
"use strict";

import React from 'react';

export default class InputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };

        this.onClickSeachButton = this.onClickSeachButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(event){
        if(event.keyCode == 13){
            this.onSubmit();
        }
    }

    onChange(event){
        this.setState({value: event.target.value});
    }

    onClickSeachButton(){
        this.onSubmit();
    }

    onSubmit(){
        let value = this.state.value;

        if(this.props.onChange) this.props.onChange(value);
    }

    render() {
        let placeholder = this.props.placeholder || "";

        return (
            <div className="inputContainer">
                <input type="text" name="searchname" className="search-field" placeholder={placeholder} onChange={this.onChange} onKeyUp={this.onKeyUp} />
                <button className="searchButton" onClick={this.onClickSeachButton}><i className="fa fa-search" aria-hidden="true" /></button>

                <style>{css}</style>
            </div>
        );
    }
}

InputText.propTypes = {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func
};

const css = `

  .inputContainer{
    position:relative;
    width:100%;
    margin:15px 0;
    padding:0 20px;
    height:36px;
  }
  .search-field{
    width:100%;
    padding-left:8px;
    padding-right: 40px;
    height:36px;
    font-weight:400;
  }
  .searchButton{
    height:36px;
    width:46px;
    position:absolute;
    right:20px;
    text-align:center;
    background-color: transparent;
    border: none;
  }
    
`;