import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "../components/login/Login"
import Home from "../components/home/Home"

export default () =>
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
