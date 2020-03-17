import React from "react";
import { Router } from "@reach/router";
import Navbar from "../Navbar";
import Home from "../Home";
import Products from '../Products';
import Privacy from '../Privacy';
import Extension from "../Extension";
import Player from "../Player";
import NotFound from '../NotFound';

// import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
// import NotFound from "../NotFound";
import Helmet from "react-helmet";

export default class App extends React.Component {

  urlsWithoutChangingTheLanguage = [/^\/([^/]+\/)*privacy.*/g];


  render() {
    if (typeof window.gtag === "function") {
      window.gtag("config", "UA-4027447-9", {
        page_title: document.title,
        page_location: this.props.location.href,
        page_path: this.props.location.pathname + this.props.location.search
      });
    }

    return (
      <div className="Main">
        <Helmet htmlAttributes={{ lang: this.props.language }} />
        <Navbar
          curLang={this.props.language}
          langList={this.props.langList}
          handleLanguage={this.props.handleLanguage}
          text={this.props.text}
          noUseLangSelect={this.urlsWithoutChangingTheLanguage.some(
            u => this.props.location.pathname.match(u) !== null
          )}
        ></Navbar>
        <Router>
          <ScrollToTop path="/">
            <Home path="/" text={this.props.text}></Home>
            <Products path="/products/" text={this.props.text}></Products>
            <Privacy path="/privacy" text={this.props.text}></Privacy>
            <Extension path="/products/extension/" text={this.props.text} />
            <Player path="/products/player/" text={this.props.text} />
            {/* <Blog path="/blog/*"></Blog> */}
            <NotFound path="*" text={this.props.text}></NotFound>
            {/* <Redirect from="/" to="/" default noThrow></Redirect> */}
          </ScrollToTop>
        </Router>
        {/* <BtnTop></BtnTop> */}
      </div>
    );
  }
}
