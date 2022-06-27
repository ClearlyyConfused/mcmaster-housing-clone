import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../Login';
import { propertyInfo } from '../Data';
import DisplayProperty from './DisplayProperty';
import './PropertyListings.css';

function PropertyListings() {
	const [user] = useAuthState(auth);

	if (user === null) {
		return <Login />;
	}

	return (
		<main className="property-listing-page">
			<section className="property-side-bar"></section>
			<section className="property-listings">
				{propertyInfo.map((property) => {
					return <DisplayProperty property={property} />;
				})}
			</section>
		</main>
	);
}

export default PropertyListings;
