import React from "react"
import { Switch, Route } from "react-router-dom"
import SignUp from "../login/SignUp"
import Home from "../home/Home"

export default () =>
  <div>
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/home" component={Home} />
    </Switch>
  </div>
