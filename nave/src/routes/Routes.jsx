import React from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Create from "../pages/createNaver/Create"
import Update from "../pages/updateNaver/Update"
import { authOK } from "../api/Auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authOK() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);
export default () =>

  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/create" component={Create} />
      <PrivateRoute path="/update/:id" component={Update} />
    </Switch>
  </BrowserRouter>

