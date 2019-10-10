import ReactHtmlParser from "react-html-parser";
import React from "react";
import "./Article.scss";
import ReadMoreButton from "../ReadMoreButton";
import classNames from "classnames";

export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openArticle : false
        }
    }
    onClickReadMoreButton = () => {
        this.setOpenArticle();
    };
    setOpenArticle = _ => {
        this.setState(state =>{
            return {openArticle: !state.openArticle}
        });
    };
    render() {
        const articleClass = classNames({
            Article: true,
            hide: !this.state.openArticle
        });
        return (
            <div className={articleClass} ref={this.ref}>
                {ReactHtmlParser(this.props.articleHtml)}
                <ReadMoreButton
                    hideMode={!this.state.openArticle}
                    click={this.onClickReadMoreButton}
                />
            </div>
        );
    }
}
