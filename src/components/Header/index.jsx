import React from "react";
import "./Header.scss";
import ReactHtmlParser from "react-html-parser";


export default class Header extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }
    
    render() {
        return (
            <header className="Header">
            </header>
        );
    }
}
