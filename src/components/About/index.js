import React, { Component } from "react";
import { Link } from "@reach/router";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import "./About.scss";


export default class About extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="About">
                <Header text={this.props.text} />
                <div className="container about-container">
                    <div className="about-block">
                        <h1>{this.getLangText("AboutPageFirstHeader")}</h1>
                        <p>{this.getLangText("AboutPageFirstParagraph")}</p>
                    </div>
                    <div className="about-block">
                        <h1>{this.getLangText("AboutPageSecondHeader")}</h1>
                        <p>{this.getLangText("AboutPageSecondParagraph")}</p>
                    </div>
                    <div className="about-block">
                        <h1>{this.getLangText("AboutPageThirdHeader")}</h1>
                        <p>{this.getLangText("AboutPageThirdParagraph")}</p>
                    </div>
                    <div className="about-block">
                        <h1>{this.getLangText("AboutPageFourthHeader")}</h1>
                        <p>{this.getLangText("AboutPageFourthParagraph")}</p>
                        <div className="about-buttons">
                            <Link
                                to="/download"
                                className="about-button">
                                {this.getLangText("ForBeginners")}
                            </Link>
                            <Link
                                to="/download"
                                className="about-button">
                                {this.getLangText("ForAverages")}
                            </Link>
                            <Link
                                to="/download"
                                className="about-button">
                                {this.getLangText("ForProfessionals")}
                            </Link>
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
