import React, { Component } from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import logo_small from '../../assets/images/logo_small.svg';

import "./Download.scss";


export default class Download extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="Download">
                <Header text={this.props.text}/>
                <div className="container">

                    <div className="download-container">

                        <div className="download-block">
                            <div>
                                <h1>{this.getLangText('ExtensionForBrowser')}</h1>
                            </div>
                            <div className="download-block-description">
                                <img className="logo-download-small" src={logo_small} />
                                <p className="description-download-text">
                                    {this.getLangText('ExtensionDescription')}
                                </p>
                            </div>
                            <div className="download-button-block">
                                <a 
                                    className="download-button"
                                    href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                    target="_blank">
                                    {this.getLangText("Add")}
                                </a>
                            </div>
                        </div>

                        <div className="download-block">
                            <div>
                                <h1>{this.getLangText('ContextTutor')}</h1>
                            </div>
                            <div className="download-block-description">
                                <img className="logo-download-small" src={logo_small} />
                                <p className="description-download-text">
                                    {this.getLangText('ContextTutorDescription')}
                                </p>
                            </div>
                            <div className="download-button-block">
                                <a 
                                    className="download-button"
                                    href="https://easy4learn.com/register"
                                    target="_blank">
                                    {this.getLangText("GetStarted")}
                                </a>
                            </div>
                        </div>
                    </div>

                   {/*<div class="download-bottom-block">
                            <p>
                                {this.getLangText('ProductsPageBottomText')}
                            </p>
                    </div>*/}

                </div>
            </div>
        );
    }
};
