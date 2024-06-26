import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {UserProvider} from "./contexts/UserContext.jsx";
import {CaseProvider} from "./contexts/CaseContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
          <CaseProvider>
          <App />
          </CaseProvider>
      </UserProvider>
  </React.StrictMode>,
)
