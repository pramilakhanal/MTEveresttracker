import React, { Component } from "react";
 import './Searchform.css';
import axios from 'axios';

class Searchresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('here are my next props', nextProps.trecker);
    if(nextProps.trecker) {
      const currentState = this.state;
      this.setState({...currentState, data: nextProps.trecker});
    }
  }
  arrayBuilder(obj){
    const results = [];
    for(let key in obj) {
      results.push(obj[key]);
    }
    return results;
  }
  
  render () {
    if(this.state.data) {
  return (

  <div>


<div className="container">


  <h3>Name: {this.state.data.name}</h3>
                   
  <table className="table">
  
    <thead>
        <tr>
          <th scope="col">Checkpoint</th>
          <th scope="col">Location</th>
          <th scope="col">Checkin</th>
          <th scope="col">Checkout</th>
        </tr>
    </thead>
    <tbody>
      {this.arrayBuilder(this.state.data.location).map((station, index) => {
        return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{Object.keys(this.state.data.location)[index]}</td>
          <td>
          <input type="checkbox" checked={station.checkedIn} aria-label="Checkbox for following text input"/>
          </td>
          <td>
          <input type="checkbox" checked={station.checkedOut}  aria-label="Checkbox for following text input"/>
          </td>
        </tr>
        );
      })}
               
    </tbody>
  </table>
  </div>
  

</div>




)
}
else {
  return (
      <div>Loading.......</div>
    );
}
}
};
      export default Searchresult;