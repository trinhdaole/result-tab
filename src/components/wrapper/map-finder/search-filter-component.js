import React, { Component } from 'react'
import TextComponent from '../../common/text/text-component'
export default class Header extends Component {


    render() {
        return (
            <div className="searchFilterContainer">
                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Search and filter'}
                            style={{fontSize:12, paddingLeft:8}}
                        />
                    </p>
                </div>
                <style>{css}</style>
            </div>
        )
    }
}
const css = `
    .searchFilterContainer {
        width:100% - 8px;
        height:213px;
        background-color: rgba(255,255,255,1);
        border-style: solid;
        border-width: 1px;
        border-color: white;
        border-radius: 4px;
        
        margin: 0 8px;
        
    }
     .searchFilerChildElementWrapper{
        height:34px;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     
        
     }
     .searchTextWrapper {
        line-height: 34px;
     }
    
    
   
`;
