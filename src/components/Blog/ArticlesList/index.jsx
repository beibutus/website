import React from "react";
import "./ArticlesList.scss";

export default class ArticlesList extends React.Component {
    componentDidMount(){
        this.props.changeStateShowSearch(true);
    }
    render() {
        return (
            <div className="articlesList">{this.props.findedArticles}</div>
        );
    }
}
