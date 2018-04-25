import React from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Landing.css';

window.confirm("We would like to confirm your location");
{
  if (true == navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else { 
        console.log(navigator.geolocation.getCurrentPosition(showPosition));
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "  " +
    "Longitude: " + position.coords.longitude);
}

const LandingPage = () =>
  (
    <Row>
      <Col md={12}>
        <div id="mainContainer">
          <p id="text1">Welcome to:</p>
          <h1 id="text2">EVEREST<br/>TREKr-TRAKr</h1>
          <p id="text3">Knowing is half the battle...</p>
        </div>
      </Col>
      <Col md={12}>
        <p id="text4">Inspired by all the missing hikers that attempted to climb Mt. Everest 
              and other challenging expeditions and never made it back, our application is intended 
              to fill a void we believe exists in the ability to track hikers and climbers attempting 
              serious and dangerous endeavours, like scaling Mt. Everest. There doesn't seem to be any 
              app available today that allows for family, friends and other interested parties to track 
              a trekker's progress and whether or not they made it to each checkpoint along the way, 
              or if they may need to be rescued. We believe that problem is now closer than ever to being 
              solved.</p>
      </Col>
    </Row>
  );

export default LandingPage;
