import React, { Component } from 'react';
import './App.css';
import './css/grayscale.css'
import './css/grayscale.min.css'
require('bootstrap')

class Personnel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

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
                    <a class="nav-link js-scroll-trigger" href="#Attractions">Attractions & Batiments</a>
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
                
                    <form>
                    <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                    </label>
                </form>

                </div>
            </div>
            </header>
        </div>


 
    );
  }
}

export default Personnel;
