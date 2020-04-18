import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Players from "../pages/Players";
import Home from "../pages/Home";


function App(){
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;