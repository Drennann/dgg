import React from "react";
import Avatar from "./Avatar";
import Nombre from "./Nombre";
import Tag from "./Tag";
import Habilidades from "./Habilidades";
import {Link} from "react-router-dom"

export default class DetailMain extends React.Component {
    state= {
        data: this.props.data
    }
    render(){
        console.log("./dragontail-11.4.1/img/champion/tiles/"+this.state.data.summoner+"_0.jpg")
        return (
            <div className="DetailMain">   
                <h1 class="Volver"><Link to="/grisugg">Volver</Link></h1>
                <Avatar data={this.state.data} 
                    url={"./dragontail-11.4.1/img/champion/tiles/"+this.state.data.summoner+"_1.jpg"} 
                    nashe={require("./dragontail-11.4.1/img/champion/tiles/"+this.state.data.summoner+"_0.jpg")}/>
                <Nombre data={this.state.data}
                    Nombre={this.state.data.data.id}/>
                <Tag data={this.state.data}
                    Tag={this.state.data.data.title}/>
                <Habilidades Habilidades={this.state.data.data.spells}/>
            </div>
        )
    }
}