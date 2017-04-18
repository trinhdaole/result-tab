/**
 * @copyright 2017 @ NEXLE
 * @author rocachien
 * @create 2017/04/13 16:22
 * @update 2017/04/18 13:52
 * @file common/paging/paging-component.js
 */
"use strict";

import React, {Component, PropTypes} from "react";

/**
 * @desc This is Paging component.
 * @example
 *
 * const onLickClick = (page) => {console.log("============= page:", page);};
 * <Paging total={410} current={1} onClick={onLickClick} />
 */

export default class Paging extends Component {
    /**
     * @param {object} props.
     */
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            currentPage: 0
        };

        this.totalPage = 0;
        this.perPage = 10;
        this.startPage = 0;
        this.endPage = 0;
    }

    componentWillMount() {

        let {total, perPage} = this.props;

        total = total && parseInt(total) >= 0 ? total : 0;
        perPage = perPage && parseInt(perPage) > 0 ? perPage : 10;

        this.perPage = perPage;
        this.totalPage = Math.ceil(total / perPage);
    }

    componentDidMount() {
        let {current} = this.props;

        this.updateLinkWithIndex(current, false);
    }

    updateLinkWithIndex(currentPage, isItemClick) {

        let {perLink} = this.props;
        let pages = [];

        if(!isItemClick) {
            this.startPage = currentPage < perLink ? 1 : currentPage - perLink + 1;
            this.endPage = this.startPage + perLink - 1;
        }

        if(this.endPage > this.totalPage) this.endPage = this.totalPage;

        for(let i = this.startPage; i <= this.endPage; i++) {
            pages.push(i);
        }

        this.setState({
            pages: pages,
            currentPage: currentPage
        });
    }

    onClickAtIndex(event, page) {
        event.stopPropagation();
        event.preventDefault();

        this.updateLinkWithIndex(page, true);
        if(this.props.onClick) return this.props.onClick(page);
    }

    onPreviousLink() {
        event.stopPropagation();
        event.preventDefault();

        let page = this.startPage - 1;

        this.updateLinkWithIndex(page, false);
        if(this.props.onClick) return this.props.onClick(page);
    }

    onNextLink(event) {
        event.stopPropagation();
        event.preventDefault();

        let page = this.endPage + 1;

        this.updateLinkWithIndex(page, false);
        if(this.props.onClick) return this.props.onClick(page);
    }

    onPerPageClick(event, perPage) {
        event.stopPropagation();
        event.preventDefault();

        const {total} = this.props;

        this.perPage = perPage;
        this.totalPage = Math.ceil(total / perPage);
        this.updateLinkWithIndex(1, false);
        if(this.props.onClick) return this.props.onClick(1);
    }

    renderPreviousLink() {
        const onClick = (event) => this.onPreviousLink(event);

        if(this.startPage <= 1) return null;

        return (
            <div onClick={onClick}><span className="arrow">&laquo;</span><span className="first">Prev</span></div>
        );
    }

    renderNextLink() {

        const {perLink} = this.props;
        const onClick = (event) => this.onNextLink(event);

        if(this.totalPage <= perLink || this.state.currentPage == this.totalPage) return null;

        return (
            <div onClick={onClick}><span className="last">Next</span><span className="arrow">&raquo;</span></div>
        );
    }

    renderItemLink(page) {

        let onClick, isCurrent = "";

        if(page == this.state.currentPage) {
            isCurrent = "current";
        } else {
            onClick = (event) => this.onClickAtIndex(event, page);
        }

        return (
            <div key={page} onClick={onClick}><span className={isCurrent}>{page}</span></div>
        );
    }

    renderPerPage() {
        let {perPageList} = this.props;

        if(!perPageList && perPageList.length < 1) return null;

        return (
            <div style={{float: "right"}}>
                <span style={{color: "rgb(57, 57, 58)", margin: 0}}>SHOW:</span>
                {
                    perPageList.map((p, i) => {
                        let endPer = (i == perPageList.length -1) ? {marginRight: 0} : null;
                        let cls = "";
                        let onClick;

                        if(p == this.perPage) {
                            cls = "current";
                        } else {
                            onClick = (event) => this.onPerPageClick(event, p);
                        }


                        return (<span key={p} onClick={onClick} className={cls} style={endPer}>{p}</span>);
                    })
                }
            </div>
        );
    }

    render() {
        let {style} = this.props;

        if(!this.state.pages || this.state.pages.length <= 0) return null;

        return (
            <div className="paging" style={style}>
                {this.renderPreviousLink()}

                {
                    this.state.pages.map(p => {
                        return this.renderItemLink(p);
                    })
                }

                {this.renderNextLink()}

                {this.renderPerPage()}

                <style>{css}</style>
            </div>
        );
    }
}

Paging.propTypes = {
    style: PropTypes.object,
    itemStyle: PropTypes.object,

    total: PropTypes.number,
    current: PropTypes.number,
    perPage: PropTypes.number,
    perLink: PropTypes.number,
    perPageList: PropTypes.array,

    onClick: PropTypes.func
};

Paging.defaultProps = {
    current: 0,
    perPage: 10,
    perLink: 3,
    perPageList: [10, 20, 50]
};

const css = `
    .paging {
        border: none;
        width: 100%;
        display: table;
        padding: 12px;
        background-color: #ffffff;
    }
    .paging div {
        float: left;
    }
    .paging span {
        margin: 10px;
        font-size: 10px;
        color: rgba(0, 154, 222, 1);
        text-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -webkit-align-items: center;
        -webkit-justify-content: center;
    }
    .paging span.arrow {
        margin: 0;
        font-size: 14px;
    }
    .paging span.first {
        margin: 0 10px 0 2px;
    }
    .paging span.last {
        margin: 0 2px 0 10px;
    }
    .paging span.current {
        color: rgba(57, 57, 58, 1);
    }
`;