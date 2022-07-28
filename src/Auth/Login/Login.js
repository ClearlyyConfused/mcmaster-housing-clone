import firebase from 'firebase/compat/app';
import { auth } from '../../Firebase';
import './Login.css';

function Login() {
	function signIn() {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

	return (
		<div className="loginContainer">
			<main className="loginMessage">
				<h3>PLEASE LOGIN</h3>
				<p>
					If you are a McMaster student or employee, please login using your Google
					Account. If you are external to McMaster, login with your Google Account.
				</p>
				<button onClick={signIn}>LOG IN</button>
			</main>
		</div>
	);
}

export default Login;
