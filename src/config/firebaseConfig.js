import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBBaDdgZZkWDkQO8YuiLmThNDYOp5PApyU",
  authDomain: "vue-oztk.firebaseapp.com",
  databaseURL: "https://vue-oztk.firebaseio.com",
  projectId: "vue-oztk",
  storageBucket: "vue-oztk.appspot.com",
  messagingSenderId: "663994273365",
  appId: "1:663994273365:web:6921f400c8abd07de3cedc"
};

firebase.initializeApp(firebaseConfig);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
