import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './App'
import './index.css'
// import reducer from './store/reducer'
import reducerA from './store/reducerA'
import reducerB from './store/reducerB'

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB,
})

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
