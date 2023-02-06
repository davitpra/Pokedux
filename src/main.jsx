import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./App.css"
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))

// debido a que existe un conflicto entre thunk y redux-devtools, la forma en la quedebemos inyectar compose es la siguente:
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(
  applyMiddleware (thunk,logger)
)

const store = createStore(
  rootReducer,
  composedEnhancers
) 

root.render(
    <Provider store={store}>
      <App />
    </Provider>
)
