import React from "react";
import Habilidad from "./Habilidad"

export default class Habilidades extends React.Component {
    mostrarHabilidades(){

    }
    render(){
        console.log(this.props)
        return (
            <div className="Habilidades">
                {this.props.Habilidades.map(e => {return <Habilidad Habilidad={e} Imagen={require("./dragontail-11.4.1/11.4.1/img/spell/"+e.image.full)}/>})}
            </div>
        )
    }
}