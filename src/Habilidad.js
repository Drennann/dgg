import React from "react";

export default class Habilidad extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div className ="HabilidadesContainer">
                <div className="Cosas">   
                        <div>{this.props.Habilidad.name}</div>
                        <div className="Cosa">Coste de mana:{this.props.Habilidad.costBurn}</div>
                        <div className="Cosa">Cooldown:{this.props.Habilidad.cooldownBurn}</div>
                </div>
                <div className="Imagen"><img src={this.props.Imagen.default}></img></div>
                <div className="Descripcion">{this.props.Habilidad.description}</div>
            </div>
        )
    }
}