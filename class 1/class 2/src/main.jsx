import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { UserInfo } from './components/UserInfo'
import './QrGenerator.css'
import { QrGenerator } from './components/QrGenerator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    < QrGenerator />

    {/* < UserInfo /> */}
  </React.StrictMode>,
)
