import { combineReducers } from 'redux';
import weatherDataReducer from './reducer_weather_data';

const rootReducer = combineReducers({
  weatherData: weatherDataReducer
});

export default rootReducer;
