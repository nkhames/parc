import React, { Component} from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
require('bootstrap');

export default class Maintenance extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input type="number" name="ID" id="ID" placeholder="Ex : 12" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date de la dernière maintenance</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="12/05/2017" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date de la prochaine maintenance</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="12/05/2017" />
        </FormGroup>
        <FormGroup>
          <Label for="ID">ID de l'attraction associée</Label>
          <Input type="number" name="ID" id="ID" placeholder="Ex : 4" />
        </FormGroup>
        <FormGroup>
          <Label for="ID">ID du technicien associé</Label>
          <Input type="number" name="ID" id="ID" placeholder="Ex : 23" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
//export default App;