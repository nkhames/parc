import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import Statistique from './Statistique.js'
import Attraction from './Attraction.js'
import Batiment from './Batiment.js'
import Maintenance from './Maintenance.js'
import Personnel from './Personnel.js'
import Accueil from './Accueil.js'
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
    <div>
          <Switch>
          
          <Route path="/Accueil" component={Accueil}/>
          </Switch>
          <Switch>
          <Route path="/Statistiques"  component={Statistique}/>
          </Switch>
          <Switch>
          <Route exact path="/Attraction" component={Attraction}/>
          </Switch>
          <Switch>
          <Route exact path="/Batiment" component={Batiment}/>
          </Switch>
          <Switch>
          <Route exact path="/Maintenance" component={Maintenance}/>
          </Switch>
          <Switch>
          <Route exact path="/Personnel" component={Personnel}/>
          </Switch>
          </div>
        </BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
