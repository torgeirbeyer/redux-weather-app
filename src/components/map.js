import React, { Component } from 'react';

class GoogleMap extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() { 
    return ( 
      // this.refs.map gives access to this element
      <div ref='map' />
     )
  }
}
 
export default GoogleMap;