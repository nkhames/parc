import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Batiment_form extends React.Component {
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
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Ajouter un batiment</h2>
        <Form>
            <FormGroup>
            <Label for="ID">ID</Label>
            <Input type="number" name="ID" id="ID" placeholder="Ex : 12" />
            </FormGroup>
            <FormGroup>
            <Label for="Nom">Nom</Label>
            <Input type="Nom" name="Nom" id="Nom" placeholder="Ex : Toilettes" />
            </FormGroup>
            <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input type="date" name="date" id="exampleDate" placeholder="12/05/2017" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
            </div>
        </div>
        </body>
  </div>
      
    );
  }
}
//export default App;