"use strict";

import React, {Component, PropTypes} from "react";

export default class TableComponent extends Component {

    renderRow(item, rowIndex) {


        const {style, rowStyle, onClick} = this.props;
        if (item && item.length>0) {
            return (<tr key={rowIndex} style={rowStyle}>
                {
                    item.map((item, index)=> {
                        let handleClick = () => onClick ? onClick(rowIndex) : {};
                        let _style = (style && style[index]) ? style[index] : {};

                        return (<td key={index} onClick={handleClick} style={_style}>{item}</td>);
                    })
                }
            </tr>);
        }
        return false;

    }

    renderHeader(data) {


        const {style, headerStyle} = this.props;
        if (data && data.length>0) {
            return data.map((item, index)=> {
                let _style = {};
                if (headerStyle) {
                    _style = headerStyle;
                } else if (style && style[index]) {
                    _style = style[index];
                }
                return (<th key={index} style={_style}
                >{item}</th>);
            });
        }
        return null;

    }

    render() {


        const {header, body, customHeaderBackgroundStyle} = this.props;

        if ((body && body.length > 0) || header) {
            return (
                <div style={{overflow:'scroll', overflowY:'hidden'}}>
                    <table className="tableWrapper">

                        <thead style={customHeaderBackgroundStyle}>
                        <tr>
                            {
                                this.renderHeader(header)
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            body.map((row, index)=> {
                                return this.renderRow(row, index);
                            })
                        }

                        </tbody>

                        <style>{css}</style>

                    </table>
                </div>

            );
        }
        return null;

    }
}


TableComponent.propTypes = {
    header: PropTypes.array,
    body: PropTypes.array,
    onClick: PropTypes.func,
    style: PropTypes.array,
    rowStyle: PropTypes.object,
    headerStyle: PropTypes.object,
    customHeaderBackgroundStyle: PropTypes.object
};

const css = `
  .tableWrapper{
    border-collapse: collapse;
    font-size: 13px;
    width: 100%; 
  }
  .tableWrapper thead{
      background-color: #fcd000;
  }
  .tableWrapper thead th{
    padding:8px;
    font-weight:normal;
    color: #00105a; 
    font-size:11px;
    text-align:center;
  }
  .tableWrapper tbody tr:nth-child(even) {background: #FFF}
  .tableWrapper tbody tr:nth-child(odd) {background: #efefef}
  .tableWrapper tbody td{
    padding:8px;
    text-align:center;
    white-space: nowrap;
    max-width: 126px;
    text-overflow: ellipsis;
    overflow: hidden;
    
  }
  .tableWrapper tbody td.name{
    text-align:left; 
    font-weight:bold;
    text-decoration: underline;
  }
  .tableWrapper thead th.name{
    text-align:left; 
  } 
    
`;

