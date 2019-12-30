import React from "react";
import { Link } from "@reach/router";
import "./Navbar.scss";
import classNames from "classnames";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            fixedBar: false
				};
    }
    changeLocale = e => {
        this.props.handleLanguage(e.target.value);
    };
    clickMenuButton = () => {
        this.setState(state => {
            return { openMenu: !state.openMenu };
        });
    };
    closeMenu = () => {
        this.setState({
            openMenu: false
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = e => {
        if (window.pageYOffset > 50 && !this.state.fixedBar) {
            this.setState({
                fixedBar: true
            });
        } else if (window.pageYOffset <= 50 && this.state.fixedBar) {
            this.setState({
                fixedBar: false
            });
        }
    };
    render() {
        const navBarClass = classNames("Navbar", {
            "no-fixed-bar": !this.state.fixedBar,
            "fixed-bar": this.state.fixedBar
        });
        const menuBtnClass = classNames("menu-btn", {
            "menu-btn_active": this.state.openMenu
        });
        const menuMainClass = classNames("menu-main", {
            "menu-main_active": this.state.openMenu
        });
        const langList = this.props.langList.map(l => (
            <option value={l.value} key={l.value}>
                {l.name}
            </option>
        ));
        return (
            <nav className={navBarClass}>
                <div className="sticky-bar">
                    <div className="logo">
                        <Link to="./" className="logo-light">
                            EasyLang
                        </Link>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-block">
                            <div className={menuMainClass}>
                                <div
                                    className="overlay"
                                    onClick={this.closeMenu}
                                ></div>
                                <ul className="menu-main-list">
                                    <li>
                                        <span className="menu-logo">
                                            EasyLang
                                        </span>
                                    </li>
                                    {/* <li>
                                        <Link
                                            to="./"
                                            className="menu-nav__link"
                                            onClick={this.closeMenu}
                                        >
                                            {this.props.text.home}
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link
                                            to="about"
                                            className="menu-nav__link"
                                            onClick={this.closeMenu}
                                        >
                                            {this.props.text.About}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="products"
                                            className="menu-nav__link"
                                            onClick={this.closeMenu}
                                        >
                                            {this.props.text.Products}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="download"
                                            className="menu-nav__link"
                                            onClick={this.closeMenu}
                                        >
                                            {this.props.text.Download}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="blog"
                                            className="menu-nav__link"
                                            onClick={this.closeMenu}
                                        >
                                            {this.props.text.ourBlog}
                                        </Link>
                                    </li>
                                    <li>
                                    {
										 this.props.noUseLangSelect || (
											<div className="lang">
												<form>
													<select
														name="changeLang"
														id="getLang"
														value={this.props.curLang}
														onChange={this.changeLocale}
													>
														{langList}
													</select>
												</form>
											</div>
											)
										}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={menuBtnClass}
                            onClick={this.clickMenuButton}
                        >
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
