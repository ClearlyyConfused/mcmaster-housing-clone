import CheckLogin from '../../Auth/CheckLogin';
import Login from '../../Auth/Login/LoginPage';
import './PostAnAd.css';

function PostAnAd() {
	const user = CheckLogin()[0];

	return user === null ? (
		<Login />
	) : (
		<main className="post-an-ad">
			<main className="post-an-ad-error">
				<h3>ACCESS DENIED</h3>
				<p>
					Current account <strong>({user.displayName})</strong> does not have the
					permissions to post an ad. If you think this is a mistake, contact the main
					office.
				</p>
			</main>
		</main>
	);
}

export default PostAnAd;
