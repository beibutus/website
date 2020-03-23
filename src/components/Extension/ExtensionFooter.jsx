import React from 'react';
import ReactHtmlParser from "react-html-parser";

import devices_image from "../../assets/images/devices_image.png";

import "./Extension.scss";

const ExtensionFooter = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    return (
        <div>
            <div className="description-devices">
                <img src={devices_image} alt="Devices_image" />
            </div>

            <footer className="getStarted-footer">
                <div className="getStarted-button">
                    <a
                        className="started-button top"
                        style={{ marginTop: "-20px" }}
                        href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>{getLangText("GetStartedButton")}</span>
                    </a>
                </div>
            </footer>
        </div>
    )

};

export default ExtensionFooter;