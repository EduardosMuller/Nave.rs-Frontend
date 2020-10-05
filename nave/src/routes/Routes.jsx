import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "../components/login/Login"
import Home from "../components/home/Home"
import Create from "../components/create/Create"
import Update from "../components/update/Update"

export default () =>

  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/update" component={Update} />
    </Switch>
  </BrowserRouter>

