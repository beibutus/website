import React from "react";
import Header from '../Header';
import ReactHtmlParser from "react-html-parser";

import logo_small from '../../assets/images/logo_small.svg';
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
                    <div class="container">
                        <div className="description-header-block">
                            <h1>{this.getLangText('OurProducts')}</h1>
                            <p className="products-top-text">
                                {this.getLangText('ProductsPageTopText')}
                            </p>
                        </div>
                        <div className="product-block">
                            <div className="product-block-description">
                                <div>
                                    <img className="logo-small" src={logo_small} />
                                </div>
                                <div>
                                    <h1>{this.getLangText('ExtensionForBrowser')}</h1>
                                    <p className="description-text">
                                        {this.getLangText('ExtensionDescription')}
                                    </p>
                                </div>
                            </div>
                            <div className="product-block-image">
                                <img className="extension-img" src={extention_img} />
                                <img className="extension-img" src={extention_img} />
                            </div>
                        </div>
                        <div className="product-block">
                            <div className="product-block-description">
                                <div>
                                    <img className="logo-small" src={logo_small} />
                                </div>
                                <div>
                                    <h1>{this.getLangText('ContextTutor')}</h1>
                                    <p className="description-text">
                                        {this.getLangText('ContextTutorDescription')}
                                    </p>
                                </div>
                            </div>
                            <div class="product-block-image">
                                <img class="tutor-img" src={tutor_img} />
                            </div>
                        </div>
                        {/*<div class="description-bottom-block">
                            <p>
                                {this.getLangText('ProductsPageBottomText')}
                            </p>
                        </div>*/}
                    </div>
            </div>
        );
    }
};
