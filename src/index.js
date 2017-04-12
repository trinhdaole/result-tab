import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'

//const store = createStore(reducer)

render(
    <Provider >
        <App />
    </Provider>,
    document.getElementById('root')
)
