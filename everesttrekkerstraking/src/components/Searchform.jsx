 import React, { Component } from "react";
 import './Searchform.css';



class Searchform extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchField: '',
    };
  }
  onType(e) {
    console.log(e.target.value);
    const currentState = this.state;
    this.setState({...currentState, searchField:  e.target.value});
  }
  onSearch() {
    this.props.loadTrecker(this.state.searchField);
  }
  render() {
  return (

 <div className="Trekerssearch container">
    <div className="col-9">
      <h1>TREKr Status</h1> 
    </div>

 <div className="col-6">
    <form id="searchForm1" className="search">
      <div className="form-group">
        <label htmlFor="name">Search Trekkers:</label>
        <input 
          value={this.state.searchField}
          onChange={this.onType.bind(this)}
          name="name"
          list="name"
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
        />
        <button type="button" id="searchButton" onClick={this.onSearch.bind(this)} className="btn btn-success">Search</button>
      </div>
    </form>
  </div>
      </div>

);
};
}
      export default Searchform;