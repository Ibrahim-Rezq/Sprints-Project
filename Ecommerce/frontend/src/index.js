import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style/index.css'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
