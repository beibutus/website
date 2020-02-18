import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

import ReactHtmlParser from "react-html-parser";

import Header from '../Header';
import "./NotFound.scss";

export default class NotFound extends Component {


    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <Fragment>
                <Header text={this.props.text} />
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
            </Fragment>
        );
    }
}
