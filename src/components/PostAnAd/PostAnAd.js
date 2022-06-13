import firebase from 'firebase/compat/app';
import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function PostAnAd() {
	const [user] = useAuthState(auth);
	console.log(user);
	function signIn() {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

	if (user !== null) {
		return (
			<div>
				Logged in
				<button
					onClick={() => {
						auth.signOut();
					}}
				>
					Log Out
				</button>
			</div>
		);
	} else {
		return (
			<div>
				Please sign in<button onClick={signIn}>Sign In</button>
			</div>
		);
	}
}

export default PostAnAd;
