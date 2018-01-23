import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
  //we never manipulate state directly, only using .concat or setState()
  // which will return a new instance of state 
    // return state.concat([action.payload.data]);
    // ES6 syntax, the 
    return [ action.payload.data, ...state ]; 
  }
  return state;
}