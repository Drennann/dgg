import './App.css';
import React, {Component}from "react";
import Champions from "./Champions";
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";
import ChampionDetail from "./ChampionDetail";


class App extends Component {

  state = {

  }
  render(){
    return(
      <Router>
        <div>
          <Route path="/dgg" exact component={Champions}/>
          <Route path="/champion" exact component={ChampionDetail}/>
        </div>
      </Router>
    )
  }
}

export default App;