import React from "react";
import "./Blog.scss";
import Header from "./Header";
import Article from "./Article";
import Footer from "../Footer";
import ArticlesList from './ArticlesList'
import FullArticle from './FullArticle'
import {Router} from"@reach/router"

export default class Blog extends React.Component {
    articles = [];
    constructor(props) {
        super(props);
        (context => {
            context
                .keys()
                .sort((a, b) => b.match(/[0-9]+/)[0] - a.match(/[0-9]+/)[0])
                .forEach(key => this.articles.push(context(key)));
        })(require.context("../../articles/", false, /.html$/));
        this.state = {
            findArticleText: ""
        };
    }
    getArticleTitle(html) {
        const title = html.match(/<h1>([^<>]*)<\/h1>/);
        if (title) return title[1];
        return "";
    }
    parseStringToPath(str){
        return str.replace(/[^\w]/g,'-').replace(/[-]+/,'-').replace(/[-]$/,'');
    }
    generateArticleComponents(isFullview=false) {
        const articles = this.articles.map((a, index) => {
            const title = this.getArticleTitle(a);
            return (
                <Article articleHtml={a} title={title} key={index} id={index+'-'+this.parseStringToPath(title)} isFullview={isFullview}/>
            );
        });
        return articles;
    }
    handleFindText = text => {
        this.setState({
            findArticleText: text
        });
    };
    render() {
        const findedArticles = this.generateArticleComponents().filter(
            a =>
                a.props.title
                    .toUpperCase()
                    .indexOf(this.state.findArticleText.toUpperCase()) !== -1
        );
        return (
            <div className="Blog">
                <Header
                    findArticleText={this.state.findArticleText}
                    handleFindText={this.handleFindText}
                    showSearch={this.props.location.pathname === '/blog' || this.props.location.pathname === '/blog/'}
                ></Header>
                <div className="content">
                    <div className="container">
                        <Router>
                            <ArticlesList path="/" findedArticles={findedArticles}></ArticlesList>
                            <FullArticle path=":id" articleComponents = {this.generateArticleComponents(true)}></FullArticle>
                        </Router>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
