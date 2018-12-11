import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCreLsRx1RMSgjWo1UNs0TCTqrzhufmgzA",
    authDomain: "photowall-8f82b.firebaseapp.com",
    databaseURL: "https://photowall-8f82b.firebaseio.com",
    projectId: "photowall-8f82b",
    storageBucket: "photowall-8f82b.appspot.com",
    messagingSenderId: "685209826891"
};
 
firebase.initializeApp(config);

const database  = firebase.database();

export { database };