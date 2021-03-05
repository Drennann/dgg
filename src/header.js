import React from "react";

export default class Header extends React.Component {
    state = {
        className: this.props.className
    }
    render(){
        return(
            <div className = {this.state.className} ><div className="logo"><a><img src="https://cdn.discordapp.com/attachments/598981976833261581/815056982234628096/grisu_png.png" alt="nashe" width="85px" height="60px"></img></a></div><div className="login"></div></div>
        )
    }
}