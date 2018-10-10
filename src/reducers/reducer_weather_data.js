import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {
  console.log('in reducer_weather_data with:', action);
  switch(action.type) {
    case FETCH_WEATHER:
      console.log('returning payload');
      return action.payload;
  }
  console.log('payload missed');
  return state;
}
