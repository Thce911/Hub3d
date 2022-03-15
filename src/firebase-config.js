import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";



const firebaseConfig = {
  apiKey: "AIzaSyBoIQggqcw1_RWbefqenxqRT5gXr4-8gNU",
  authDomain: "art3d-e7c95.firebaseapp.com",
  databaseURL: "https://art3d-e7c95.firebaseio.com",
  projectId: "art3d-e7c95",
  storageBucket: "art3d-e7c95.appspot.com",
  messagingSenderId: "757334005626",
  appId: "1:757334005626:web:1392daed74e21fdf67a8c3",
  measurementId: "G-M6TTYK0CE9"
}

const app = initializeApp(firebaseConfig);

export const df = getFirestore(app);

export const db = getDatabase();

export function database(){
  const [setData] = useState;
  var starCountRef = ref(db, 'assets');

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const allData = [];
    
    for (let id in data){
      allData.push(data[id]);
    }
    setData(allData);
  });
  
}

