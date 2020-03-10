import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import Header from '../Header';

import './Extension.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import number_1 from '../../assets/images/products/number_1.png';
import number_2 from '../../assets/images/products/number_2.png';
import number_3 from '../../assets/images/products/number_3.png';
import number_4 from '../../assets/images/products/number_4.png';
import image_1 from '../../assets/images/products/extension/image_1.svg';
import image_2 from '../../assets/images/products/extension/image_2.svg';
import image_3 from '../../assets/images/products/extension/image_3.svg';


export default class Extension extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <Fragment>
                <Header text={this.props.text} />
                <div className="Description">

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
                                <div className="point"><img src={number_1} alt="Extension_image" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFirstHeader")}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                            <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_2} alt="number_2" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionSecondHeader")}</h2>

                                    <p>{this.getLangText("ExtensionSecondText_1")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_2")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img src={image_1} alt="context-tutor-image" alt="Extension_image" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_3} alt="number_3" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img className="description-img" src={image_2} alt="Listening" />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_4} alt="number_4" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFourthHeader")}</h2>

                                    <p>{this.getLangText("ExtensionFourthText_1")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_2")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image">
                            <img src={image_3} alt="Listening" />
                        </div>
                    </div>

                    <div className="flex-child button-extension">
                        <div className="button-started-extension">
                            <a className="get-started-button-extension-bottom top"
                                href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb" 
                                target="_blank"
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