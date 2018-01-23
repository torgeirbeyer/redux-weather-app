import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord; //ES6 syntax

    return(
      <tr key={name}> 
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td><Chart data={temps} color='black' units='celsius' /></td>
        <td><Chart data={pressures} color='pink' units='hPa' /></td>
        <td><Chart data={humidities} color='red' units='%' /></td>
      </tr>
    )
  }
  render() { 
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
      )
  }
}

function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather}
}
 
export default connect(mapStateToProps)(WeatherList);