import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMRjNuMS6IZhIhsmzAG2LbXRMXf6UR-eI",
  authDomain: "keyng-cart.firebaseapp.com",
  projectId: "keyng-cart",
  storageBucket: "keyng-cart.appspot.com",
  messagingSenderId: "603615696618",
  appId: "1:603615696618:web:9d7873054e88b2e241e993",
  measurementId: "G-6383ZKYG7J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
