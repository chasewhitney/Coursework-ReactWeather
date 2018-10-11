import { combineReducers } from 'redux';
import weatherDataReducer from './reducer_weather';

const rootReducer = combineReducers({
  weatherData: weatherDataReducer
});

export default rootReducer;
