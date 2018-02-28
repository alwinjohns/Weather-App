import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

const convertKelvinToCelsius = (K) => (K - 273)
const convertKelvinToF = (K) => (K - 273) * 1.8 + 32

class WeatherList extends Component {

  renderWeather(cityData) {
    if(!cityData) {
      return
    }
    const name = cityData.city.name
    const temps = cityData.list.map(weather => convertKelvinToF(weather.main.temp))
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lat, lon } = cityData.city.coord

    return(
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart color="red" data={temps} unit="F" /></td>
        <td><Chart color="green" data={pressures} unit="HPa" /></td>
        <td><Chart color="orange" data={humidities} unit="%" /></td>
      </tr>
    )
  }
  render() {
    return(
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
    )
  }
}
const mapStateToProps = ({weather}) => {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
