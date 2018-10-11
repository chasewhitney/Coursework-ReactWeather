import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('in reducer_weather with:', action);
  switch(action.type) {
    case FETCH_WEATHER:
      console.log('returning payload');

      // returns [ city, city, city ] NOT [ city, [ city, city ] ]
      return [action.payload.data, ...state];
  }
  console.log('payload missed');
  return state;
}
