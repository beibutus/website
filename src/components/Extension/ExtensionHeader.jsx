import React from 'react';
import ReactHtmlParser from "react-html-parser";

import ExtensionLogo from "../../assets/images/ExtensionLogo.png";

import "./Extension.scss";

const ExtensionHeader = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    return (
        <header className="getStartedExt-header">
        <div className="wrapper-getStarted">
          <div>
            <img src={ExtensionLogo} className="getStarted-logo" alt="Logo_image"></img>
            <h1 className="getStarted-title">{getLangText("GetStartedText")}</h1>
          </div>
          <div className="getStarted-button">
            <a
              className="started-button top"
              href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{getLangText("GetStartedButton")}</span>
            </a>
          </div>
          <div>
            <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
          </div>
        </div>
      </header>
    )

};

export default ExtensionHeader;