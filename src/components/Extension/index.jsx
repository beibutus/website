import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Extension.scss";

import "./ExtensionHeader.jsx";
import "./ExtensionFooter.jsx";

import { extensionImages } from "../../assets/images/products/scroll-pages/ExtensionImagesStatic";
import ExtensionHeader from "./ExtensionHeader.jsx";
import ExtensionFooter from "./ExtensionFooter.jsx";


export default class Extension extends Component {

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  extensionContent = [
    {
      header: <h2>{this.getLangText("1-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("1-SlideExtensionBody")}</p>,
      img: extensionImages[0].src
    },
    {
      header: <h2>{this.getLangText("2-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("2-SlideExtensionBody")}</p>,
      img: extensionImages[1].src
    },
    {
      header: <h2>{this.getLangText("3-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("3-SlideExtensionBody")}</p>,
      img: extensionImages[2].src
    },
    {
      header: <h2>{this.getLangText("4-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("4-SlideExtensionBody")}</p>,
      img: extensionImages[3].src
    },
    {
      header: <h2>{this.getLangText("5-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("5-SlideExtensionBody")}</p>,
      img: extensionImages[4].src
    },
    {
      header: <h2>{this.getLangText("6-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("6-SlideExtensionBody")}</p>,
      img: extensionImages[5].src
    },
    {
      header: <h2>{this.getLangText("7-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("7-SlideExtensionBody")}</p>,
      img: extensionImages[6].src
    },
    {
      header: <h2>{this.getLangText("8-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("8-SlideExtensionBody")}</p>,
      img: extensionImages[7].src
    },
    {
      header: <h2>{this.getLangText("9-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("9-SlideExtensionBody")}</p>,
      img: extensionImages[8].src
    },
    {
      header: <h2>{this.getLangText("10-SlideExtensionHeader")}</h2>,
      body: <p>{this.getLangText("10-SlideExtensionBody")}</p>,
      img: extensionImages[9].src
    }
  ];

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  scrollPageView = () => {
    const pos = window.pageYOffset;

    this.extensionContent.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextItem = arr[i + 1] && arr[i + 1].parentRef;

      if (
        this.state.imgId !== i &&
        (pos + 250) + this.imgTopOffset >= el.offsetTop &&
        (nextItem ? (pos + 250) + this.imgTopOffset < nextItem.offsetTop : true)
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
      <Fragment style={{ fontFamily: "Montserrat" }}>
        <Header text={this.props.text} />

        <ExtensionHeader text={this.props.text} />

        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentHeader")}</h1>
        </div>

        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 40%", paddingRight: "10%" }}>
              {this.extensionContent.map((content, i) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => content.parentRef = ref}
                    key={i}
                  >
                    <div className="content">
                      <div className="extension-header content">
                        <div>
                          <div className="content-header">
                            {content.header}
                          </div>
                          <div className="content-body">
                            {content.body}
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
                  src={extensionImages[this.state.bgImgId].src}
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={extensionImages[this.state.imgId].src}
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <ExtensionFooter text={this.props.text} />

      </Fragment>
    );
  }
}
