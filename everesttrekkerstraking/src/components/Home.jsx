import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import withAuthorization from './withAuthorization';
// import { db } from '../firebase';

const HomePage = () =>
  (
    <div>
      <h1>Home Page</h1>
      
      <p> About trekking route and others info </p>
    </div>
  );

export default HomePage;


