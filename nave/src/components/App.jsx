import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"


export default () =>
  <div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>