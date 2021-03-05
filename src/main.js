import React from "react";
import Header from "./header"
import FormM from "./FormM"

export default class Main extends React.Component {

    render(){
        return(
        <div className="main">
           <Header className = "item-a"/>
           <div className ="item-b"></div>
           <div className="item-c"><div className="logoM"><img src="https://cdn.discordapp.com/attachments/598981976833261581/816080073744580628/LETRA.png" alt="nashe" width="400px" height="250px"></img></div><FormM className="formM"/></div>
        </div>)
    }
}