import React from "react";
import "./Header.scss";
import { Link } from "@reach/router";

export default class Header extends React.Component {
    title = "EasyLang Blog";

    render() {
        return (
            <header className="Header">
                <div className="Header-content container">
                    <h1 className="Header-title">
                        <Link to="">{this.title}</Link>
                    </h1>
                    <div className="Header-search">
                        <i className="fa fa-search"></i>
                        <input
                            type="search"
                            placeholder="Search"
                            value={this.props.findArticleText}
                            onChange={e =>
                                this.props.handleFindText(e.target.value)
                            }
                        />
                    </div>
                </div>
            </header>
        );
    }
}
