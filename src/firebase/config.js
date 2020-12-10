import firebase from 'firebase'
const firebaseConfig={

    apiKey: "AIzaSyDU7IzIFTZrFDunlZhBs0QqQB9kGS4Xe4Y",
    authDomain: "pokedex-a390d.firebaseapp.com",
    projectId: "pokedex-a390d",
    storageBucket: "pokedex-a390d.appspot.com",
    messagingSenderId: "119095214899",
    appId: "1:119095214899:web:279b23f97e7b06d7c23446"


}
firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();

export default firebase;