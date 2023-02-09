// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlia3ENVuaJK54aTqYSLcdCp55J-4ILMM",
    authDomain: "todo-app-project-e13d6.firebaseapp.com",
    projectId: "todo-app-project-e13d6",
    storageBucket: "todo-app-project-e13d6.appspot.com",
    messagingSenderId: "967144782141",
    appId: "1:967144782141:web:1d8586d5eca2ff2b922d54",
    measurementId: "G-0H6DQ4VHWY"
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };