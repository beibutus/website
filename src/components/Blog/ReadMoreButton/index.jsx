import React from "react";
import "./ReadMoreButton.scss";
import classNames from "classnames";

export default class ReadMoreButton extends React.Component {
    render() {
        const readMoreClass = classNames({
            "Read-more-btn": true,
            hide: !this.props.hideMode
        });
        return (
            <button onClick={this.props.click} className={readMoreClass}>
                {!this.props.hideMode && <i className="fa fa-arrow-up"></i>}
                {this.props.hideMode ? "Read more" : " hide"}
            </button>
        );
    }
}
