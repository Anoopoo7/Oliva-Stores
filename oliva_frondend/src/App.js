import React from "react";
import Login from "./login";
import Single from "./singleproduct";
import UserRegistration from "./userRegistration";
import UserLogin from "./userLogin";
import Adminpannel from './adminpannel'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register" exact component={UserRegistration} />
          <Route path="/" exact component={UserLogin} />
          <Route path="/home" exact component = {Login} />
          <Route path="/single" exact component = {Single} /> 
          <Route path="/admin" exact component = {Adminpannel} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
