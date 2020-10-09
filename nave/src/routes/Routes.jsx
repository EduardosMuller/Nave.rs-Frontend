import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "../components/login/Login"
import Home from "../components/home/Home"
import Create from "../components/createNaver/Create"
import Update from "../components/updateNaver/Update"

export default () =>

  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/update/:id" component={Update} />
    </Switch>
  </BrowserRouter>

