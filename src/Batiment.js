import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Batiment extends React.Component {
  render() {
    return (
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
    );
  }
}
//export default App;