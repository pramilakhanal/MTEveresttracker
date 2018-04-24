import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
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
        this.setState({...currentState, trecker: data.data, foundPerson: true});
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
      
      <Row id="trekkerRow">

        <Col xs={12} sm={12} md={7} lg={7}>
          <div id="searchFormDiv">
            <Searchform
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              name={this.state.name}
              loadTrecker = {this.loadTrecker}
            />
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={7}>
          <br />
          
          <div className={`${this.state.foundPerson ? 'show' : 'hide'}`}>
        <Searchresult trecker = {this.state.trecker} results={this.state.results} />
        </div>
          <hr />
        </Col>

        <Col xs={12} sm={8} md={5} lg={5}>
          <div id="thumbnailDiv">
            <Thumbnail id="thumbnail5" src="https://i.pinimg.com/originals/63/b3/f7/63b3f783ea47c87722082d03130e9967.jpg" alt="242x200">
              <hr/>
              <h3>Geo-Locator: ENABLED</h3>
              <p>TREKr currently being TRAKd</p>
            </Thumbnail>
          </div>
        </Col>

      </Row>
      

    );

    
       

}
}

export default TrekkerstatusPage;


