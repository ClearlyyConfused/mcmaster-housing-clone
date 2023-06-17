import { Link } from 'react-router-dom';

function DisplayProperty({ property }) {
	return (
		<Link
			className="property-display"
			to={`/available-properties/${property.location.replace(/\s+/g, '-')}`}
			state={property}
		>
			<div className="property-img-container">
				<img src={property.propertyImage} alt="" loading="lazy" />
			</div>
			<div className="property-info">
				<h2>{property.location}</h2>
				<p>{property.description}</p>
				<div className="property-sub-info">
					<h3>${property.cost_per_month}/month</h3>
					<h3>{property.distance} km from McMaster</h3>
					<h3>Posted on {property.date}</h3>
				</div>
			</div>
		</Link>
	);
}

export default DisplayProperty;
