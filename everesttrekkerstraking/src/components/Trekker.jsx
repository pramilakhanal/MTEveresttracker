import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import API from "../utils/API";
import Searchform from './Searchform';
import Searchresult from './Searchresult';
import './Trekker.css';



class TrekkerstatusPage extends Component {
  constructor(props) {
    super(props);

  

  this.state = {
      search: "",
      name: [],
      location: [],
      checkin: [],
      checkout: [],
      error: "",
      foundPerson: null,
      trecker: null
  
    };
    this.loadTrecker = this.loadTrecker.bind(this);
  };
  

  

  

  loadTrecker = (name) => {
    const currentState = this.state;
    API.getTrecker(name)
      .then(data => {
        this.setState({...currentState, trecker: data.data});
      })
      .catch(err => console.log(err));
  };

   handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    
      API.saveTrecker({
        name: this.state.name,
        location: this.state.location,
        checkin: this.state.checkin,
        checkout: this.state.checkout
      })
        .then(res => this.loadTrecker())
        .catch(err => console.log(err));
    };
 


  render() {
    

    return (
      
      <div className="container">
                     
      <Searchform
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          name={this.state.name}
          loadTrecker = {this.loadTrecker}
        />
        <Searchresult trecker = {this.state.trecker} results={this.state.results} />
    </div>
      

         );

    
       }

}

export default TrekkerstatusPage;


