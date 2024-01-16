import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBKici-dKXHoc15LmEGMUVY1bqBzj2p_BE",
  authDomain: "electron-chat-d519e.firebaseapp.com",
  projectId: "electron-chat-d519e",
  storageBucket: "electron-chat-d519e.appspot.com",
  messagingSenderId: "451449104527",
  appId: "1:451449104527:web:dc986c4aafb1318f8068fa",
  measurementId: "G-H6TQ824RJ7"
};

export default firebase.initializeApp(config).firestore();