/**
 * The top of footer component
 *
 * @author rocachien
 * @company NEXLE
 * @create 2017/01/20 16:33
 * @update 2017/01/20 16:45
 * @file components/footer/footer-top-component.js
 *
 */
"use strict";

import React from 'react';
import InputText from './footer-input-component';

export default class FooterTop extends React.Component {

    constructor(props) {
        super(props);

        this.placeholder = "SEARCH SportsTG";
    }

    onChange(value){
        alert("============= Search Change ==============> value: " + value);
    }

    render() {
        return (
            <div className="footerTop">

                <div id="f-logo">
                    <a id="foot-logo" title="SportsTG" href="http://websites.sportstg.com" target="_blank">
                        <img src="http://d1f1uv2yjzdc4k.cloudfront.net/brand/images/stg_pos_white_color_sm.png" alt="logo" />
                    </a>
                </div>

                <div id="f-admin-links" className="clearfix">
                    <a id="foot-editor" title="Site Editor" className="one " href="http://websites.sportstg.com/publisher.cgi?client=1-2307-0-425688-0&amp;ID=2307&amp;typeID=1" target="_parent" />
                    <a id="foot-support" title="Support" className="two" href="http://support.sportstg.com/" target="_blank" />
                    <a id="foot-manager" title="Manager" className="three" href="https://passport.sportstg.com/account/" target="_blank" />
                </div>

                <InputText placeholder={this.placeholder} onChange={this.onChange}/>
            </div>
        );
    }
}