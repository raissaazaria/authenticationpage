import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHZALMCb4c3UrDWspfg9kBe8leQipLrI8",
    authDomain: "fir-auth-f5676.firebaseapp.com",
    projectId: "fir-auth-f5676",
    storageBucket: "fir-auth-f5676.appspot.com",
    messagingSenderId: "867019534870",
    appId: "1:867019534870:web:11d763ba18f2cfc5c8fb37",
    measurementId: "G-WDL1FQX1XC"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};

  