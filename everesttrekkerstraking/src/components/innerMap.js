import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './innerMap.css';
const AnyReactComponent = ({ text }) => <div className="mapText">{text}</div>;

class InnerMap extends Component {
	
  constructor(props) {
    super(props);
  }
	  createMapOptions(maps) { 
    return {
    mapTypeId: maps.MapTypeId.SATELLITE,
  };
  }
  renderMarkers(map, maps, lat, long) {
        let marker = new maps.Marker({
            position: {lat: parseFloat(lat), lng: parseFloat(long)},
            map,
            title: this.props.location
        });
    }

	render() {
    console.log('Here are our center props????',this.props.center)
		return (
		<div style={{ height: '85vh', width: '80%' }}>
			<GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDKoG-CoFjH4D4K55hxrFudPdgxUORt310"}}
          defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
          defaultZoom={20}
          options={this.createMapOptions}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, this.props.lat, this.props.lng)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
          lat={this.props.lat}
          lng={this.props.lng}
            text={this.props.location}
            

          />
        </GoogleMapReact>
		</div>
		
		);
	}
}

export default InnerMap;