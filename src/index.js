import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCa7X6v0nCMlLU4ZkA4vm6O4IWZxLmG1jQ",
    authDomain: "react-cart-889b9.firebaseapp.com",
    projectId: "react-cart-889b9",
    storageBucket: "react-cart-889b9.appspot.com",
    messagingSenderId: "291652962563",
    appId: "1:291652962563:web:168f83544b8c584d9e4136"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app); 
ReactDOM.render(<App />, document.getElementById('root'));
