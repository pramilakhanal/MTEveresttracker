//npm install --save google-map-react//

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { places } from './mapMaster';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 28.0026, lng: 86.8528},
    zoom: 15
  };

  constructor(props) {
    super(props);
    this.state = {
      center: {
      lat: 27.6857,
      lng: 86.7278
    },
    zoom: 15,
    location: 'Lukla'
    }
  }

  componentWillMount(){
    this.findLastLocationCoordinates(this.props.trecker, this.props.descending);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.trecker || this.props.ascending || this.props.descending) {

    this.findLastLocationCoordinates(this.props.trecker, nextProps.descending);
  }
  }
  findLastLocationCoordinates = (trecker, boolean) => {
    const { location, descending } = trecker
    let lastKnownLocation = '';
    if(!boolean) {
      for (let locale in location) {
        if(location[locale].checkedIn || location[locale].checkedOut) {
          console.log(locale);
            lastKnownLocation = locale;
        }
        
      }
      }
      else {
      for (let locale in descending) {
        if(descending[locale].checkedIn || descending[locale].checkedOut) {

            lastKnownLocation = locale;
        }
        
      }

      
      
    }
    if(lastKnownLocation === '' && !boolean) {
      lastKnownLocation = 'Lukla';
    }
    else if(lastKnownLocation === '' && boolean) {
      lastKnownLocation = 'Summit';
    }
    const currentState = this.state;
    const newMapLocation = {
      lat: places[lastKnownLocation].latitude,
      lng: places[lastKnownLocation].longitude
    }
      this.setState({...currentState, center: newMapLocation, location: lastKnownLocation});
    }
    
  


  
  createMapOptions(maps) { 
    return {
    mapTypeId: maps.MapTypeId.SATELLITE,
  };
  }
  
  render() {
    console.log(this.state);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '85vh', width: '80%' }}>
      <h4>{this.state.location}</h4>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDKoG-CoFjH4D4K55hxrFudPdgxUORt310"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions}

        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={this.state.location}
            

          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default SimpleMap;