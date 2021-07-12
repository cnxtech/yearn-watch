import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getEnv } from './env';

const { fbAuthDomain, fbApiKey, fbProjectId } = getEnv();

// Configure Firebase.
const config = {
    apiKey: fbApiKey,
    authDomain: fbAuthDomain,
    projectId: fbProjectId,
    // ...
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

export const scores = firebase?.firestore().collection('scores');
console.log('connection initialized');

export default firebase;