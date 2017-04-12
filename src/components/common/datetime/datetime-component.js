/**
 * @copyright 2017 @ NEXLE
 * @author rocachien
 * @create 2017/03/23 16:00
 * @update 2017/03/24 09:00
 * @file common/datetime/datetime-component.js
 */
"use strict";

import React, {Component, PropTypes} from "react";
import DateFormat from 'dateformat';
import * as CommonUtils from '../../../utils/common-utils';

/**
 * @desc This is DateTime component.
 * @example
 *
 * <DateTime type="LAST_UPDATED" date={gameDate} />
 */

export default class DateTime extends Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);
    }

    parDate(){
        const {date, type} = this.props;
        if(!date || date.length < 13) return date;

        let _date = null;
        try {
             _date = CommonUtils.getFormattedDate(date);

        } catch (e) {
            return null;
        }

        if(_date) {
            switch (type) {
                case "SPORT_TIME":
                    return DateFormat(_date, "ddd dd mmm  h:MM TT");
                case "LAST_UPDATED":
                    return DateFormat(_date, "ddd dd-mmm-yyyy h:MM:ss");
                case "MATCH_DATE":
                    return DateFormat(_date, "h:MM TT / ddd dd mmm");
                case "RESULT_DATE":
                    return DateFormat(_date, "ddd mmm dd yyyy");
            }

            return _date;
        }
        return null;
    }

    render() {
        const {style, className} = this.props;
        return (
            <span style={style} className={className}>{this.parDate()}</span>
        );
    }
}

DateTime.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.oneOf(['SPORT_TIME', 'LAST_UPDATED', 'MATCH_DATE', 'RESULT_DATE'])
};

DateTime.defaultProps = {
    style: {},
    className: "",
    type: "SPORT_TIME"
};
