import * as firebase from 'firebase';

    const config = {
    apiKey: "AIzaSyDOcXFe0onwu66D50o8Mn0EtIpoM99qjzQ",
    authDomain: "voyages-f3d88.firebaseapp.com",
    databaseURL: "https://voyages-f3d88.firebaseio.com",
    projectId: "voyages-f3d88",
    storageBucket: "voyages-f3d88.appspot.com",
    messagingSenderId: "844751985479"
  };

export default class Firebase {
    static auth;
    static init() {
       
       if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
       Firebase.auth = firebase.auth();
       
}
    }

