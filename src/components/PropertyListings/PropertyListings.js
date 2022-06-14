import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../Login';

function PropertyListings() {
	const [user] = useAuthState(auth);

	if (user === null) {
		return <Login />;
	}

	return (
		<main>
			<section className="welcomeUser">
				Welcome {user.displayName}
				{/* prettier-ignore */}
				<button onClick={() => {auth.signOut()}}>Log Out </button>
			</section>
		</main>
	);
}

export default PropertyListings;
