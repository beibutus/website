import React, { Component } from "react";
import { Link } from "@reach/router";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import "./NotFound.scss";


export default class About extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="About">
                <Header text={this.props.text} />
                <div className="container about-container">
                <div className="NotFound">
                    <div>
                        <h1>{this.getLangText("NotFound")}</h1>
                    </div>

                    <Link to="/">
                        <div className="button-homepage">
                            {this.getLangText("HomePage")}
                        </div>
                    </Link>
                </div>
                </div>


                {/* <footer className="get-started-footer">
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
                </footer> */}
            </div>
        );
    }
};
