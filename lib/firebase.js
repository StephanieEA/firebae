import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB1gaXClBQSK-pqeuqcXiWV-IgkFGZHR04',
  authDomain: 'firebae-64475.firebaseapp.com',
  databaseURL: 'https://firebae-64475.firebaseio.com',
  storageBucket: 'firebae-64475.appspot.com',
  messagingSenderId: '518383967436'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('budgets');
