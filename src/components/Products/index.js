import React from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";
import { Link } from "@reach/router";

import productsFirstNumber from "../../assets/images/productsFirstNumber.svg";
import productsSecondNumber from "../../assets/images/productsSecondNumber.svg";
import appleDevices from "../../assets/images/appleDevices.png";


import "./Products.scss";


export default class Products extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="Products">
                <Header text={this.props.text} />
                <div className="products-header-block">
                    <h1>{this.getLangText('ProductsHeader')}</h1>
                </div>

                <div className="products-container">
                    <div className="product-block">
                        <div className="product-block-description">
                            <div className="product-number">
                                <img className="product-number-img" src={productsFirstNumber} />
                            </div>
                            <div className="product-about">
                                <p className="product-description">{this.getLangText("ExtensionForBrowser")}.</p>
                                <p className="product-description">
                                    {this.getLangText("ProductExtensionDescription")}
                                </p>
                            </div>
                        </div>
                        <div className="product-block-download">
                            <a
                                className="product-download-button"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                target="_blank"
                            >
                                {this.getLangText("Add")}
                            </a>
                        </div>
                    </div>

                    <div className="product-block">
                        <div className="product-block-description">
                            <div className="product-number">
                                <img className="product-number-img" src={productsSecondNumber} />
                            </div>
                            <div className="product-about">
                                <p className="product-description">{this.getLangText("ProductsTutor")}.</p>
                                <p className="product-description">
                                    {this.getLangText("ProductTutorDescription")}
                                </p>
                            </div>
                        </div>
                        <div className="product-block-download">
                            <a
                                className="product-download-button"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                target="_blank"
                            >
                                {this.getLangText("GetStarted")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="devices">
                    <img src={appleDevices} />
                </div>
                {/*<div class="description-bottom-block">
                            <p>
                                {this.getLangText('ProductsPageBottomText')}
                            </p>
                        </div>*/}


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
