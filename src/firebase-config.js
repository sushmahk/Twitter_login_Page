import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyBs_YkVAvC8RviFmKoNui_Z6D3ciLjgjM0",
  
    authDomain: "login-42f6a.firebaseapp.com",
  
    projectId: "login-42f6a",
  
    storageBucket: "login-42f6a.appspot.com",
  
    messagingSenderId: "951200956689",
  
    appId: "1:951200956689:web:fe79fface78ce7b10fccb0",
  
    measurementId: "G-55Y5SLW1XZ"
  
  };
  


  const app = initializeApp(firebaseConfig);

  

  export const auth = getAuth(app);