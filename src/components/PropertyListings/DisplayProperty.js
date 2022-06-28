function DisplayProperty({ property }) {
	return (
		<section className="property-display">
			<div className="property-img-container">
				<img src={property.image} alt="" />
			</div>
			<div className="property-info">
				<h2>{property.location}</h2>
				<p>{property.description}</p>
				<h3>{property.date}</h3>
				<h3>${property.cost_per_month}/month</h3>
			</div>
		</section>
	);
}

export default DisplayProperty;
