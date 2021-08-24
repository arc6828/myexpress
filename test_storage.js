//.ENV
const dotenv = require('dotenv');
dotenv.config();

//FIREBASE
const firebase = require('firebase');
require("firebase/storage");
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}
const admin = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
//Fetch or AXOIS
const fetch = require('node-fetch');
const axios = require('axios');

//IMAGE TYPE
const imageType = require('image-type');
const FileType = require('file-type');

async function uploadImageToFirebase() {
    console.log("You call this function !!!");

    // IMAGE URL    
    let url = "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png";
    let response = await fetch(url);
    // MAKE BUFFER
    let buffer = await response.buffer();
    // MAKE FILE NAME
    let random_name = '_' + Math.random().toString(36).substr(2, 9);
    let file_type = (await FileType.fromBuffer(buffer));
    let filename = random_name + "." + file_type.ext;

    console.log(random_name);
    console.log(file_type);
    console.log(filename);
    console.log(new Uint8Array(buffer));

    // SAVE TO FIREBASE STORAGE
    const imageRef = storage.ref().child(filename);
    let data = new Uint8Array(buffer);
    let metadata = { contentType: file_type.mime };
    imageRef.put(data , metadata ).then((snapshot) => {
        console.log('Uploaded a data_url string!');
    });
}

uploadImageToFirebase();


