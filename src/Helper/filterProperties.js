function filterProperties(allPropertyList, filters) {
	let newList = [];
	for (const property of allPropertyList) {
		if (
			property.cost_per_month >= filters.minPrice &&
			property.cost_per_month <= filters.maxPrice &&
			property.distance <= filters.maxDistance &&
			property.distance !== -1
		) {
			newList.push(property);
		}
	}
	localStorage.setItem(
		'filters',
		JSON.stringify({
			minPrice: filters.minPrice,
			maxPrice: filters.maxPrice,
			maxDistance: filters.maxDistance,
		})
	);
	return newList;
}

export default filterProperties;
