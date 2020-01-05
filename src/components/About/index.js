import React, { Component } from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import "./About.scss";


export default class About extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="About">
                <Header text={this.props.text}/>
                    <div className="container">
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
                                <a 
                                    className="about-button"
                                    href="/download">
                                    {this.getLangText("ForBeginners")}
                                </a>
                                <a 
                                    className="about-button"
                                    href="/download">
                                    {this.getLangText("ForAverages")}
                                </a>
                                <a 
                                    className="about-button"
                                    href="/download">
                                    {this.getLangText("ForProfessionals")}
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};
