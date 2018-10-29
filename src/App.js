import React, { Component } from 'react';
//import { Router, Route, Link } from "react-router";
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Statistique from './Statistique.js'
import Attraction from './Attraction.js'
import Batiment from './Batiment.js'
import Maintenance from './Maintenance.js'
import Personnel from './Personnel.js'
import Accueil from './Accueil.js'
import './css/grayscale.css'
import './css/grayscale.min.css'
require('bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="container-fluide">
         
    <title>LibertyLand Management</title>
        </header>
       
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
      
        <a class="navbar-brand js-scroll-trigger"><Link to="/Accueil" style={{ color: '#FFF' }}> Accueil </Link></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger"><Link to="/Personnel" style={{ color: '#FFF' }}> Personnel </Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger"><Link to="/Attraction" style={{ color: '#FFF' }}> Attraction </Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger"><Link to="/Batiment" style={{ color: '#FFF' }}> Batiment </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" ><Link to="/Maintenance" style={{ color: '#FFF' }}> Maintenance </Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" ><Link to="/Statistiques" style={{ color: '#FFF' }}> Statistiques </Link></a>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
    <body class="masthead">
            <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">LibertyLand</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Interface de gestion du parc.</h2>
            </div>
        </div>
        </body>
  </div>

    );
  }
}

export default App;
