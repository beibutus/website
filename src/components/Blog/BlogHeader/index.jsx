import React from "react";
import "./BlogHeader.scss";
import { Link } from "@reach/router";

const BlogHeader = (props) => {
        // let search;
        // if(this.props.showSearch){
        //     search = (
        //         <div className="Header-search">
        //             <i className="fa fa-search"></i>
        //             <input
        //                 type="search"
        //                 placeholder="Search"
        //                 defaultValue={this.props.parseQueryParam()}
        //                 onChange={e =>
        //                     this.props.handleFindText(e.target.value)
        //                 }
        //             />
        //         </div>
        //     )
        // }
        return (
            <header className="Header">
                <div className="Header-content container">
                    <h1 className="Header-title">
                        <Link to="">EasyLang Blog</Link>
                    </h1>
                {/* {search} */}
                </div>
            </header>
        );
}

export default BlogHeader;
