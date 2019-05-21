import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { apiKey } from "../data/data";

const mapStyles = {
  width: '300px',
  height: '300px'
};

export class MapContainer extends Component {
  render() {
    const { coords } = this.props;
    return (
      <Map
        google={this.props.google}
        className="map"
        style={mapStyles}
        zoom={11}
        initialCenter={{
         lat: coords.lat,
         lng: coords.lon
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);