import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'
import store from "./store";

import Area from './components/Area'

render(
  <Provider store={store}>
    <Area />
  </Provider>,
  document.getElementById('app')
)