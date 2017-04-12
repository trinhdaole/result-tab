/**
 * The bottom of footer component
 *
 * @author rocachien
 * @company NEXLE
 * @create 2017/01/20 16:33
 * @update 2017/01/20 16:44
 * @file components/footer/footer-bottom-component.js
 *
 */
"use strict";

import React from 'react';

export default class FooterBottom extends React.Component {

    render() {
        return (
            <div className="footerBottom">

                <div id="f-links-wrap">

                    <div id="f-social" className="clearfix">
                        <a title="Facebook" id="foot-fb" className="ftr-fb" href="https://www.facebook.com/sportstg" target="_blank" />
                        <a title="Twitter" id="foot-tw" className="ftr-tw" href="https://twitter.com/_sportstg" target="_blank" />
                        <a title="YouTube" id="foot-yt" className="ftr-yt" href="https://www.youtube.com/foxsportspulse" target="_blank" />
                        <a title="LinkedIn" id="foot-li" className="ftr-li" href="https://www.linkedin.com/company/sportstg" target="_blank" />
                    </div>

                    <div id="f-powered" className="clearfix">
                        <a id="foot-powered" href="http://www.sportstg.com/" target="_blank" />
                    </div>

                </div>
            </div>
        );
    }
}