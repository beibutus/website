import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Player.scss";

import "./PlayerHeader.jsx";
import "./PlayerFooter.jsx";

import { playerImages } from "../../assets/images/products/scroll-pages/PlayerImagesStatic";
import repeat from '../../assets/scroll-content/repeat.png';
import subtitles from '../../assets/scroll-content/subtitles.png';
import PlayerHeader from "./PlayerHeader.jsx";
import PlayerFooter from "./PlayerFooter.jsx";


export default class Player extends Component {

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  playerContent = [
    {
    header: <h2>{this.getLangText("FirstSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("FirstSlidePlayerBody")}</p>,
      img: playerImages[0].src
    },
    {
      header: <h2>{this.getLangText("SecondSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("SecondSlidePlayerBody")}</p>,
      img: playerImages[1].src
    },
    {
      header: <h2>{this.getLangText("ThirdSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("ThirdSlidePlayerBody")}</p>,
      img: playerImages[2].src
    },
    {
      header: <h2>{this.getLangText("FourthSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("FourthSlidePlayerBody")}</p>,
      img: playerImages[3].src
    },
    {
      header: <h2>{this.getLangText("FifthSlidePlayerHeader")}</h2>,
      body: (
        <>
          <p>{this.getLangText("FifthSlidePlayerBody")}</p>
          <img src={subtitles} alt="subtitles_image" style={{ width: "50%" }}/>
        </>
      ),
      img: playerImages[4].src
    },
    {
      header: <h2>{this.getLangText("SixthSlidePlayerHeader")}</h2>,
      body: (
              <>
                <p>{this.getLangText("SixthSlidePlayerBody")}</p>
                <img src={repeat} alt="subtitles_image" style={{ width: "50%", marginTop: "-16px" }}/>
              </>
      ),
      img: playerImages[5].src
    },
    {
      header: <h2>{this.getLangText("SeventhSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("SeventhSlidePlayerBody")}</p>,
      img: playerImages[6].src
    },
    {
      header: <h2>{this.getLangText("EightSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("EightSlidePlayerBody")}</p>,
      img: playerImages[7].src
    },
    {
      header: <h2>{this.getLangText("NinethSlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("NinethSlidePlayerBody")}</p>,
      img: playerImages[8].src
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

    this.playerContent.forEach((content, i, arr) => {
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
        <PlayerHeader text={this.props.text} />


        {/* Extension Scroll Content */}
        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentPlayerHeader")}</h1>
        </div>

        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 45%", paddingRight: "5%" }}>
              {this.playerContent.map((content, i) => {
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

        <PlayerFooter text={this.props.text} />
      </Fragment>
    );
  }
}
