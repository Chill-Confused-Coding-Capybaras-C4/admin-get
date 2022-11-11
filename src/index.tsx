import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
import { theme } from "./styles/theme";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const pca = new PublicClientApplication({
  //configuration object 
  auth: {
    clientId: 'b69d9021-8e4a-406f-b7c3-41b64ef24807',
    authority: 'https://login.microsoftonline.com/c9badae3-5c5e-4dbc-8060-f4fac5caa6e5',
    redirectUri: '/',             //relative path "/" so it will be easier to deploy we don't have to come back and change the "http://localhost:3000"
  },

  // msal browser(msal react) cache authenticate artifacts in session  => storage(default), local storage, memory storage, cookie storage
  // AAD  gives (1 hr for access tokens, 24 hr for refresh and id tokens)
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPII) => {
        console.log(message);
      },
      // logLevel: 'Verbose',  // => helpful for debugging
    }
  }
});

pca.addEventCallback((event: any) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    console.log(event);
    pca.setActiveAccount(event?.payload?.account);

  }
});


root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App msalInstance={pca} />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
