import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
import API from "../utils/API";
import Searchform from './Searchform';
import Searchresult from './Searchresult';
import SimpleMap from './map.js'
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
      trecker: null,
      descending: false,
      ascending: true

    };
    this.loadTrecker = this.loadTrecker.bind(this);
  };
  
   changeAscendDescend() {
     const currentState = this.state;
      const truthiness = currentState.descending ? false : true;
     this.setState({...currentState, descending: truthiness, ascending: !truthiness});
  }
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
 
    shouldMapShow() {
      if(this.state.trecker) {
        return (
            <div id="mapImageDiv">
              <div id="mapImage">
                <SimpleMap descending = {this.state.descending} ascending = {this.state.ascending} trecker = {this.state.trecker}  />
              </div>
            </div>
          )
      }
      else {
        return(
          <div id="mapThumbnail">
            <Thumbnail src="http://www.nationalgeographicexpeditions.com/assets/images/8034/master.jpg" >
              <hr />
              <h4>Kathmandu - Everest Basecamp</h4>
              <p>13-Days</p>
            </Thumbnail>
          </div>
        )
      }
    }

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
          <div id="resultsFormDiv" className={`${this.state.foundPerson ? 'show' : 'hide'}`}>
          <Searchresult trecker = {this.state.trecker} results={this.state.results} />
          </div>
        </Col>

        <Col xs={12} sm={8} md={5} lg={5}>
            {this.shouldMapShow()}
        </Col>

      </Row>
      

    );

    
       

}
}

export default TrekkerstatusPage;


