import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Create from "./components/Create";
import Edit from "./components/Edit";
import Show from "./components/Show";

ReactDOM.render(
 <Router>
   <Switch>
     <Route exact path='/' component={App} />
     <Route path='/Edit/:id' component={Edit} />
     <Route path='/Create' component={Create} />
     <Route path='/Show/:id' component={Show} />
   </Switch>
 </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
