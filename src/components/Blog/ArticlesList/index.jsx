import React from "react";
import "./ArticlesList.scss";

export default class ArticlesList extends React.Component {
    render() {
        return (
            <div className="articlesList">{this.props.findedArticles}</div>
        );
    }
}
