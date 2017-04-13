import React, { Component,PropTypes } from 'react'
import TextComponent from '../../common/text/text-component'
import Input from '../../common/input/input-component'
import Button from '../../common/button/button-component'
import Icon from '../../common/icon/icon-component'

export default class SearchFilterComponent extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    componentDidMount() {

    }

    componentWillUnmount(){

    }




    onClick(){
        this.props.onSearchClick()
    }

    render() {
        let inputStyle = {
            width:'80%',
            height:'30px',
            paddingLeft:'12px',
            backgroundColor:'rgba(244,247,250,1)',
            borderRadius:'40px',
            fontSize: '12px',
            fontFamily: 'Roboto-Regular',
            border:'none',
            textAlign:'left',
            color: 'rgba(81,81,81,1)',
            outline:'none'

        };
        let iconSearch = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAABJxJREFUWAnNmW1oHEUYx//P7qUtGo2vpT1Ne3dWpa1YKyKo4DcRK31RVKS0xbydWirFquCX6ge1Cr6AUIveXaMWabF+KVJR8SUUbUEs9ZMfNCG38SDBGrWpbY1J7sZndtOdWS65u9ldvQxs+M/uPP/nN7OztzMbQpjSO7QCQiyHwGI+FvJxCiRGYGMQranjeIjKYWwbjaFGG+LdYgpTYhsEbQDENTXiRmHRYT7y6Ewdq9Eu9KX60IXSZRBTOxl0K4/oPLNMdAi2eBZdmZ/M4mq3rg29d3AVyviYLZYEbIhOcf0IQL9AVE7CwqWoUJI7dntVW9A5WOIRdGc+CnhEqMwOXXDu5Xn7IR8XKn86wiO3C6vSfbiFJtV5TRWc1Ryzne/KZu6E5V4hEtzBnehJvaS1DC1nhs4Vb2LHo5z0As+Z/uTR7ER3+lDDmfKlG3laHWCPFSqGOpBNv6fq4VQ19P7hK3B2/ASPVLtrSRhAomUNOtr7jVN88PvF+Pv0QR75u6e9JmDTnehMf2fspQV4t087gTPjz/vA4BGmlntCAUvPTZefxqL59/PUOOGmkA/yFPZwJ6oHS2eoo4PQhdIybv+oirG2oLt9QNVDqLXJc0jM2wCis160uBkF5+EQTn5IELoyuZ2vtLhXCV8hu/Sw3zKK6LyqxHfvdc3iGU0byyA0Yb3vYNMLvo5D2K2v8WiPu1ZCrMa+4eDPqEEOBe3+VPkP32/oSH1j4FO/adeVf/EvyRd+w4mJdb42FApa0EoVS1/zqFRUPSYloKCF0PKZ+StoqvAb7XzhN91/UUjzFdDymSVT0EIs1EJ/1XScUvkSrw5DFgUNjGkebZqOTwrovno+oxwKmqwRFalPFXU2siJtShC0fGbOChpU9EMF3ebrOAUFfFU+wxwKOrnkW44948XzIsd7Oxra1WguX91CrFUtEp8pbaYU9Br6h0M/98PF1BO+jkPkiw8y9CLXimgYXVd/H9ZWQUsHiwrKSDyG3qGMqkdQxwUvDWiX70DUy+8BXmOHK0Ho7jTfMupzreSKrFw+wHvDBeGstagfnDf5bXh+XzmKBRe9ql01lkFoGZ6gp/mvtysRuJWXku/DHSljby8g7zzF0+JxFc07GLlkjVBmXtfmi1lO9I7y5W1W6/wHsDE5qs7VUX0igf4ijzC2qpbWj8imblD1cGpmaOmVK77Bt/RJ35boDxBeRDK1B95D61+qEjnnPv4O8jJ3/HrtmvwWYrPHW+jJbNPOG8vZoaVVztnB4Dz/pjeonv0YP0SfsPwStlVC2ToJmryEn4UkKuIOhlqvdj5eAD/g/Xzt2ukaN40GXhtaZskP3QWUdzPIdX7SRoW8O6Dn0Lb0bYw5+3jkN/qhEcDrQ8sscn4OOD084jsYXm7J6hX5lWkvT4ZX0JGW30iAg8KOC7wxaB0xN7QSVmUdf5xZDlQW863m1Zr78WaEOzQIsj/lfeXRGdfjMYGbQ+sdCKNjAP//oWVHI4I3BzoiePOgI4A3FzokePOhQ4DPDWhD8LkDbQA+t6BnAwd2I5vxd1LV62kZ2Mwi/zPWltrCb9T9GsbPmsa/DzqLGTAS1oUAAAAASUVORK5CYII=';

        return (
            <div className="searchFilterContainer">
                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Search and filter'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </p>
                </div>
                <div className="searchViewWrapper">
                    <div className="searchView">
                        <Input
                            style={inputStyle}
                            placeholder='Enter postcode or club name'
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                        />

                        <div onClick={this.onClick}>
                            <Icon
                                src={iconSearch}
                                style={{width: 20,  position: 'absolute', top: 6, right: 10}}
                            />
                        </div>


                    </div>

                </div>

                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Waiting for dropdown'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </p>
                </div>

                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Waiting for dropdown'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </p>
                </div>

                <div className="searchFilerChildElementWrapper">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Waiting for dropdown'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </p>
                </div>

                <div className="searchFilerChildElementNoBorder">
                    <p className="searchTextWrapper">
                        <TextComponent
                            text={'Waiting for dropdown'}
                            style={{fontSize:12, paddingLeft:8,color:'rgba(81,81,81,1)'}}
                        />
                    </p>
                </div>



                <style>{css}</style>
            </div>
        )
    }
}
SearchFilterComponent.propTypes = {
    onSearchClick : PropTypes.func

};


const css = `
    .searchFilterContainer {
        width: 300px
        height:238px;
        background-color: rgba(255,255,255,1);
        border-style: solid;
        border-width: 1px;
        border-color: white;
        border-radius: 4px;
       
        margin: -35px 8px 0 8px;
        
        
    }
     .searchFilerChildElementWrapper{
        height:34px;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     }
     .searchFilerChildElementNoBorder{
        height:34px;
       
     }
     .searchTextWrapper {
        line-height: 34px;
     }
     .searchViewWrapper {
        height:48px;
        border-bottom-width : 1px;
        border-bottom-style : solid;
        border-bottom-color : rgba(234,234,234,1);
     }
     .searchView{
        height:32px;
        background-color: rgba(244,247,250,1);
        border-radius: 40px;
        border-bottom-width : 1px;
        
        position: relative;
        margin: 14px 8px auto;
        
     
     }
    
    
   
`;
