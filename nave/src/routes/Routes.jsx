import React from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import Login from "../components/login/Login"
import Home from "../components/home/Home"
import Create from "../components/createNaver/Create"
import Update from "../components/updateNaver/Update"
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

