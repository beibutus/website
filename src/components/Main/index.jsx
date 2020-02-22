import React from "react";
import { Router } from "@reach/router";

import About from '../About';
import Products from '../Products';
import Download from '../Download';
import Navbar from "../Navbar";
import Home from "../Home";
import Privacy from '../Privacy';
import NotFound from '../NotFound';
// import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
// import NotFound from "../NotFound";
import Helmet from "react-helmet";

export default class App extends React.Component {

  //urlsWithoutChangingTheLanguage = [/^\/([^/]+\/)*blog.*/g];
  
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
				//	noUseLangSelect={this.urlsWithoutChangingTheLanguage.some(
         //   u=>this.props.location.pathname.match(u) !== null
        //  )}
        ></Navbar>
        <Router>
          <ScrollToTop path="/">
            <Home path="/" text={this.props.text}></Home>
            <Privacy path="/privacy/" text={this.props.text}></Privacy>
            <About path="/about/" text={this.props.text}></About>
            <Products path="/products/" text={this.props.text}></Products>
            <Download path="/download/" text={this.props.text}></Download>
            {/* <Blog path="/blog/" text={this.props.text}></Blog>
            <Redirect from ="/" to='/' default noThrow></Redirect> */}
            <NotFound path="*" text={this.props.text}></NotFound>
          </ScrollToTop>
        </Router>
        {/* <BtnTop></BtnTop> */}
      </div>
    );
  }
}
