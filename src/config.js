import Firebase from "firebase";

const config = {
    apiKey: "AIzaSyDL1fhHIPOfvMBFJ6QvugOz9lXlfoxtjlc",
    authDomain: "matestore-ed158.firebaseapp.com",
    databaseURL: "https://matestore-ed158.firebaseio.com",
    projectId: "matestore-ed158",
    storageBucket: "matestore-ed158.appspot.com",
    messagingSenderId: "791922744135",
    appId: "1:791922744135:web:cb38820134657511"
  };

  let app = Firebase.initializeApp(config);
  export const db = app.database();