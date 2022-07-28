import firebase from 'firebase/compat/app';
import { auth } from './Firebase';

function SignInFunction() {
	return () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};
}

export default SignInFunction;
