import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((req, res)=>{
    res.send("Hellow from Firebase (using modern JavaScript");
});