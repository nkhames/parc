import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Personnel extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input type="number" name="ID" id="ID" placeholder="Ex : 12" />
        </FormGroup>
        <FormGroup>
          <Label for="Nom">Nom</Label>
          <Input type="Nom" name="Nom" id="Nom" placeholder="Ex : Dupont" />
        </FormGroup>
        <FormGroup>
          <Label for="Prénom">Prénom</Label>
          <Input type="Prénom" name="Prénom" id="Prénom" placeholder="Prénom" />
        </FormGroup>
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input type="number" name="number" id="ID" placeholder="Ex : 24" />
        </FormGroup>
        <FormGroup>
          <Label for="Fonction">Fonction</Label>
          <Input type="Fonction" name="Fonction" id="Fonction" placeholder="Ex : Jardinier" />
        </FormGroup>
        <FormGroup>
          <Label for="Salaire">Salaire</Label>
          <Input type="number" name="Salaire" id="Salaire" placeholder="Ex : 24000" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
//export default App;