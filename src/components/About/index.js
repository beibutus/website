import React from "react";
import Header from '../Header';

import "./About.scss";


export default class About extends React.Component {
    render() {
        return (
            <div className="Blog">
                <Header text={this.props.text}/>
                
            </div>
        );
    }
};
