const express = require('express');

//LINE CONFIG
const line = require('@line/bot-sdk');
const config = {
    channelAccessToken: "PZdTdgSxG19zoHcgkUC6yPkkgjyS+rk5M5OLVqsBY25R91BbFclMOYVSd0EXEno4kFL0WPTdvjEsE4AK5xh6xZvA6ByMpa5xRc312kRJIwdqhd6xfDLW1nXNvxpm7NYFeto2R3LL1l6je+NGw9GQZgdB04t89/1O/w1cDnyilFU=",
    channelSecret: "517f41ad2437521902d280678399089f"
};
const client = new line.Client(config);

//FIREBASE
const firebase = require('firebase');
require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCNHx-75dpbZkgJcUfcNvVJWIi0bUHT9eI",
    authDomain: "lineoa-b2204.firebaseapp.com",
    projectId: "lineoa-b2204",
    storageBucket: "lineoa-b2204.appspot.com",
    messagingSenderId: "142956788207",
    appId: "1:142956788207:web:bfb8360d090bcc3a901e1a",
    measurementId: "G-C4KP0MP1X7"
} 
const admin = firebase.initializeApp(firebaseConfig);
const db = admin.firestore();

//WEB
const app = express();    
const port = 3000

app.post('/webhook', line.middleware(config), (req, res) => {
    //console.log(req);
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});
async function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    // SAVE TO FIREBASE
    let chat = await db.collection('chats').add(event);
    console.log('Added document with ID: ', chat.id);

    //console.log(event);
    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: event.message.text,
    });
}

// Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
    res.send('Hello World !')
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
// Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
// Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.get('/test-firebase', async function (req, res) {
    let data = {
        name: 'Hanoi',
        country: 'Vietnam'
    }
    const result = await db.collection('cities').add(data);
    console.log('Added document with ID: ', result.id);
    res.send('Test firebase successfully, check your firestore for a new record !!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
