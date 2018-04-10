import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
    };
  }


  componentDidMount() {
    db.onceGetUsers()
      .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }

  render() {
    

    return (
      <Grid>
        <Jumbotron>

      <div className="col-9">
        <h1>Welcome to our Trekkers Trekking Page</h1>
        <p>Are you instrested to know where are your loved ones.... </p>
      </div>
      </Jumbotron>
      </Grid>

    );
  }
}



const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
