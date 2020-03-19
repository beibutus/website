import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Player.scss";

import { playerImages } from "../../assets/images/products/scroll-pages/PlayerImagesStatic";
import PlayerLogo from "../../assets/images/PlayerLogo.png";
import devices_player_image from "../../assets/images/devices_player_image.png";

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

  scrollPageView = () => {
    const pos = window.pageYOffset;

    playerContent.forEach((content, i, arr) => {
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

        <header className="getStartedPlayer-header">
          <div className="wrapper-getStarted">
            <div>
              <img src={PlayerLogo} className="getStarted-logo" alt="Logo_image"></img>
              <h1 className="getStarted-title">{this.getLangText("GetStartedPlayerText")}</h1>
            </div>
            <div className="getStartedPlayer-button">
              <a
                className="startedPlayer-button top"
                href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-mac.dmg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{this.getLangText("GetPlayerButtonMac")}</span>
              </a>
              <a
                className="startedPlayer-button top"
                href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-win.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{this.getLangText("GetPlayerButtonWindows")}</span>
              </a>
            </div>
            <div>
              <p className="getStarted-subtitle">{this.getLangText("GetStartedBottomText")}</p>
            </div>
          </div>
        </header>

        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentPlayerHeader")}</h1>
        </div>

        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 45%", paddingRight: "5%" }}>
              {playerContent.map((content, i) => {
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

            <div style={{ flex: "0 0 55%", position: "relative" }}>
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
                  src={playerImages[this.state.bgImgId].src}
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={playerImages[this.state.imgId].src}
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className="player-devices">
          <img src={devices_player_image} alt="Devices_image" />
        </div>

        <footer className="getStarted-footer">
          <div className="getStartedPlayer-button">
            <a
              className="startedPlayer-button top"
              href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-mac.dmg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{this.getLangText("GetPlayerButtonMac")}</span>
            </a>
            <a
              className="startedPlayer-button top"
              href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-win.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{this.getLangText("GetPlayerButtonWindows")}</span>
            </a>
          </div>
        </footer>

      </Fragment>
    );
  }
}
