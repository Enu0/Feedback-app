import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// the index html file in the public folder is been loaded into the browser, calling render
// function from ReactDOM library passing in main app component that's going to be output in
// the div with id of "root"
ReactDOM.render(
    //StrictMode activates additional checks and warning
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
)