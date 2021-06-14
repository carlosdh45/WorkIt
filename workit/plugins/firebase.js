import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAdodEPHZEI12EqvSfkBrbZxXyE5wLayns",
    authDomain: "work-it-2e0cb.firebaseapp.com",
    databaseURL: "https://work-it-2e0cb-default-rtdb.firebaseio.com",
    projectId: "work-it-2e0cb",
    storageBucket: "work-it-2e0cb.appspot.com",
    messagingSenderId: "167858554085",
    appId: "1:167858554085:web:b53b72b0290c7c1eea000c"
  }

  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore, firebase }
