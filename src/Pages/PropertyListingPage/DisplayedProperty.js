import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CheckLogin from '../../Auth/CheckLogin';
import Login from '../../Auth/Login/LoginPage';

function DisplayedProperty() {
	const user = CheckLogin()[0];
	const [dropdown, setDropdown] = useState(false);
	// gets property info from the state passed in the link
	console.log(useLocation().state);
	const [property, setProperty] = useState(useLocation().state);
	// get the property name from the url
	const propertyNameUrl = useParams().propertyName.replace(/\s+/g, '-');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (user === null) {
		return <Login />;
	} // if no state passed in link fetch from api manually
	else if (property === null) {
		fetch('https://mcmaster-housing-clone-api.vercel.app/property')
			.then((response) => response.json())
			.then((data) => {
				// returns property that has the same name as in the url
				for (const property of data) {
					if (property.location.replace(/\s+/g, '-') === propertyNameUrl) {
						setProperty(property);
					}
				}
			});
	} else {
		return (
			<main className="displayed-property">
				<section className="main-display">
					<img src={property.propertyImage} alt="" srcset="" />
					<div className="location-info">
						<h1>{property.location.toUpperCase()}</h1>
						<p>{property.description}</p>
						<div className="contact-dropdown">
							<button
								onClick={() => {
									setDropdown(!dropdown);
								}}
							>
								LANDLORD CONTACT
							</button>
							<p style={{ visibility: dropdown ? '' : 'hidden' }}>Email: {property.landlord_email}</p>
						</div>
					</div>
				</section>
				<section className="info-panels">
					<div>
						<h2>LEASE TIME</h2>
						<p>{property.rental_term}</p>
					</div>
					<div>
						<h2>RENT PER MONTH</h2>
						<p>${property.cost_per_month}</p>
					</div>
					<div>
						<h2>DISTANCE (KM)</h2>
						<p>{property.distance}</p>
					</div>
					<div>
						<h2># OF BEDROOMS AVAILABLE</h2>
						<p>{property.available_bedrooms}</p>
					</div>
					<div>
						<h2>DATE AVAILABLE</h2>
						<p>
							{new Date(property.date_available).toLocaleString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</p>
					</div>
					<div>
						<h2>DATE POSTED</h2>
						<p>
							{new Date(property.date).toLocaleString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</p>
					</div>
				</section>
			</main>
		);
	}
}

export default DisplayedProperty;
