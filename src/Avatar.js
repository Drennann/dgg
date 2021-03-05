import React from "react";

export default class Avatar extends React.Component {
    state = {
        data: this.props.data,
    }

    render(){
        console.log(this.props.nashe.default)
        return (
            <div className="Avatar">
                <img src={this.props.nashe.default} height="200px" width="200px"></img>
            </div>
        )
    }
}