function DisplayProperty({ property }) {
	return (
		<section className="property-display">
			<div className="property-img-container">
				<img src={property.image} alt="" />
			</div>
			{property.location}
			{property.description}
			{property.cost_per_month}
		</section>
	);
}

export default DisplayProperty;
