import React from "react";
import Main from "./main";

export default class Champions extends React.Component {
    state = {
        championsData: {},
        championsArray: []
    }
    fetchChamps = async() => {
        let res = await fetch("http://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion.json");
        let a = await res.json();
        let b = Object.keys(a.data);
        this.setState({championsData: a, championsArray: b})
    }
    async componentDidMount(){
        await this.fetchChamps();
    }
    nAlAzar = () => {
        let n = Math.floor(Math.random()*154);
        return n;
    }

    render(){
        let background = {
            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.championsArray[this.nAlAzar()]}_1.jpg")`,
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
            zIndex: "-1"
        }
        
        return(
            <div className="opacity" style = {background}>
                <Main/>
            </div>
        )
    }
}


