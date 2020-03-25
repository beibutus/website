import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Extension.scss";

import "./ExtensionHeader.jsx";
import "./ExtensionFooter.jsx";

import ExtensionHeader from "./ExtensionHeader.jsx";
import ExtensionFooter from "./ExtensionFooter.jsx";

import extensionContent from "../../assets/scroll-content/extension";

export default class Extension extends Component {
  state = {
    bgImgId: 0,
    imgId: 0
  };

  imgTopOffset = 150;

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  scrollPageView = () => {
    const pos = window.pageYOffset;

    extensionContent.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextItem = arr[i + 1] && arr[i + 1].parentRef;

      if (
        this.state.imgId !== i &&
        pos + 250 + this.imgTopOffset >= el.offsetTop &&
        (nextItem ? pos + 250 + this.imgTopOffset < nextItem.offsetTop : true)
      ) {
        this.setState(old => ({
          bgImgId: old.imgId,
          imgId: i
        }));
      }
    });
  };

  render() {
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Header text={this.props.text} />

        <ExtensionHeader text={this.props.text} />

        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentHeader")}</h1>
        </div>

        <div className="Description-Scroll">
          <div style={{ display: "flex" }}>
            <div style={{ flex: "0 0 35%", paddingRight: "6%" }}>
              {extensionContent.map((content, i) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => (content.parentRef = ref)}
                    key={i}
                  >
                    <div className="content">
                      <div className="extension-header content">
                        <div>
                          <div className="content-header">
                            <h2>{this.getLangText(content.header)}</h2>
                          </div>
                          <div className="content-body">
                            <p>{this.getLangText(content.body)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ flex: "0 0 60%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  position: "sticky",
                  left: 0,
                  top: this.imgTopOffset
                }}
              >
                <img
                  className="scrolled-item"
                  src={
                    extensionContent[this.state.bgImgId].img[this.props.lang] || extensionContent[this.state.bgImgId].img.en
                  }
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={
                      extensionContent[this.state.imgId].img[this.props.lang] || extensionContent[this.state.imgId].img.en
                    }
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <ExtensionFooter text={this.props.text} />
      </div>
    );
  }
}
