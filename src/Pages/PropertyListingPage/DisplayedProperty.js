import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function DisplayedProperty() {
	const [dropdown, setDropdown] = useState(false);
	const displayedProperty = useLocation().state;

	return (
		<main className="displayed-property">
			<section className="sidebar">
				<section className="info-panels">
					<div>
						<h2>LEASE TIME</h2>
						<p>{displayedProperty.rental_term}</p>
					</div>
					<div>
						<h2>RENT PER MONTH</h2>
						<p>${displayedProperty.cost_per_month}</p>
					</div>
					<div>
						<h2>DISTANCE (KM)</h2>
						<p>{displayedProperty.distance}</p>
					</div>
					<div>
						<h2># OF BEDROOMS AVAILABLE</h2>
						<p>{displayedProperty.available_bedrooms}</p>
					</div>
					<div>
						<h2>DATE AVAILABLE</h2>
						<p>
							{new Date(displayedProperty.date_available).toLocaleString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</p>
					</div>
				</section>
			</section>
			<section className="main-display">
				<img src={displayedProperty.propertyImage} alt="" srcset="" />
				<div className="location-info">
					<h1>{displayedProperty.location.toUpperCase()}</h1>
					<p>{displayedProperty.description}</p>
					<div className="contact-dropdown">
						<button
							onClick={() => {
								setDropdown(!dropdown);
							}}
						>
							LANDLORD CONTACT
						</button>
						<p style={{ visibility: dropdown ? '' : 'hidden' }}>Email: {displayedProperty.landlord_email}</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default DisplayedProperty;
