import { initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import  {getStorage, ref, getDownloadURL} from "firebase/storage";

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

export const db = getDatabase(app);

export const dbs = getStorage(app);

export function getImageUrl(id, ext){
  return new Promise(async(resolve) => {
    const promise = await getDownloadURL(ref(dbs, 'img/' + id + '.' + ext)).then(url => {
      resolve(url);
    });
  })

}