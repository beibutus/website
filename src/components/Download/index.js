import React from "react";
import Header from '../Header';

import "./Download.scss";


export default class Download extends React.Component {
    render() {
        return (
            <div className="Blog">
                <Header text={this.props.text}/>
                
            </div>
        );
    }
};
