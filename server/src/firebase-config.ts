import * as admin from 'firebase-admin';
const serviceAccount = require("./admin-key.json");

// Initialize Firestore
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
