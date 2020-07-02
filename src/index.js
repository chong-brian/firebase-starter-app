import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

  var firebaseConfig = {
    apiKey: "AIzaSyCRxOY2nFRbmPkFDMFakNrbIOQet41x_eY",
    authDomain: "restaurant-reservation-d17ba.firebaseapp.com",
    databaseURL: "https://restaurant-reservation-d17ba.firebaseio.com",
    projectId: "restaurant-reservation-d17ba",
    storageBucket: "restaurant-reservation-d17ba.appspot.com",
    messagingSenderId: "223304634011",
    appId: "1:223304634011:web:14bfeb93ac1a90caf0c03e",
    measurementId: "G-79WGBNTMVB"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // This is where the magic happens. React renders our App component
  // inside the div with the id "root"
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
