import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCavmbb2JSFsRdL8s1LOn-M_lZOyQ-J9yI",  
    authDomain: "ninth-stock-353208.firebaseapp.com",  
    projectId: "ninth-stock-353208",  
    storageBucket: "ninth-stock-353208.appspot.com",  
    messagingSenderId: "997232229773",  
    appId: "1:997232229773:web:4baf09e3d34f5f7020d1c4"  
};  

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);