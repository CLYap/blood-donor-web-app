import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjACeWmg6XEyFcKpuil4dZSvsH_J5A3nE',
  authDomain: 'blood-donor-management-s-f0d3c.firebaseapp.com',
  projectId: 'blood-donor-management-s-f0d3c',
  storageBucket: 'blood-donor-management-s-f0d3c.appspot.com',
  messagingSenderId: '222959529237',
  appId: '1:222959529237:web:3b3377c0d3e1a1c4c78d1c',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
