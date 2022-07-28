import SignInFunction from '../SignIn';
import './Login.css';

function Login() {
	const SignIn = SignInFunction();

	return (
		<div className="loginContainer">
			<main className="loginMessage">
				<h3>PLEASE LOGIN</h3>
				<p>
					If you are a McMaster student or employee, please login using your Google
					Account. If you are external to McMaster, login with your Google Account.
				</p>
				<button onClick={SignIn}>LOG IN</button>
			</main>
		</div>
	);
}

export default Login;
