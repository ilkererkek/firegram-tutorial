 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAIk_fRnBJ9RjoFzAiNBf-FHlO0pmqITzw",
    authDomain: "firegram-training.firebaseapp.com",
    databaseURL: "https://firegram-training.firebaseio.com",
    projectId: "firegram-training",
    storageBucket: "firegram-training.appspot.com",
    messagingSenderId: "935744791192",
    appId: "1:935744791192:web:a923afaa1dc94441f2e6ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{projectStorage,projectFirestore, timestamp };
