import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import './components/stylesheets/App.css'
//const store = createStore(reducer)

render(
    <Provider >
        <App />
    </Provider>,
    document.getElementById('root')
)
