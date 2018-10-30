import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Table} from 'reactstrap';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Maintenance extends React.Component {
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
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Maintenance</h2>
            <Table responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Date de la dernière maintenance</th>
                <th>Date de la prochaine maintenance</th>
                <th>Attraction associé</th>
                <th>Technicien associé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>29/10/2018</td>
                <td>30/10/2018</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>27/10/2018</td>
                <td>29/10/2018</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
              <td>2</td>
                <td>24/10/2018</td>
                <td>27/10/2018</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </Table>
          <a class="nav-link js-scroll-trigger"><Link to="/Maintenance_form" style={{ color: '#FFF' }}> Ajouter Maintenance </Link></a>
            </div>
        </div>
        </body>
  </div>
   
    );
  }
} 
//export default App;