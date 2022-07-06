import { composeWithDevTools } from 'redux-devtools-extension';

import weatherReducer from './weather.reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
const rootReducer = combineReducers({

  weather: weatherReducer,

})
const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;