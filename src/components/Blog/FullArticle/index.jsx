import React from "react";
import {Redirect} from '@reach/router'
import "./FullArticle.scss";

export default class ArticlesList extends React.Component {
    componentDidMount(){
        this.props.changeStateShowSearch(false);
    }
    render() {
				const curArticle = this.props.articleComponents.find(c=>c.props.id === this.props.id);
				if (!curArticle){
					return (
						<Redirect from="/" to={this.props.parentUri} noThrow></Redirect>
					)
				}
        return (
            <div className="fullArticle">{curArticle}</div>
        );
    }
}
