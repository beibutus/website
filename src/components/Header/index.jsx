import React from "react";
import "./Header.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";


export default class Header extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }
    
    render() {
        return (
            <header className="Header">
                <div className="Header-content container">
                    <h1 className="Header-title">
                        <Link to="">{this.getLangText('PagesHeader')}</Link>
                    </h1>
                </div>
            </header>
        );
    }
}
