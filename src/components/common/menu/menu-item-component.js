'use strict';

import React, {Component, PropTypes} from "react";

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {item, onClick, index} = this.props;
        onClick(item, index);
    }

    render() {
        const {item, index} = this.props;
        if(item) {
            let activeClass = item.active ? 'selected' : '';
            return (
                <li key={index}>
                    <a className={activeClass}
                       onClick={this.onClick}>
                        {item.title}
                    </a>
                </li>
            );
        }
        return null;
    }
}

MenuItem.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object,
    onClick: PropTypes.func
};
