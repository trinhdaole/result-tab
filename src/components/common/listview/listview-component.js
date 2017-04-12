/**
 * @copyright 2017 @ NEXLE
 * @author rocachien
 * @create 2017/03/06 14:44
 * @update 2017/03/06 17:44
 * @file common/listview/listview-component.js
 */
"use strict";

import React, {Component, PropTypes} from "react";

/**
 * @desc This is ListView component.
 * @example
 *
 * onSelectedItem(item, index) {}
 *
 * renderRowAtIndex(item, index){
 *    let style = index % 2 == 0 ? {backgroundColor: "rgba(224, 224, 224, 0.95)"} : {backgroundColor: "rgba(239, 239, 239, 0.95)"};
 *
 *    return (<div><span className="number">{item.id}</span> {item.name}</div>);
 * }
 *
 * <ListView dataSource={team1data} onSelectedItem={this.onSelectedItem1} titleText={team1name} titleBGColor={"#061e44"}/>
 */

export default class ListViewComponent extends Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);
    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     * @param {object} item - Data of an item
     * @param {number} index - Index of an item
     */
    selectedItem(event, item, index) {
        event.stopPropagation();
        event.preventDefault();

        if (this.props.onSelectedItem) return this.props.onSelectedItem(item, index);
    }

    /**
     *
     * @param {object} item - Data of an item
     * @param {number} index - Index of an item
     */
    renderRowAtIndex(item = {}, index = 0) {
        const onClick = (event) => this.selectedItem(event, item, index);

        if (this.props.renderRowAtIndex) {
            return (
                <li id={item.id} key={index} onClick={this.props.onSelectedItem ? onClick : null}>
                    {this.props.renderRowAtIndex(item, index)}
                </li>
            );
        } else {
            return (
                <li id={item.id} key={index} onClick={this.props.onSelectedItem ? onClick : null}>
                    <span className="number">{item.id}</span> {item.name}
                </li>
            );
        }
    }

    render() {

        return (
            <div className="listViewContainer" style={this.props.style || {}}>
                <ul className="listViewWrapper">
                    {
                        this.props.dataSource.map((item, index) => this.renderRowAtIndex(item, index))
                    }
                </ul>
                <style>{css}</style>
            </div>
        );
    }
}

ListViewComponent.propTypes = {
    dataSource: PropTypes.array.isRequired,
    onSelectedItem: PropTypes.func,
    renderRowAtIndex: PropTypes.func,
    style: PropTypes.object,

};

ListViewComponent.defaultProps = {
    dataSource: []
};

const css = `
    .listViewContainer {
        background-color:white;
    }
    
    .listViewWrapper li {
        display:inline-block;
        width: 100%;
    }
    
    .listViewWrapper li:nth-child(even) {
        background-color:rgba(224, 224, 224, 0.95); 
    }
    
    .listViewWrapper li:nth-child(odd) {
        background-color:rgba(239, 239, 239, 0.95); 
    }
`;
