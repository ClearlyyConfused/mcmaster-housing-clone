import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CheckLogin from '../../Auth/CheckLogin';
import Login from '../../Auth/Login/LoginPage';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function DisplayedProperty() {
	const user = CheckLogin()[0];
	const [dropdown, setDropdown] = useState(false);
	// gets property info from the state passed in the link
	const [property, setProperty] = useState(useLocation().state);
	const [propertyCord, setPropertyCord] = useState({ lat: undefined, lon: undefined });
	// get the property name from the url
	const propertyNameUrl = useParams().propertyName.replace(/\s+/g, '-');

	useEffect(() => {
		window.scrollTo(0, 0);

		fetch(
			'https://nominatim.openstreetmap.org/search?' +
				new URLSearchParams({
					street: property.location,
					city: 'hamilton',
					country: 'canada',
					format: 'json',
				})
		).then((res) =>
			res.json().then((data) => {
				setPropertyCord({ lat: data[0].lat, lon: data[0].lon });
			})
		);
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
						<p>
							{propertyCord.lat !== undefined
								? getDistanceFromLatLonInKm(
										propertyCord.lat,
										propertyCord.lon,
										43.26099902067609,
										-79.91916079633296
								  )
								: 'N/A'}
						</p>
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
				<section>
					{propertyCord.lat !== undefined ? (
						<MapContainer
							id="map"
							center={[propertyCord.lat, propertyCord.lon]}
							zoom={13}
							scrollWheelZoom={false}
						>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={[propertyCord.lat, propertyCord.lon]}>
								<Popup>{property.location}</Popup>
							</Marker>
							<Marker position={[43.26099902067609, -79.91916079633296]}>
								<Popup>McMaster University</Popup>
							</Marker>
						</MapContainer>
					) : (
						''
					)}
				</section>
			</main>
		);
	}
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1); // deg2rad below
	var dLon = deg2rad(lon2 - lon1);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d.toFixed(2);
}

function deg2rad(deg) {
	return deg * (Math.PI / 180);
}

export default DisplayedProperty;
