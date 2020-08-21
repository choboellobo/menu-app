import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDY0wFdGHFfoM7jiudJ-hRaTXOQhRgIaME",
    authDomain: "mfigrupo.firebaseapp.com",
    databaseURL: "https://mfigrupo.firebaseio.com",
    projectId: "mfigrupo",
    storageBucket: "mfigrupo.appspot.com",
    messagingSenderId: "673038151485",
    appId: "1:673038151485:web:34a92195b5b97c67c61f54"
};
export default function () {
    if(!firebase.apps.length > 0){
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    return db;
}