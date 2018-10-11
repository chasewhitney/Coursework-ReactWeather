import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps}/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  };
};

function mapStateToProps({weather}) {
  // return { weather: state.weather}; // with param state instead of { weather }
  // return { weather: weather}; // can reduce to..
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
