import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Favicon from "react-favicon";

import HireMe from "./pages/HireMe";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(

  <Router history={hashHistory}>
    <Favicon url={'../img/favicon.ico'}/>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="hireme" name="hireme" component={HireMe}></Route>
      //<Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
