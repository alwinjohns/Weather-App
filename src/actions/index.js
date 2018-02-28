import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'
const API_KEY = 'ddf7b41100150612295e9afd6074c818'
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

const fetchWeather = (city) => {
  const url = `${rootUrl}&q=${city}`
  const payload = axios.get(url)

  return(
    {
      type: FETCH_WEATHER,
      payload
    }
  )
}
export default fetchWeather
