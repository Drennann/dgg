import React from "react";

export default class Tag extends React.Component {
    render(){
        return (
            <div className="Tag">
                {this.props.Tag}
            </div>
        )
    }
}