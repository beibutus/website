import React, { Component } from "react";
import "./Home.scss";
import "./Home-media.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstBlockImageRu from "../../assets/images/home/firstBlockImageRu.png";
import firstBlockImageEn from "../../assets/images/home/firstBlockImageEn.png";
import thirdBlockNumbers from '../../assets/images/home/thirdBlockNumbers.svg';
import prevIcon from "../../assets/images/home/prevIcon.png";
import nextIcon from "../../assets/images/home/nextIcon.png";
import logo_tutor from "../../assets/images/logo_tutor.svg";
import logo_extension from "../../assets/images/logo_extension.svg";
import mobileImgEn from "../../assets/images/mobileImgEn.svg";
import mobileImgRu from "../../assets/images/mobileImgRu.svg";


// import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
// import extensionImg from "../../assets/images/home/extensionImg.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-arrow-next"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={nextIcon} alt="arrow_left" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={prevIcon} alt="arrow_right" />
    </div>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileWow: false
    };

    this.sections = {
      toGetStarted: {
        id: "to-get-started",
        text: "ourApp",
        ref: React.createRef()
      },
      howItWork: {
        id: "how-it-works",
        text: "HowItWork",
        ref: React.createRef()
      },
      source: {
        id: "learning-sources",
        text: "learningSources",
        ref: React.createRef()
      }
    };

    this.offsetSection = 70;
    this.mobileWow = React.createRef();
  }
  calcMobileShow = () => {
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let mobileRect = this.mobileWow.current.getBoundingClientRect();
    let bottomPhoneImg = mobileRect.top + mobileRect.height + window.scrollY;
    if (
      bottomPhoneImg < window.scrollY + viewPortHeight &&
      !this.state.showMobileWow
    ) {
      this.setState({ showMobileWow: true });
    }
  };
  handleScroll = () => {
    this.calcMobileShow();
  };

  anchorClick = (e, id) => {
    e.preventDefault();
    const curScroll = window.scrollY;
    const top =
      Math.round(this.sections[id].ref.current.getBoundingClientRect().top) +
      curScroll -
      this.offsetSection;
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  };
  //componentDidMount() {
  //  window.addEventListener("scroll", this.handleScroll);
  // }
  // componentWillUnmount() {
  //  window.removeEventListener("scroll", this.handleScroll);
  //}
  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    const slickSettings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToScroll: 3,
      centerPadding: "30px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const firstBlockImg = {
      firstBlockImageEn,
      firstBlockImageRu,
    };

    const mobileImg = {
      mobileImgEn,
      mobileImgRu
    }


    const mobileClasses = classNames("img-phone-front", {
      show: this.state.showMobileWow
    });

    return (
      <div className="Home">
        <header className="hero">
          <div className="wrapper-hero">
            <div>
              <h1 className="hero-title">{this.getLangText("headerTitle")}</h1>
              <p className="subtitle">{this.getLangText("headerSubtitle")}</p>
            </div>
          </div>
        </header>

        <div className="first-block-container">
          {/* <img src={firstBlockImg[this.getLangText("firstBlockImage")]} /> */}
          {/* <div className="desctop-first-block">
            <img src={firstBlockImg[this.getLangText("firstBlockImage")]} />
          </div>
          <div className="mobile-first-block">
            <h1>Mobile First Block</h1>
          </div> */}

          <figure>
            <picture>
              <source media="(max-width: 400px)" srcSet={mobileImg[this.getLangText("mobileImage")]} alt="EasyLang Image"/>
              <img src={firstBlockImg[this.getLangText("firstBlockImage")]} alt="EasyLang Image"></img>
            </picture>
          </figure>
        </div>


        <div className="second-block-container">
          <div className="wrapper-second-text">
            <div>
              <h1 className="second-text">{this.getLangText("motivationText")}</h1>
            </div>
          </div>
        </div>

        <div className="third-block-container">
          <div className="wrapper-third-text">
            <div className="third-block-image">
              <img src={thirdBlockNumbers} alt="numbers image"/>
            </div>
            <div>
              <h2 className="third-text">{this.getLangText("thirdBlockText_1")}</h2>
              <h2 className="third-text-center">{this.getLangText("thirdBlockText_2")}</h2>
              <h2 className="third-text">{this.getLangText("thirdBlockText_3")}</h2>
            </div>
          </div>
        </div>

        <div className="download-container">
          <div className="download-block">
            <div className="download-block-description">
              <div className="download-logo">
                <img className="logo-download-small" src={logo_extension} alt="extension logo"/>
              </div>
              <div className="download-about">
                <h1>{this.getLangText("ExtensionForBrowser")}</h1>
                <p className="description-download-text">
                  {this.getLangText("ExtensionDescription")}
                </p>
              </div>
            </div>
            <div className="download-button-block">
              <a
                className="download-button"
                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                target="_blank"
              >
                {this.getLangText("Add")}
              </a>
            </div>
          </div>

          <div className="download-block">
            <div className="download-block-description">
              <div className="download-logo">
                <img className="logo-download-small" src={logo_tutor} alt="context-tutor logo"/>
              </div>
              <div className="download-about">
                <h1>{this.getLangText("ContextTutor")}</h1>
                <p className="description-download-text">
                  {this.getLangText("ContextTutorDescription")}
                </p>
              </div>
            </div>
            <div className="download-button-block">
              <a
                className="download-button"
                href="https://easy4learn.com/register"
                target="_blank"
              >
                {this.getLangText("GetStarted")}
              </a>
            </div>
          </div>
        </div>

        <div className="feedback-container">
          <h2 className="feedback-header">
            {this.getLangText("feedbackTitle")}
          </h2>
          <Slider {...slickSettings}>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackFirstName")}</h3>
                <p>{this.getLangText("feedbackFirstText")}</p>
              </div>
            </blockquote>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackSecondName")}</h3>
                <p>{this.getLangText("feedbackSecondText")}</p>
              </div>
            </blockquote>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackThirdName")}</h3>
                <p>{this.getLangText("feedbackThirdText")}</p>
              </div>
            </blockquote>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackFourthName")}</h3>
                <p>{this.getLangText("feedbackFourthText")}</p>
              </div>
            </blockquote>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackFifthName")}</h3>
                <p>{this.getLangText("feedbackFifthText")}</p>
              </div>
            </blockquote>
            <blockquote>
              <div className="feedback-item">
                <h3>{this.getLangText("feedbackSixthName")}</h3>
                <p>{this.getLangText("feedbackSixthText")}</p>
              </div>
            </blockquote>
          </Slider>
        </div>

        {/* <div className="blog-container">
          <div className="blog-header">
            <h2 className="blog-header">{this.getLangText("blogTitle")}</h2>
            <Link to="/blog" className="blog-button">
              {this.getLangText("allArticles")}
            </Link>
          </div>
          <div className="blog-items">
            <div className="blog-item">
              <img src={blog_img_1} />
              <p>{this.getLangText("blogFirstText")}</p>
            </div>
            <div className="blog-item">
              <img src={blog_img_2} />
              <p>{this.getLangText("blogSecondText")}</p>
            </div>
            <div className="blog-item">
              <img src={blog_img_3} />
              <p>{this.getLangText("blogThirdText")}</p>
            </div>
          </div>
        </div> */}

        <footer className="get-started-footer">
          <div className="footer-links">
            <ul>
              <li>
                <Link
                  to="about"
                  className="footer-link"
                  onClick={this.closeMenu}
                >
                  {this.props.text.About}
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  className="footer-link"
                  onClick={this.closeMenu}
                >
                  {this.props.text.Products}
                </Link>
              </li>
              <li>
                <Link
                  to="download"
                  className="footer-link"
                  onClick={this.closeMenu}
                >
                  {this.props.text.Download}
                </Link>
              </li>
              <li>
                <Link
                  to="privacy"
                  className="footer-link"
                  onClick={this.closeMenu}
                >
                  {this.props.text.PrivacyPolicy}
                </Link>
              </li>
              <li>
                <p>
                  <a className="footer-mail" href="mailto:support@easylang.by">support@easylang.by</a>
                </p>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
