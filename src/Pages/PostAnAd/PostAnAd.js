import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../../Auth/Login/Login';
import './PostAnAd.css';

function PostAnAd() {
	const [user] = useAuthState(auth);

	if (user === null) {
		return <Login />;
	}

	return (
		<main className="post-an-ad">
			<main className="post-an-ad-error">
				<h3>ACCESS DENIED</h3>
				<p>
					Current account <strong>({user.displayName})</strong> does not have the
					permissions to post an ad. If you think this is a mistake, contact the main
					office.
				</p>
				<button>RETURN TO HOMEPAGE</button>
			</main>
		</main>
	);
}

export default PostAnAd;
