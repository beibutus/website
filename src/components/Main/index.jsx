import React from "react";
import { Router } from "@reach/router";
import Blog from "../Blog";
import Navbar from "../Navbar";
import Home from "../Home";
import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
import NotFound from "../NotFound";

export default class App extends React.Component {
    render() {
        return (
            <div className="Main">
                <Navbar
                    curLang={this.props.language}
                    langList={this.props.langList}
                    handleLanguage={this.props.handleLanguage}
                    text={this.props.text}
                ></Navbar>
                <Router>
                    <ScrollToTop path="/">
                        <Home
                            path="/"
                            text={this.props.text}
                        ></Home>
                        <Blog path="/blog/*"></Blog>
                        <NotFound default></NotFound>
                    </ScrollToTop>
                </Router>
                <BtnTop></BtnTop>
            </div>
        );
    }
}
