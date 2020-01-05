import React, { Component } from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

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
                    
                </div>
            </div>
        );
    }
};
