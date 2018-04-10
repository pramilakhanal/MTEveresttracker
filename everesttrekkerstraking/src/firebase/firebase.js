

const firebase = require('firebase');


const config = {
    apiKey: "AIzaSyBRkCUojmV5O5sr2MHAfUaHifvgCrnWWLg",
    authDomain: "trekkerstracking.firebaseapp.com",
    databaseURL: "https://trekkerstracking.firebaseio.com",
    projectId: "trekkerstracking",
    storageBucket: "",
    messagingSenderId: "188544730835"
  };

  if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
  