import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import Header from '../Header';
import $ from 'jquery';

import './Extension-scroll.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import number_1 from '../../assets/images/products/extension/number_1.png';
import number_2 from '../../assets/images/products/extension/number_2.png';
import number_3 from '../../assets/images/products/extension/number_3.png';
import number_4 from '../../assets/images/products/extension/number_4.png';

import * as images from './images';


export default class ExtensionScroll extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {

        const imagesToSCroll = [
            images.extension_image_1, 
            images.extension_image_2,
            images.extension_image_3
        ];

        return (
            <Fragment>
                <Header text={this.props.text} />
                <div className="Description-Scroll">

                    <div className="flex-parent extension-block">

                        <div className="flex-child">
                            <h2>{this.getLangText("ExtensionHeader")}</h2>
                            <p>
                                {this.getLangText("ExtensionTopText")}
                            </p>
                        </div>
                        <div className="flex-child">
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header button-header">
                                <div className="point"><img src={number_1} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFirstHeader")}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_2} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionSecondHeader")}</h2>

                                    <p>{this.getLangText("ExtensionSecondText_1")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_2")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c1">
                            <img src={imagesToSCroll[0]} alt="context-tutor-image" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_3} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c2">
                            <img className="description-img" src={imagesToSCroll[1]} alt="Listening" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_4} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFourthHeader")}</h2>

                                    <p>{this.getLangText("ExtensionFourthText_1")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_2")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c3">
                            <img src={imagesToSCroll[2]} alt="ListeningMe" />
                        </div>
                    </div>

                    <div className="flex-child button-extension footer-button">
                        <div className="button-started-extension">
                            <a className="get-started-button-extension-bottom top"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl" target="_blank"
                                rel="noopener noreferrer">
                                <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}

// Function to images appear on scroll

const scrollPageView = () => {
    $(document).scroll(function () {
        var pos = $(document).scrollTop();
        console.log(pos);
        if (pos > 300 && pos < 850) {
            hideAll("c1");
            $("#c1").fadeIn(1000);
        }
        if (pos > 850 && pos < 1300) {
            // hideAll("c2");
            $("#c2").fadeIn(1000);
            $("#c3").fadeOut(1000);
        }
        if (pos > 1400 && pos < 1900) {
            // hideAll("c3");
            $("#c2").fadeOut(1000);
            $("#c3").fadeIn(1000);
        }
        if (pos < 300) {
            $("#c1").fadeOut(300);
        }

    });

    function hideAll(exceptMe) {
        $(".left").each(function (i) {
            if ($(this).attr("id") == exceptMe) return;
            $(this).fadeOut();
        });
    }
}


const defaultPageView = () => {
    $("div").removeClass("left content");
    $("div").removeAttr('id', 'c1');
    $("div").removeAttr('id', 'c2');
    $("div").removeAttr('id', 'c3');
};


const toScroll = (scrollSize) => {
    if (scrollSize.matches) { // If media query matches
        return scrollPageView();
    } else {
        return defaultPageView();
    }
}

var scrollSize = window.matchMedia("(min-width: 800px)");
toScroll(scrollSize); // Call listener function at run time
scrollSize.addListener(toScroll); // Attach listener function on state changes




