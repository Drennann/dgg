import React from "react";
import Champions from "./dragontail-11.4.1/11.4.1/data/es_AR/championFull.json";
import Route from "react-router-dom/Route";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import { withRouter } from "react-router-dom";

class FormM extends React.Component {
    state={
        className: this.props.className,
        summoner: "",
    }
    onSubmit = (e) =>    {
        e.preventDefault();
        this.getChampion();
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getChampion = async () => {
        this.props.history.push("/champion", {summoner: this.state.summoner,
        data: Champions.data[this.state.summoner]});
    }
    render(){
        return(
        <div className={this.state.className}>
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Busca un Personaje" onChange={this.onChange} name="summoner" className="formmm">
                </input>
            </form>
        </div>)
    }
}
export default withRouter(FormM);