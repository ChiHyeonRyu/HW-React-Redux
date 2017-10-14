import React from 'react';
import ReactDOM from 'react-dom'
import CalculatorCP from './components/CalculatorCP';

import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <CalculatorCP/>
  </Provider>,
  document.getElementById('root')
)
