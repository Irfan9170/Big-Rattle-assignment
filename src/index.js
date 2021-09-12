import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZJ67PX-0qifcWdmCtceREf0iFmUXJjtc",
  authDomain: "news-d25ff.firebaseapp.com",
  projectId: "news-d25ff",
  storageBucket: "news-d25ff.appspot.com",
  messagingSenderId: "476676049220",
  appId: "1:476676049220:web:6f839d914096e39dbf6f11"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


