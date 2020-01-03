import React from "react";
import Header from '../Header';
import "./Products.scss";


export default class Products extends React.Component {

    render() {
        return (
            <div className="Blog">
                <Header text={this.props.text}/>
                
            </div>
        );
    }
};
