import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyDDfYsNUrj6yKReJ7CleX_YqWvWyn-QxsM',
	authDomain: 'offcampus-mcmaster.firebaseapp.com',
	projectId: 'offcampus-mcmaster',
	storageBucket: 'offcampus-mcmaster.appspot.com',
	messagingSenderId: '909464646522',
	appId: '1:909464646522:web:182902526deb2de5a05cc3',
};

firebase.initializeApp(config);
const auth = firebase.auth();

export { auth };
