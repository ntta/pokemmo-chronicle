import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAQ4xJeHN6RUUXq3izIZ4uVEI6xOfXDGdU',
  authDomain: 'pokemmo-chronicle.firebaseapp.com',
  databaseURL: 'https://pokemmo-chronicle.firebaseio.com',
  projectId: 'pokemmo-chronicle',
  storageBucket: 'pokemmo-chronicle.appspot.com',
  messagingSenderId: '398991767642',
  appId: '1:398991767642:web:f4d0ac8cb93881ddd50063',
  measurementId: 'G-M4RHYSYKJ4'
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
