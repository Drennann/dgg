import React from "react";
import DetailMain from "./DetailMain";

export default class ChampionDetallado extends React.Component {
    state={
        data: this.props.data
    }
    render(){
        return(
            <DetailMain data={this.state.data}/>
        )
    }
}