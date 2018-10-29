import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Attraction extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input type="number" name="ID" id="ID" placeholder="Ex : 12" />
        </FormGroup>
        <FormGroup>
          <Label for="Nom">Nom</Label>
          <Input type="Nom" name="Nom" id="Nom" placeholder="Ex : Le grand Tour" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="Prix">Prix d'entrée €</Label>
          <Input type="number" name="Prix" id="Prix" placeholder="Ex : 15" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
//export default App;