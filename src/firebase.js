// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDTeWcpi6NLcYjJp2nB_3pGW2LiXA7mub0",
//   authDomain: "instagram-clone-react-a64a8.firebaseapp.com",
//   databaseURL:
//     "https://instagram-clone-react-a64a8-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "instagram-clone-react-a64a8",
//   storageBucket: "instagram-clone-react-a64a8.appspot.com",
//   messagingSenderId: "1059994114643",
//   appId: "1:1059994114643:web:1f1ba0f95645af6719c4a6",
//   measurementId: "G-8EJVHP572L",
// };

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyDTeWcpi6NLcYjJp2nB_3pGW2LiXA7mub0",
  authDomain: "instagram-clone-react-a64a8.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL:
    "https://instagram-clone-react-a64a8-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "instagram-clone-react-a64a8.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var db = firebase.database();

export default db;
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firestore();
// const auth = auth();
// const storage = firebase.storage();

// export { auth, storage };

// export default firebaseConfig;
