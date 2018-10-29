import React, { Component } from 'react';
import './App.css';
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
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Acceuil</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#Personnel">Personnel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#Attractions">Attractions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#Batiments">Batiments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#Maintenance">Maintenance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#stats">Statistiques</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">LibertyLand</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">Interface de gestion du parc.</h2>
        </div>
      </div>
    </header>
  </div>


 
    );
  }
}

export default App;
