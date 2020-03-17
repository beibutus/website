import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Player.scss";

// import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImages';
import { playerImages } from "../../assets/images/products/scroll-pages/PlayerImagesStatic";

import { playerContent } from "../../assets/scroll-content/player";


export default class Player extends Component {

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  scrollPageView = _ => {
    const pos = window.pageYOffset;

    playerContent.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextEl = arr[i + 1] && arr[i + 1].parentRef;
      if (
        this.state.imgId !== i &&
        (pos + 250) + this.imgTopOffset >= el.offsetTop &&
        (nextEl ? (pos + 250) + this.imgTopOffset < nextEl.offsetTop : true)
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
      <Fragment>
        <Header text={this.props.text} />

        <header className="getStarted-header">
          <div className="wrapper-getStarted">
            <div>
              <img className="getStarted-logo" alt="Logo_image"></img>
              <h1 className="getStarted-title">Easy Player!</h1>
            </div>
            <div className="getStarted-button">
              <a
                className="started-button top"
                href="https://github.com/easably/platform-player-extension/releases/download/0.8.64/EasyLang.Player-Beta.0.8.64.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
               <span>Download Easy Player!</span>
              </a>
            </div>
            <p className="getStarted-subtitle"></p>
          </div>
        </header>

        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 50%", paddingLeft: "5%" }}>
              {playerContent.map((content, i) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => {
                      content.parentRef = ref;
                    }}
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

            <div style={{ flex: "0 0 50%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  position: "sticky",
                  left: 0,
                  top: this.imgTopOffset
                }}
              >
                <img
                  className="description-img"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 1
                  }}
                  src={playerImages[this.state.bgImgId].src}
                  alt="Scrolled_item"
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="description-img"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 2
                    }}
                    src={playerImages[this.state.imgId].src}
                    alt="Scrolled_item"
                  />
                </Fade>
              </div>
            </div>


          </div>
        </div>
      </Fragment>
    );
  }
}
