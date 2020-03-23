import React, { Component, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Plans.scss";

import green_tick from '../../assets/images/Plans/green-tick.png';

export default class Plans extends Component {

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    return (
      <Fragment style={{ fontFamily: "Montserrat" }}>
        <Header text={this.props.text} />

        <header className="getStartedPlans-header">
          <div className="wrapper-getStartedPlans">
            <div>
              <h1 className="getStartedPlans-title">{this.getLangText("PlansTitle")}</h1>
              <p className="getStartedPlans-subtitle">{this.getLangText("PlansFirstSubtitle")}</p>
              <p className="getStartedPlans-subtitle">{this.getLangText("PlansSecondSubtitle")}</p>
            </div>

            <div className="plans-container">

              <div className="plans-item">
                <div className="plans-content">
                  <h2>Standart</h2>
                  <h1>Free</h1>
                  <p>For all time</p>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={green_tick} />
                      <p>Full functionality</p>
                    </div>
                    <div className="advantages-item">
                      <p>10 translations/day limit. <br/>
                        <span style={{ fontWeight: "normal" }}>After whish we send you direct link to translation</span>
                      </p>
                    </div>
                  </div>
                  <div className="plans-button">
                    <a
                      className="plans-started-button top blue-button"
                      href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Choose</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="plans-item">
                <div className="plans-content">
                  <h2 style={{ color: "#FF7C82" }}>Premium</h2>
                  <h1>$7.99</h1>
                  <p>For all time</p>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={green_tick} />
                      <p>Full functionality</p>
                    </div>
                    <div className="advantages-item">
                      <img src={green_tick} />
                      <p>10 translations/day</p>
                    </div>
                  </div>
                  <div className="plans-button">
                    <a
                      className="plans-started-button top"
                      href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Choose</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="plans-item">
                <div className="plans-content">
                <h2 style={{ color: "#FF7C82" }}>Premium</h2>
                  <h1>$5.99</h1>
                  <p>For all time</p>
                  <p>if you pay $59.88 for year</p>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={green_tick} />
                      <p>Full functionality</p>
                    </div>
                    <div className="advantages-item">
                      <img src={green_tick} />
                      <p>10 translations/day</p>
                    </div>
                  </div>
                  <div className="plans-button">
                    <a
                      className="plans-started-button top"
                      href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Choose</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </Fragment>
    );
  }
}
