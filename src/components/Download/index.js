import React, { Component } from "react";
import Header from '../Header';
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

import logo_tutor from "../../assets/images/logo_tutor.svg";
import logo_extension from "../../assets/images/logo_extension.svg";
import tedLogo from "../../assets/images/tedLogo.png";
import youtubeLogo from "../../assets/images/youtubeLogo.png";
import cnnLogo from "../../assets/images/cnnLogo.png";

import "./Download.scss";


export default class Download extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="Download">
                <Header text={this.props.text} />
                <div className="container">

                    <h1 className="download-header">
                        {this.getLangText('TryProducts')}
                    </h1>

                    <div className="download-container">

                        <div className="download-block">
                            <div>
                                <h1>{this.getLangText('ExtensionForBrowser')}</h1>
                            </div>
                            <div className="download-block-description">
                                <img className="logo-download-small" src={logo_extension} />
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
                                <img className="logo-download-small" src={logo_tutor} />
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

                    <div className="logo-section">
                        <h1 className="logo-description">{this.getLangText("LogoDescription")}</h1>
                        <div className="logo-container">
                            <img src={tedLogo} />
                            <img className="youtubeLogo" src={youtubeLogo} />
                            <img src={cnnLogo} />
                        </div>
                        <div class="download-bottom-block">
                            <p>
                                {this.getLangText('BottomInfoText')}
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="get-started-footer">
                    <div className="footer-links">
                        <ul>
                            <li>
                                <Link
                                    to="about"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.About}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="products"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Products}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="download"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Download}
                                </Link>
                            </li>
                            <li>
                                <p>
                                    <a className="footer-mail" href="mailto:support@easylang.by">support@easylang.by</a>
                                </p>
                            </li>
                        </ul>

                    </div>
                </footer>
            </div>
        );
    }
};
