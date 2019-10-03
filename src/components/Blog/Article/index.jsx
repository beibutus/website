import ReactHtmlParser from "react-html-parser";
import React from "react";
import "./Article.scss";
import ReadMoreButton from "../ReadMoreButton";
import classNames from "classnames";

export default class Article extends React.Component {
    onClickReadMoreButton = () => {
        this.props.setOpenArticle(this.props.id);
    };
    render() {
        const articleClass = classNames({
            Article: true,
            hide: !this.props.openArticle
        });
        return (
            <div className={articleClass}>
                {ReactHtmlParser(this.props.articleHtml)}
                <ReadMoreButton
                    hideMode={!this.props.openArticle}
                    click={this.onClickReadMoreButton}
                />
            </div>
        );
    }
}
