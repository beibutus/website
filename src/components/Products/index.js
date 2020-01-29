import React from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";
import { Link } from "@reach/router";

import logo_tutor from "../../assets/images/logo_tutor.svg";
import logo_extension from "../../assets/images/logo_extension.svg";
import extention_img from '../../assets/images/extension-img.png';
import tutor_img from '../../assets/images/tutor-img.png';


import "./Products.scss";


export default class Products extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="Products">
                <Header text={this.props.text}/>
                    <div className="container">
                        <div className="description-header-block">
                            <h1>{this.getLangText('OurProducts')}</h1>
                            <p className="products-top-text">
                                {this.getLangText('ProductsPageTopText')}
                            </p>
                        </div>
                        <div className="product-block">
                            <div className="product-block-description">
                                <div>
                                    <img className="logo-small" src={logo_extension} alt="logo_small"/>
                                </div>
                                <div>
                                    <h1>{this.getLangText('ExtensionForBrowser')}</h1>
                                    <p className="description-text">
                                        {this.getLangText('ExtensionDescription')}
                                    </p>
                                </div>
                            </div>
                            <div className="product-block-image">
                                <img className="extension-img" src={extention_img} alt="extension_img" />
                                <img className="extension-img" src={extention_img} alt="extension_img" />
                            </div>
                        </div>
                        <div className="product-block">
                            <div className="product-block-description">
                                <div>
                                    <img className="logo-small" src={logo_tutor} alt="logo_small"/>
                                </div>
                                <div>
                                    <h1>{this.getLangText('ContextTutor')}</h1>
                                    <p className="description-text">
                                        {this.getLangText('ContextTutorDescription')}
                                    </p>
                                </div>
                            </div>
                            <div className="product-block-image">
                                <img className="tutor-img" src={tutor_img} alt="contextTutor-img"/>
                            </div>
                        </div>
                        {/*<div class="description-bottom-block">
                            <p>
                                {this.getLangText('ProductsPageBottomText')}
                            </p>
                        </div>*/}
                    </div>
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
              </ul>
            
            </div>         
            <div>
              <p><a className="footer-mail" href="mailto:support@easylang.by">support@easylang.by</a></p>
            </div>   
        </footer>
            </div>
        );
    }
};
