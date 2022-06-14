import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../Login';

function PostAnAd() {
	const [user] = useAuthState(auth);

	if (user === null) {
		return <Login />;
	}

	return (
		<main>
			Welcome {user.displayName}
			{/* prettier-ignore */}
			<button onClick={() => {auth.signOut()}}>Log Out </button>
		</main>
	);
}

export default PostAnAd;
