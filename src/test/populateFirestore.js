const firebase = require('firebase');
require('firebase/firestore');

const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');

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

  const db = firebase.firestore();

  function populateCollection(collectionName, items) {
      return Promise.all(items.map(item => {
          const { id, ...data } = item;
          return db.collection(collectionName)
            .doc(id)
            .set(data);
      }));
  }

  Promise.all([
      populateCollection('reservations', reservations),
      populateCollection('reviews', reviews),
      populateCollection('restaurants', restaurants),
      populateCollection('dateAvailabilities', dateAvailabilities),
  ])
  .then(() => {
      console.log('Done!');
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
  });